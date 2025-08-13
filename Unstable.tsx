import { useEffect } from "react";
// import { Clientable } from "./anys";
import { BaseElementProps, Div } from "./ctsx";
import BaseHOC from "./HOC";


export default class Unstable<ElementInterface = HTMLDivElement>{
    component:React.FC<BaseElementProps<ElementInterface>>
    hoc:BaseHOC<{},ElementInterface & HTMLDivElement>
    protected Type:string = ""
    get _(){
        return this.hoc._
    }

    classical(name:string){
        return `UNSTABLE-${name}`
    }

    constructor({Component = Div } = {}){
        this.component = Component as any
        this.hoc = new BaseHOC<{},ElementInterface & HTMLDivElement>({Component})
    }
    accept(Type:string){
        Type = this.classical(Type)
        if (this.hoc.Element){
            this.hoc.Element.classList.remove(this.Type)
        }
        this.Type = Type
        useEffect(()=>{
            this.hoc.Element?.classList.add(this.Type)
        })
    }
    release(victimType:string,selector="."){
        victimType = this.classical(victimType)
        const victims = document.querySelectorAll(`${selector}${victimType}`)
        victims.forEach(victim=>{
            this.hoc.Execute((element)=>{
                victim.innerHTML = ""
                victim.appendChild(
                    (element as any).cloneNode(true)
                )
            })
        })
    }
}