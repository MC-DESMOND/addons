"use client"
import React, {FC, useEffect, useState} from "react"
import { CompileStyle, FCssHelper, ICssHelper, styleKeys } from "./css"
import { BaseElementProps, Div, Hidden, Input, TextArea } from "./csml"
import {__all__, dict, ReplaceAll, useStateUpdate} from "./anys";
import {ListChildren} from "./anys";
import { ObjectEvent } from "./ObjectEvent";
import IObserver from "./IObserver";
import DataSaver from "./DataSaver";
import XListener, { XEvent } from "./ExtensibleListener";

/**
     * 
     * `BaseHOC` is a higher order component that lets you manipulate your element easier than `useRef`.
     * The `Component` param is the component which `BaseHOC` represents.
     * The `refee` param is `BaseHOC` Component ref, it is optional.
     * 
     * remember it is built for the CSML components.
     * 
     * **How to Use**
     *
     * ```
     * function testHoc(props){
     *     var hoc = new BaseHOC({Component:Div}) // for class Component ```new BaseHOC({Component:Div, refee:createRef()}) ```
     *     useEffect(()=>{
     *         settimeout(()=>{
     *              hoc.style.backgroundColor("red")
     *              hoc.style.transition("opacity 0.3s ease-in-out")
     *              hoc.Execute(element=>{
     *                      element.style.opacity = "0"
     *                  })
     *         },3000)
     *     },[])
     *     return <hoc.Render >test</hoc.Render>
     * }
     * 
     * ```
     * *GUDITTON*
     */
export default class BaseHOC<CustomProps = {},ElementInterface = HTMLDivElement>{
    
    protected ref:React.RefObject<ElementInterface> | React.MutableRefObject<undefined> | React.RefObject<null>
    public style
    public medias:dict<AtMedia> = {}
    private variables:dict = {}
    public existAs
    public Addons:dict<any[]> = {}
    public cnio:IObserver
    protected _hasRendered = false
    protected Component
    protected forceUpdate?:Function
    protected setAddons:any
    protected setAddonProps:any
    protected addonProps:dict = {}
    protected ConstTypeName = "-Const"
    protected onChangeTypeName = "-ChangeFunc"
    protected EventControl = new ObjectEvent()
    protected clientLoaded = "CLIENT-LOADED"
    protected _onStyleChangeEvent = new ObjectEvent()
    protected props:BaseElementProps<ElementInterface> = {}
    protected _rootData:DataSaver
    protected _rootStorage:DataSaver
    protected _rootListener:XListener
    _
    $
    onStyleChange(styleKey:styleKeys,func:Function){
        this._onStyleChangeEvent.on(styleKey,func)
    }

    ClearStyleChangeEvent(styleKey:styleKeys){
        this._onStyleChangeEvent.events[styleKey] = []
    }

   get access(){
        return this.variables
    }

    get rootdata(){
        return this._rootData
    }
    get storage(){
        return this._rootStorage
    }

    SetVariable(name:string, value?: any,onChange?:(name?:string,val?:any)=>void){
        let key = ReplaceAll(name, this.ConstTypeName,"")
        key = ReplaceAll(key, this.onChangeTypeName,"")
        if (!this.variables[key+this.ConstTypeName]) {
            if (!(onChange == undefined)){
                this.variables[key+this.onChangeTypeName] = onChange
            }else if (!this.variables[key+this.onChangeTypeName]){
                this.variables[key+this.onChangeTypeName] = (_name?:string,_val?:any)=>{}
            }
            if (!(value == undefined)){
                if (this.variables[key]){
                    this.variables[key+this.onChangeTypeName](key,value)
                }
                this.variables[key] = value
                
            }
        }else{
            console.log("tried assigning to a const variable: ",this.variables[key]," with value:",value)
        }
    }

    set(name:string, value?: any,onChange?:(name?:string,val?:any)=>void){
        this.SetVariable(name,value,onChange)
    }

    hasVariable(name:string){
        return this.GetVariable(name) != undefined
    }

    has(name:string){
        return this.hasVariable(name)
    }

    get rootListener(){
        return this._rootListener
    }
    
    Listen(key:string, func:(e:XEvent)=>void,lid?:string){
        this._rootListener.Listen(key,func,lid)
    }
    Announce(key:string,xevent:XEvent){
        this._rootListener.Announce(key,xevent)
    }
    Distract(key:string){
        this._rootListener.Distract(key)
    }
    
