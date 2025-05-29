"use client"
import { useEffect, useRef,FC } from "react"
import { mergeText,dict } from "./anys"
import {Div} from "./csml";


export interface CIEvent extends Event{
    detail:{
        channel:string,
        data:any
    }
}


/*
@depreciated
use `Xlistener` instead 
 */
export class CEXModel{
    
    
    uniType
    channels:string[] = []
    dispatcher:dict<Function> = {Public:(data:string|dict|number)=>{},Every:(data:string|dict|number)=>{}}
    constructor(uniType:string){
        this.uniType = uniType

    }

    MakeChannelDispatcher(channel:string){
        this.dispatcher[channel] = (data:string|dict|number)=>{
            this.CEXDispatch(channel, data)
        }
        this.dispatcher["Public"] = (data:string|dict|number)=>{
            this.CEXDispatch("Public", data)
        }
        this.dispatcher["Every"] = (data:string|dict|number)=>{
            this.CEXDispatch("Every", data)
        }
    }

    protected CEventX(channel:string,data = {}){return new CustomEvent(this.uniType,{detail:{channel:channel,data:data}})}
    protected FIDispatch(Event:CustomEvent,selector = "*"){
        if (window){
            
            const ListAll = document.querySelectorAll(`.${selector}`)
            ListAll.forEach((el)=>{
                el.dispatchEvent(Event)
            })
        }
    }

    protected CEXDispatch(channel:string,data:string|dict|number = {}){this.FIDispatch(this.CEventX(channel,data),this.uniType)}

    CEXEffectCreate ({channel,Public,existOn = ()=>document.body,onEvent,idAdd=""}:{channel:string,Public?:Function,existOn?:Function, onEvent?:Function,idAdd?:string}){
      Public = Public || function(..._arg:any[]){}
      onEvent = onEvent || function(..._arg:any[]){}
      if (window){
        const func = onEvent
        const Channel = channel
        const type = this.uniType
        const id = `${this.uniType}-${channel}-${idAdd}`
        if (document.getElementById(id)){}else{  const el = document.createElement("div")
          el.id = id
          el.style.display = "none"
          el.className = this.uniType
            this.MakeChannelDispatcher(channel)
          el.addEventListener(type,(e:(CIEvent | Event))=>{
              Public(e)
              const E = (e as CIEvent)
              if ([Channel,"Every"].includes(E.detail.channel )){
                  func(e)

              }
          })
          existOn().appendChild(el)}
      }
    }

    CEXRenderCreate:FC<{channel:string,Public?:Function,onEvent?:Function,idAdd?:string}> =(
        {channel = "", Public = function(..._arg:any[]){},idAdd="", onEvent = function(..._arg:any[]){}}
    )=>{
       
        this.MakeChannelDispatcher(channel)
        const ref:any = useRef(null)
        useEffect(
            ()=>{
                const func = onEvent
                const type = this.uniType
                const el:HTMLBaseElement = ref.current 
                el.id = `${this.uniType}-${channel}-${idAdd}`
                el.addEventListener(type,(e:(CIEvent | Event))=>{
                    Public(e)
                    const E = (e as CIEvent)
                    if ([channel,"Every"].includes(E.detail.channel)){
                        func(e)

                    }
                })
    
            },[]
        )
        return <Div Ref={ref} className={mergeText(this.uniType)} display={"none"} />
    }
}