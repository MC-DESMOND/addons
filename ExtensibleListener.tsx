import { Clientable, dict } from "./anys";
import DataSaver from "./DataSaver";
import { ObjectEvent } from "./ObjectEvent";

export interface XEvent{
    called?:number
    data:any
    key?:string
    interval?:any
    target?:Element
}

export interface Listener{
    called:number
    listenid:string
    intervals:any[]
    key:string
    destroyed?:boolean
}

export default class XListener{
    events:DataSaver
    listeners:DataSaver
    private objectEvent:ObjectEvent
    constructor(id:string){
        this.events = new DataSaver(id+"--events")
        this.listeners = new DataSaver(id+"--lnrs")
        this.objectEvent = new ObjectEvent()
    }


    Listen(key:string,func:(e:XEvent)=>void,lid?:string){
        if (this.objectEvent.has(key)){
            this.objectEvent.on(key,func)
            return
        }
        this.objectEvent.on(key,func)
        const listenid:string = lid || key
        let listener:Listener = this.listeners.has(listenid)?this.listeners.load(listenid):{
                called:0,
                listenid:listenid,
                intervals:[],
                key:key
            }as Listener

        const Caller = (e:XEvent)=>this.objectEvent.emit(key,e)
        let xevent:XEvent
         if (this.listeners.has(listenid)){
            if (listener.destroyed){
                listener.destroyed = undefined
            }else{
                return 
            }
                 
        }
        const Loop = () => {
           
            if (this.events.has(key)){
                xevent = this.events.load(key)
                if ((xevent.called as any) > listener.called){
                    /* console.log(xevent.called)
                    console.log(called) */
                    listener.called = xevent.called as any
                    Clientable(()=>{
                        this.listeners.save(listenid,listener)
                    })
                    Caller(xevent)
                
                }
            }
            

             if (!listener.destroyed){
                    requestAnimationFrame(Loop)
            } 
            try{
                if (window){
                    if(!this.listeners.has(listenid)){
                        this.listeners.save(listenid,listener)
                    }
                }else{
                        listener.destroyed = true
                        this.listeners.save(listenid,listener)
                    }
            }catch(e){}
            

        }
       Loop()
    }

    Distract(key:string){
        for (var lnrid of Object.keys(this.listeners.access)){
            const lnr =  this.listeners.load(lnrid) as Listener
            if (lnr.key == key){
                lnr.destroyed = true
            }
            lnr.intervals = []
            this.listeners.save(lnrid,lnr)
        }
    }

    Announce(key:string,xevent:XEvent){
        if (this.events.has(key)){
            xevent.called = this.events.load(key).called
        }else{
            xevent.called = 0
        }
        (xevent as any).called += 1
        xevent.key = key
        // console.log("pre--",preEvent)
        this.events.save(key,xevent)
    }

}