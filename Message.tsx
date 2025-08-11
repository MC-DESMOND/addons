import { ReactNode } from "react";
import BaseHOC from "./HOC";
import { ICssHelper } from "./css";
import CWind from "./cwind";
import { dict, list } from "./anys";
import { BaseElementProps } from "./ctsx";

interface Ianime {
            off?: ICssHelper, 
            on?: ICssHelper, 
            before?:ICssHelper, 
            after?:ICssHelper
        }

interface IMessageAnimation{
    on?: boolean,
    off?: boolean,
    delay?: number,
}

export default class MessageHOC{
    protected core:BaseHOC
    protected time:number
    protected effect:string
    protected anime
    protected animating
     animations:list<[string,any]> = []
    protected AnimationClassifier
    protected isWaiting
    protected current
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
        this.isWaiting = false
        this.animating = false
        this.AnimationClassifier = {
            "on":()=>this.on(),
            "delay":(time:number)=>this.delay(time),
            "off":()=>this.off(),
        }
        this.current = 0
    }

    get Core(){
        return this.core
    }
    delay(time:number){
        this.isWaiting = true
        setTimeout(() => {
            this.isWaiting = false
        }, time);
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
    onOn = ()=>{}
    onOff = ()=>{}
    on(){
        this.updateCore()
        this.core.Execute(el=>{
            // console.log(el)
            this.core.style.addStyle(this.anime.before || {})
            this.onOn()
            setTimeout(()=>{this.core.style.addStyle(this.anime.on || {})},10)
        })
    }
    
    off(){
        this.updateCore()
        this.core.Execute(el=>{
            this.core.style.addStyle(this.anime.off || {})
            setTimeout(() => {
                this.core.style.addStyle(this.anime.after || {})
                this.onOff()
            }, this.time);
        })
    }

    _ = (props:BaseElementProps)=>{
        return <this.core._ position="fixed" {...this.anime.off} {...this.anime.after} {...props}>
            {props.children}
        </this.core._>
    }
    Render = this._

    LoopAnimations(animations:list<IMessageAnimation>){
        this.animations = []
        this.animating = false
        for(let animation of animations){
            if (animation.delay){
                this.animations.push(["delay",animation.delay])
            }else if (animation.on){
                this.animations.push(["on",animation.on])
            }else if (animation.off){
                this.animations.push(["off",animation.off])
            }
        }
        this.current = 0
        this.animating = true
        // console.log(this.animations)
        const IntervalAnimate = ()=>{
            if (!this.isWaiting){
                this.AnimationClassifier[this.animations[this.current][0] as "on" | "off" | "delay"](this.animations[this.current][1] as any)
                if (this.animations[this.current][0]!= "delay"){
                    this.delay(this.time+30)}
                this.current  = this.current < this.animations.length-1? this.current+=1 : 0  
            }
            if (this.animating){
                requestAnimationFrame(IntervalAnimate)
            }
            // console.log(this.current)
            // console.log(this.core.style.display())
        }
        IntervalAnimate()
    }

    killLoop(){
        this.animating = false
        this.animations = []
        this.current = 0
        this.isWaiting = false
    }

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