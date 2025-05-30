"use client"
import { dict } from "./anys";
import { Hidden } from "./csml";


export class ObjectEvent{
    events: dict<Function[]> = {};

    on(eventName: string, callback: Function) {
        if (!this.has(eventName)) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }
    has(eventName:string){
        return Object.keys(this.events).includes(eventName)
    }

    off(eventName: string, callback: Function) {
        if (!this.has(eventName)) {
            return
        }
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
        }
    }
    
    clearEvent(eventName:string){
        if (!this.has(eventName)) {
            return
        }
        this.events[eventName] = []
    }

    emit(eventName: string, ...args: any[]) {
        if (!this.has(eventName)) {
            return
        }
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => callback(...args));
        }
    }
    
}


export class OERModel{
    modelType:string
    dispatcher:dict<Function> = {}
    events:ObjectEvent = new ObjectEvent()

    constructor (type:string){
        this.modelType = type
    }

    DispatchAll(...args:any[]){
        Object.values(this.dispatcher).forEach(EventFunction=>{
            EventFunction(...args)
        })
    }

    CreateChannelDispatcher(channel:string,onEvent:Function){
        this.events.off(channel,onEvent)
        this.events.on(channel,onEvent)
        this.dispatcher[channel] = (...args:any[])=>{
            this.events.emit(channel,...args)
            return true
        }
    }

    EffectCreate(channel:string,onEvent:Function){
        this.CreateChannelDispatcher(channel,onEvent)
    }

    RenderCreate = (props:{channel:string,onEvent:Function})=>{
        this.CreateChannelDispatcher(props.channel,props.onEvent)
        return <Hidden></Hidden>
    }

}