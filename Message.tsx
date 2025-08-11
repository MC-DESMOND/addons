import { ReactNode } from "react";
import BaseHOC from "./HOC";
import { ICssHelper } from "./css";
import CWind from "./cwind";
import { dict } from "./anys";
import { BaseElementProps } from "./ctsx";

interface Ianime {
            off?: ICssHelper, 
            on?: ICssHelper, 
            before?:ICssHelper, 
            after?:ICssHelper
        }

export default class MessageHOC{
    protected core:BaseHOC
    protected time:number
    protected effect:string
    protected anime
    constructor({
        time = 1000, effect = "ease-in-out", 
        anime = {
            off : {opacity:"0",scale:"0.7"} , 
            on : {opacity:"1",scale:"1"} , 
            before:{display:"block"}, 
            after:{display:"none"} 
        } as Ianime} = {}){
        this.core = new BaseHOC()
        this.time = time
        this.effect = effect
        this.anime = anime
    }

    get Core(){
        return this.core
    }

    set Time (val:number){
        this.time = val
        this.updateCore()
    }
    get Time (){return this.time}

    set Effect (val:string){
        this.effect = val
        this.updateCore()
    }
    get Effect (){return this.effect}

    on(){
        this.updateCore()
        this.core.Execute(el=>{
            this.core.style.addStyle(this.anime.before || {})
            setTimeout(()=>{this.core.style.addStyle(this.anime.on || {})},10)
        })
    }
    off(){
        this.updateCore()
        this.core.Execute(el=>{
            this.core.style.addStyle(this.anime.off || {})
            setTimeout(() => {
                this.core.style.addStyle(this.anime.after || {})
            }, this.time);
        })
    }

    _ = (props:BaseElementProps)=>{
        return <this.core._ position="fixed" {...this.anime.off} {...this.anime.after} {...props}>
            {props.children}
        </this.core._>
    }
    Render = this._

    updateAnime(Dict = {
            off :{}, 
            on :{}, 
            before:{}, 
            after:{}
        } as Ianime){
            this.anime = {...this.anime,...Dict}
            this.updateCore()
        }

    updateCore(){
        this.core.Execute(element=>{
            this.core.style.addStyle(CWind.TransitionMerge(Object.keys({...this.anime.on,...this.anime.off}),` ${this.time}ms ${this.effect}`))
        })
    }

}