    ConstVariable(name:string, value: any){
            let key = ReplaceAll(name, this.ConstTypeName,"")
            key = ReplaceAll(key, this.onChangeTypeName,"")
        if (!this.variables[key+this.ConstTypeName]) {
            this.variables[key] = value
            this.variables[key+this.ConstTypeName] = true
        }else{
            console.log("tried assigning to a const variable: ",this.variables[key]," with value:",value)
        }
        
    }

    GetVariable(name:string) {
        // let key = ReplaceAll(name, this.ConstTypeName,"")        
        return this.variables[name]
    }
    get(name:string){
        return this.GetVariable(name)
    }

    GetVariableType(name:string) {
        // let key = ReplaceAll(name, this.ConstTypeName,"") 
        return typeof (this.variables[name])
    }

    IsVariableConst(name:string){
        let key = ReplaceAll(name, this.ConstTypeName,"") 
        return this.variables[key+this.ConstTypeName]
    }

    GetAllVariables(){
        return this.variables
    }

    Update(){
        if (this.forceUpdate){
            this.forceUpdate()
        }
    }
   

    constructor ({Component = Div,existAs, refee = React.useRef(null),props = {} }:{Component?:FC ,existAs?:Function,props?:BaseElementProps<ElementInterface>,refee?:React.RefObject<ElementInterface> | React.MutableRefObject<undefined> | React.RefObject<null>} = {}){
        this.ref = refee
        this.existAs = existAs
        this.style = {...FCssHelper,addStyle:(_styleDict:ICssHelper)=>{}}
        this.Component = this.InitComponent(Component)
        this.EffectifyStyle()
        this.cnio = new IObserver()
        this.props = props
        this._rootData = new DataSaver("BASEHOC|__root-data__",undefined)
        this._rootStorage = new DataSaver("BASEHOC|__root-data__",undefined,"localStorage")
        this._rootListener = new XListener("BASEHOC|__root-listener__")
        this._ = this.Render
        this.$ = this.ToRender

    }

    protected InitComponent(Component:FC){
        return Component
    }

    IObserve({styleIn,styleOut,classIn,classOut}:{styleIn?:ICssHelper,styleOut?:ICssHelper,classIn?:string,classOut?:string} = {}){
        this.cnio.init({styleIn,styleOut,classIn,classOut})
        if (this.Element){
            this.cnio.Observe(this.Element as any)
        }
    }

    UnObserve(){
        this.cnio.UnObserve(this.Element as any)
    }

