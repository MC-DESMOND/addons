import { dict, empty } from "./anys"
import { UpdateElementStyle } from "./csml"
import { ICssHelper } from "./css"

export default class IObserver{

    observer?:IntersectionObserver 
    onIntersection?:Function
    onLeave?:Function
    isDestroyed = false
    styleIn
    styleOut
    classIn
    classOut
    constructor ({styleIn={},styleOut={},classIn = "",classOut=""}:{styleIn?:ICssHelper,styleOut?:ICssHelper,classIn?:string,classOut?:string} = {}){
        this.styleIn = styleIn
        this.styleOut = styleOut
        this.classIn = classIn
        this.classOut = classOut
        // this.observer = new IntersectionObserver(()=>{})
    }

    init({styleIn,styleOut,classIn,classOut}:{styleIn?:ICssHelper,styleOut?:ICssHelper,classIn?:string,classOut?:string} = {}){
        this.styleIn = styleIn || this.styleIn
        this.styleOut = styleOut || this.styleOut
        this.classIn = classIn || this.classIn
        this.classOut = classOut || this.classOut
        this.Disconnect()
        this.observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if (entry.isIntersecting){
                    UpdateElementStyle(entry.target as any,this.styleIn as dict)
                    empty(this.classIn)?"": entry.target.classList.add(this.classIn)
                    empty(this.classOut)?"":entry.target.classList.remove(this.classOut)
                    this.onIntersection?this.onIntersection(entry.target):""
                }else{
                    UpdateElementStyle(entry.target as any,this.styleOut as dict)
                    empty(this.classOut)?"":entry.target.classList.add(this.classOut)
                    empty(this.classIn)?"":entry.target.classList.remove(this.classIn)
                    this.onLeave?this.onLeave(entry.target):""

                }

            })
        })
    }
    setOnIntersection(fn:Function){
        this.onIntersection = fn
    }
    setOnLeave(fn:Function){
        this.onLeave = fn
    }
    setStyleIn(style:ICssHelper){
        this.styleIn = style
    }
    setStyleOut(style:ICssHelper){
        this.styleOut = style
    }
    setClassIn(className:string){
        this.classIn = className
    }
    setClassOut(className:string){
        this.classOut = className
    }
    Observe(element:Element){
        if (this.observer) this.observer.observe(element)
    }
    UnObserve(element:Element){
        if (this.observer) this.observer.unobserve(element)
    }
    Disconnect(){
        if (this.observer) this.observer.disconnect()
        this.isDestroyed = true
    }
}