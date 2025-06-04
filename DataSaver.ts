"use client"

import { Clientable, dict } from "./anys"
import  { Encryptor } from "./Encryptor"

export type EngineType =  "sessionStorage" | "localStorage" | "element"

export class Engine{
    id:string
    type:string
    fault?:string
    constructor(id:string,type:EngineType){
        this.type = type
        this.id = id
        this.fault = undefined
    }
    protected  getItem(key:string){
        return (window[this.type as any] as any).getItem(key)
    }
    protected  setItem(key:string,val:any){
        return (window[this.type as any] as any).setItem(key,val)
    }
    get Element(){
        return document.getElementById(this.id)
    }
    createElement(){
        const element = document.createElement("div")
        element.id = this.id
        element.style.display = "none"
        document.body.appendChild(element)
        return element
    }
    get innerText():string | undefined{
        if (this.type == "element")
        {
            if (this.Element != null){
                return this.Element.innerText
            }
            else{
                return this.fault
            }
        }
        else{
            let value
            try{
                 value = this.getItem(this.id)
                 if (value == null){
                    // this.setItem(this.id,"")
                    value = this.fault
                 }
                }catch(e){
                    value = this.fault
                }
            // console.log(value)
            return value
        }
    }
    set innerText(value:string){
        if (this.type == "element"){
            if (this.Element != null){
                this.Element.innerText = value
            }
        }else{
            this.setItem(this.id,value)
        }
    }

    exist(){
        if (this.type == "element"){
            return this.Element != null
        }else{
            return this.getItem(this.id) != null
        }
    }
}

export default class DataSaver{
    id:string
    elementId:string
    private _variables:dict = {}
    enc:Encryptor
    secretKey:string
    engine: Engine
    foundWindow:boolean = false
    constructor (id:string,secretKey ="AES-256-CBC",engine:EngineType = "element"){
        this.secretKey = secretKey
        this.id = id
        this.enc = new Encryptor(this.secretKey)
        this.elementId = `DATASAVER|${this.id}`
        this.engine = new Engine(this.elementId,engine)
        this.__init__()
    }

    get access(){
        this.collect()
        return this._variables
    }


    collect(){
        
        try{if (window){
            
                this.foundWindow = true

            
        }}catch(e){}
        if (this.foundWindow == true){
            try{
                this._variables = {...this._variables,...JSON.parse(this.enc.decrypt(this.engine.innerText as string))}
            }catch(e){
                this.dump()
            }
            // console.log(this._variables)
        }
    }

    dump(){
        try{if (window){
            this.foundWindow = true
        }}catch(e){}
        if (this.foundWindow == true){
            this.engine.innerText = this.enc.encrypt(JSON.stringify(this._variables))
        }
    }

    load(name:string):any | undefined{
        this.collect()

        return this._variables[name]
    }
    
    save(name:string, value?:any){
        this.collect()
        if (value != undefined){
            this._variables[name] = value
        }
        this.dump()
    }
    save_many(Dict:dict){
        for (let key in Dict){
            this.save(key,Dict[key])
        }
    }
    load_many(List:string[]){
        const Dict:dict = {}
        for(let key of List){
            Dict[key] = this.load(key)
        }
        return Dict
    }
    has_any(List:string[]){
        let bool:boolean[] = []
        for(let key of List){
            bool.push(this.has(key))
        }
        return bool.includes(true)
    }
    has_all(List:string[]){
        let bool:boolean[] = []
        for(let key of List){
            bool.push(this.has(key))
        }
        return !bool.includes(false)
    }
    has(name:string){
        return this.load(name) != undefined
    }
    
    __init__(){
        Clientable(()=>{
            if (this.engine.type == "element"){   
                 if (this.engine.Element){
                    this.collect()
                }else{
                    this.engine.createElement()
                    this.dump()
                    
                }}
        })
    }

    


}