    AddMedia(id:string,{media = ("max-width" as string | string[]),mediaElementFunc = ()=>window ,styleon = ({} as ICssHelper),styleoff = ({} as ICssHelper),pixels = (800 as number | number[]),onMedia = (_HOC:BaseHOC) => {},offMedia = (_HOC:BaseHOC) => {}} ={}){
        const Media = new AtMedia(this as any,{media,mediaElementFunc,styleon,styleoff,onMedia,offMedia,pixels})
        this.medias = {
            ...this.medias,
            [id]:Media
        }
        Media.Activate()
    }
    DestroyMedia(id:string){
        if (this.medias[id]){
            this.medias[id].Destroy()
        }
    }
    PauseMedia(id:string){
        if (this.medias[id]){
            this.medias[id].Pause()
        }
    }
    ContinueMedia(id:string){
        if (this.medias[id]){
            this.medias[id].Continue()
        }
    }
    get Element():ElementInterface | undefined|null{
        if (this.existAs) {
            return this.existAs()
        }else{
            return this.ref.current 
        }
    }
    innerText (val?:any){
        if (this.Element){
            if (val){
                (this.Element as any).innerText = val
            }
            else{
                return (this.Element as any).innerText
            }
        }
        return ""
    }
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, _options?: boolean | AddEventListenerOptions){
        this.AtWindow(()=>{
            (this.Element as any).addEventListener(type,listener)
        })
    }

    set onenter(func:Function){
        this.AtWindow(()=>{(this.Element as any).onmouseenter = func})
    }
    set onleave(func:Function){
        this.AtWindow(()=>{(this.Element as any).onmouseleave = func})
    }
    set onfocus(func:Function){
        this.AtWindow(()=>{(this.Element as any).onfocus = func})
    }
    Focus(){
        this.AtWindow(()=>{(this.Element as any).focus()})
    }

    AtWindow(Func:Function){
        if (this.Element){
            Func()
        }else{
            this.EventControl.on(this.clientLoaded,Func)
        }
        
    }

    innerHTML (val?:any,style?:ICssHelper){
        if (this.Element){
            if (val){
                if (style){
                    val = `<span style = "${CompileStyle(style)}">${val}</span>`
                }
                (this.Element as any).innerHTML = val
            }
            else{
                return (this.Element as any).innerHTML
            }
        }
        return ""
    }

    protected EffectifyStyle(){
        for ( const key of Object.keys(FCssHelper)){
            this.style = {...this.style,[key]:(value?:string)=>{
                const element = this.Element
                    if (element){
                        if (value) {
                            (element as any).style[key] = value
                            if (Object.keys(this._onStyleChangeEvent.events).includes(key)){ 
                                this._onStyleChangeEvent.emit(key,value)}
                            }
                        else{
                        return (element as any).style[key]
                        }
                    }
                
            }}
        }
        this.style.addStyle = (styleDict)=>{
            for(var key in styleDict){
                (this.style as any)[key]((styleDict as dict)[key])
            }
        }
    }

     public Execute(func = (_ele:ElementInterface)=>{}){
        const element =this.Element
        if (element){
            func(element)
        }
    }
    public get hasRendered(){
        return this._hasRendered
    }


    ToRender = ({children,renderId ,...props}:BaseElementProps<ElementInterface> & {renderId:any}) => {
        this.setAddons((e:any)=>{return {...e,[renderId]:ListChildren(children)}})
        
        this.setAddonProps((p:any)=> {
            return{...props,...p} 
        })

        return <Hidden></Hidden>
    }

    Render =(props:BaseElementProps<ElementInterface>& CustomProps) =>{
            this.forceUpdate = useStateUpdate()
            const addonsState = useState({})
            this.Addons = addonsState[0]
            this.setAddons = addonsState[1]
            const addonPropsState = useState([])
            this.addonProps = addonPropsState[0]
            this.setAddonProps = addonPropsState[1]
            this._hasRendered = true
            useEffect(()=>{
                this.EventControl.emit(this.clientLoaded)
            })
            return <this.Component Ref = {this.ref} {...this.props} {...props} {...this.addonProps} >
                {props.children}
                {Object.values(this.Addons)}
            </this.Component>
    }
}
type RT<T> =  T
export class SpiritHOC<CustomProps = RT<{}> ,ElementInterface = HTMLDivElement>{
    component:FC
    soulprops:BaseElementProps<ElementInterface> & CustomProps
    protected bodys:dict<BaseHOC> = {}
    HOCClass
    constructor ({Component=Div as FC<any>,soulprops=({} as BaseElementProps<ElementInterface> & CustomProps),HOCClass = BaseHOC} = {}){
        this.component = Component
        this.soulprops = soulprops 
        this.HOCClass = this.initHOC(HOCClass)
    }

    protected initHOC(HOC:typeof BaseHOC){
        return HOC 
    }

     GetSoulBySoulId(soulId:string){ 
        return this.bodys[soulId] 
    }

    CreateSoul({soulId,...addSoulprops}:BaseElementProps<ElementInterface>  & {soulId?:string} & CustomProps = {} as any){
        const soul = (props:BaseElementProps<ElementInterface> & CustomProps)=>{
            return <this.component {...this.soulprops} {...addSoulprops} {...props}>{props.children}</this.component>
        }
        const body = new this.HOCClass<CustomProps,ElementInterface>({Component:soul as any})
        if (soulId){
            this.bodys[soulId] = body as any
        }
        return body
    }

    RenderSoul = ({soulId,...props}:BaseElementProps<ElementInterface> & dict & {soulId?:string} )=>{
        const body = new this.HOCClass<CustomProps,ElementInterface>({Component:this.component as any})
        if (soulId){
            this.bodys[soulId] = body as any
        }
        return <body.Render {...this.soulprops as any} {...props as any}>{props.children}</body.Render>
    }
}


