"use client"

import { dict } from "./anys"
import CryptoJS from "crypto-js"


export class Encryptor{
    secretKey:string
    constructor(secretKey:string){
        this.secretKey = secretKey
    }
    encrypt(text:string){
        const ciphertext = CryptoJS.AES.encrypt(text, this.secretKey).toString();
        return ciphertext
    }
    decrypt(ciphertext:string){
        const bytes = CryptoJS.AES.decrypt(ciphertext, this.secretKey);
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedText
    }
    encryptFile(file:File){
        const reader = new FileReader();
        reader.onload = (event) => {
            const fileContent = event.target?.result as string;
            const encryptedContent = this.encrypt(fileContent);
            console.log("Encrypted file content:", encryptedContent);
        };
        reader.readAsText(file);
    }
    decryptFile(file:File){
        const reader = new FileReader();
        reader.onload = (event) => {
            const fileContent = event.target?.result as string;
            const decryptedContent = this.decrypt(fileContent);
            console.log("Decrypted file content:", decryptedContent);
        };
        reader.readAsText(file);
    }
    encryptObject(obj:any){
        const jsonString = JSON.stringify(obj);
        const encryptedString = this.encrypt(jsonString);
        return encryptedString;
    }
    decryptObject(encryptedString:string){
        const decryptedString = this.decrypt(encryptedString);
        const obj = JSON.parse(decryptedString);
        return obj;
    }
    encryptArray(arr:any[]){
        const jsonString = JSON.stringify(arr);
        const encryptedString = this.encrypt(jsonString);
        return encryptedString;
    }
    decryptArray(encryptedString:string){
        const decryptedString = this.decrypt(encryptedString);
        const arr = JSON.parse(decryptedString);
        return arr;
    }
        
}


function isdigit(obj:any){
    let isdigitBool = false
    if (isNaN(obj)){
        for (let i in obj){
            let x = obj[i]
            if ('1234567890'.includes(x)){
                isdigitBool = true
                console.log(x)
            }else{
                return false
            }
        }
        return isdigitBool
    }else{
        return true
    }
}
function range(start=0,stop:number){
    let List = []
    for (let i=Number(start); i<=Number(stop);i++){
        List.push(i)
    }
    return List
}
function ListInList (parentList:any[] , list2:any[]){
    let re = false
    for(let u in list2){
        if (parentList.includes(list2[u])){
            let re = true
        }else{
            return false
        }
    }
    return re
}

class Enc{
    /**
     * JavaScript (frontend) .osn Encryptor
     */
    spliter:string | any
    abc:string
    letterlist:any[]
    keystring:string
    key:string[]
    AllFunc:dict
    initKey:(...args:any)=>any
    constructor(key = 'MacD£sm0Nd',spliter ='!'+'/'+'£'){
        this.spliter = spliter
        this.abc = 'abcdefghijklmnopqrstuvwxyz'
        this.abc = this.abc+this.abc.toUpperCase()+'1234567890(){}[]#\\":+-=_&^*$;@,~|. '+"'"
        this.letterlist = Array.from(this.abc)
        for (let i in this.spliter){
            const o = this.spliter[i]
            if (this.letterlist.includes(o) == false){
                this.letterlist.push(o)
            }
            }
        this.keystring = key 
        this.key = Array.from(key)
        this.initKey = newKey =>{this.key = Array.from(newKey)}
        this.AllFunc ={
            enc:this.enc,
            dec:this.dec,
            uenc:this.uenc,
            udec:this.udec,
            uekey:this.uekey,
            udkey:this.udkey,
        }
    }
    changeSpliter(spliter:string | any){
        for (let i in spliter){
            let o = spliter[i]
            if (this.letterlist.includes(o) == false){
                this.letterlist.push(o)
            }
                }
        this.spliter = spliter }
    enc(str:string){
        let filtrate = []
        let string:any = String(str)
        for (let i in string ){
            let o  = string[i]
            if (this.letterlist.includes(o)){
                filtrate.push(String(this.letterlist.indexOf(o)))
            }
            else{
                filtrate.push(o)
            }
        }
        return filtrate.join(this.spliter)
        
    }
    dec(str:string ){
        let string = String(str)
        let slist = string.split(' ')
        for (let index in slist){
            let obj = String(slist[index])
            let filtrate = obj.split(this.spliter)
            for (let i in filtrate){
                let o = String(filtrate[i])
                if (isdigit(o)){
                    if (range(0,this.letterlist.length).includes(Number(o)) ){
                        filtrate[i] = this.letterlist[Number(o)]
                    }
                }
            }
            slist[index] = filtrate.join('')
        }
        return slist.join(' ')
    }
    uenc(str:string){
        let string = String(str)
        let fil = this.enc(string).split(this.spliter)
        for (let i in fil){
            let o = String(fil[i])
            if (isdigit(o)){
                fil[i] = Array.from(o).map(obj=>this.key[Number(obj)]).join('')
            }
        }
        return fil.join(this.spliter)
    }
    udec(str:string){
        let string = String(str)
        let fil = string.split(this.spliter)
        for(let i in fil){
            const o:string | any = fil[i]
            let newo = ""
            for (let j in o){
                let obj = o[j]
                if (this.key.includes(obj)){
                    newo += String(this.key.indexOf(obj))
                }
            }
            fil[i] = newo

        }
        return this.dec(fil.join(this.spliter))
    }
    uekey(key:string,str:string){
        let string = String(str)
        this.initKey(key)
        let encryption = this.uenc(string)
        this.initKey(this.keystring)
        return encryption
    }
    udkey(key:string,str:string){
        let string = String(str)
        this.initKey(key)
        let decryption = this.udec(string)
        this.initKey(this.keystring)
        return decryption
    }
    
    run(func:string,...Attr:any[]){
        let value
        // note: run ('uekey',key,text)
        let strFunc = String(this.AllFunc[func])
        let filteredStrFunc = strFunc.slice(strFunc.indexOf('('),strFunc.lastIndexOf('}')+1)

        let FUNCName = 'FUNCTION'
        filteredStrFunc = `function ${FUNCName}${filteredStrFunc}`
        filteredStrFunc = `${filteredStrFunc.slice(0,filteredStrFunc.indexOf('{')+1)}
        let enc = new Enc()
        let letterlist = [${this.letterlist.map(obj=> `"${obj}"`)}]
        let keystring = "${this.keystring}"
        ${filteredStrFunc.slice(filteredStrFunc.indexOf('{')+1)}
        `
        let FUNC = (params:any) => `
            ${filteredStrFunc}
        ${FUNCName}(${params.map((obj:any)=>`"${obj}"`)})
            `.replaceAll('\\','\\\\').replaceAll('this','enc')
        value = eval(FUNC(Attr))
        return value
    }

}



export default Enc
