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
    set (name:string, value?:any){
        this.save(name,value)
    }
    get(name:string):any | undefined{
        return this.load(name)
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

    createNode(name:string):SaverNode{
        return new SaverNode(name,this)
    }


}

let DefaultMap = new Map<string,dict>() 
export class SaverNode{
    name:string
    saver:DictSaver | DataSaver
    constructor(name:string,saver:DictSaver | DataSaver){
        this.name = name
        this.saver = saver
    }
    set(value:any){
        this.saver.set(this.name,value)
    }
    get():any | undefined{
        return this.saver.get(this.name)
    }
    has():boolean{
        return this.saver.has(this.name)
    }
    

}

export class DictSaver {
    id:string
    store:dict
    mainMap:Map<string,dict>
    constructor(id:string,initialMap = undefined as Map<string,dict> | undefined){
        this.id = id
        this.store = {}
        this.mainMap = initialMap || DefaultMap
        if (this.mainMap.has(this.id) == undefined){
            this.mainMap.set(this.id,{})
        }
    }

    save(name:string,value:any){
        this.store[name] = value
        this.mainMap.set(this.id,this.store)
    }
    load(name:string):any | undefined{
        return this.mainMap.get(this.id)?.[name]
    }
    has(name:string){
        return this.load(name) != undefined
    }
    get(name:string):any | undefined{
        return this.load(name)
    }
    set(name:string,value:any){
        this.save(name,value)
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
    createNode(name:string):SaverNode{
        return new SaverNode(name,this)
    }

}