export class AtMedia{
    isDestroyed: boolean = false
    isPaused: boolean = false
    media:string[] = ["max-width"]
    pixels:number[] = [800]
    interval:any
    mediaElementFunc = ()=>window
    styleon = {}
    styleoff = {}
    onMedia = (_HOC:BaseHOC) => {}
    offMedia = (_HOC:BaseHOC) => {}
    hasOnMedia = false
    hasOffMedia = false
    hoc:BaseHOC
    listMedia:string[] = []
    determinant:string ='and'
    aliveTest = (_media:AtMedia) =>{}
    constructor(hoc:BaseHOC,{media = ("max-width" as string | string[]),determinant = "and",test = (_media:AtMedia)=>{},pixels = (800 as number | number[]),mediaElementFunc = ()=>window ,styleon = {},styleoff = {},onMedia = (_HOC:BaseHOC) => {},offMedia = (_HOC:BaseHOC) => {}} = {}){
        this.media = typeof(media) == "string" ?[media]:media
        this.mediaElementFunc = mediaElementFunc
        this.styleoff = styleoff
        this.styleon = styleon
        this.pixels = typeof(pixels) == "number" ?[pixels]:pixels
        this.onMedia = onMedia
        this.offMedia = offMedia
        this.hoc = hoc
        this.determinant = determinant
        this.aliveTest = test
    }
    Destroy (){
        this.isDestroyed = true
    }

    Pause(){
        this.isPaused = true
    }

    Continue(){
        this.isPaused = false
    }

    Activate(){
        this.interval = setInterval(() => {
            this.hoc.Execute(()=>{
                if (this.isDestroyed){
                    clearInterval(this.interval)
                    this.isDestroyed = false
                }
                const mediaer = this.mediaElementFunc()
                if (!this.isPaused){
                    this.listMedia = []
                    for (var idx in this.media){
                        this.listMedia.push(`(${this.media[idx]}:${this.pixels[idx] || this.pixels[Number(idx)-1] || this.pixels[0]}px)`)
                        
                    }
                    // console.log(this.stringMedia)
                     this.aliveTest(this)
                    if (this.listMedia[this.determinant.toLowerCase() == "and"?"every":"some"]((stringMedia:string)=>mediaer.matchMedia(stringMedia).matches)) {
                        // console.log(this.stringMedia)
                        if (!this.hasOnMedia){
                            this.onMedia(this.hoc)
                            this.hasOffMedia = false
                            this.hasOnMedia = true
                        }
                        for (const key of Object.keys(this.styleon)) {
                            (this.hoc as any).style[(key)]((this.styleon as any)[(key)]);
                            // console.log(`[${this.styleon[key]}] ${this.style[key]()}`)
                        }
                    } else {
                        if (!this.hasOffMedia){
                            this.offMedia(this.hoc)
                            this.hasOnMedia = false
                            this.hasOffMedia = true
                        }
                        for (const key of Object.keys(this.styleoff)) {
                            (this.hoc as any).style[(key)]((this.styleoff as any)[(key)]);
                            // console.log(`[${styleoff[key]}] ${this.style[key]()}`)
                        }
                    }
                }
            })
        },1)
    }
}

// callback:(entries:IntersectionObserverEntry[], cnio: IntersectionObserver) => void,options?:IntersectionObserverInit



export var HOCS = {
    
}
export class InputHOC extends BaseHOC<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>{
    protected InitComponent(_Component: FC): React.FC {
        return Input
    }
    value(val?:string){
        if (this.Element){
            if (val){
                this.Element.value = val}
            else{
                return this.Element.value
            }
        }
        return ""
    }
}




export class AnchorHOC extends BaseHOC<React.AnchorHTMLAttributes<HTMLAnchorElement>,HTMLAnchorElement>{}
export class LinkHOC extends BaseHOC<React.LinkHTMLAttributes<HTMLLinkElement>,HTMLLinkElement>{}
export class VideoHOC extends BaseHOC<React.VideoHTMLAttributes<HTMLVideoElement>,HTMLVideoElement>{}
export class AudioHOC extends BaseHOC<React.AudioHTMLAttributes<HTMLAudioElement>,HTMLAudioElement>{}
export class ImageHOC extends BaseHOC<React.ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>{}
export class TextAreaHOC extends InputHOC{
    protected InitComponent(_Component: FC): React.FC {
        return TextArea
    }
}

    
export class InputSpiritHOC extends SpiritHOC<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>{
    protected initHOC(HOC: typeof BaseHOC) {
        return InputHOC as any
    }
}