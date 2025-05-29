"use client"


export function setItem(key:string,value:any,isjson:boolean = true){
    localStorage.setItem(key, isjson == false?value:JSON.stringify(value))
    return value
}


 export function getItem(key:string,Default:any,isjson:boolean = true){
    var Item = localStorage.getItem(key)
    if (Item == null){
        Item = setItem(key,Default,isjson)
    }
    return isjson==false?Item:(JSON.parse((Item as any)))
}

export function deleteItem(key:string){
    localStorage.removeItem(key)
}
export function deleteAll(){
    localStorage.clear()
}