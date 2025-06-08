"use client"
import { dict, useStateUpdate } from "./anys";
import BaseHOC from "./HOC";
import { BaseElementProps, Div, EButton } from "./csml";
import { DocumentAddStyle, ICssHelper } from "./css";
import {  ReactNode, useEffect } from "react";
import HeadWind from "./cwind";
import DataSaver from "./DataSaver";
import CWind from "./cwind";
import XListener from "./ExtensibleListener";

type DictButton = {innerText:ReactNode} & BaseElementProps<HTMLDivElement>
const LoadifyBootstrapActivate = ()=>{
    DocumentAddStyle(`    
        .loadingIcon { width: 50px; aspect-ratio: 1; display: grid; color: #ffffff; background: radial-gradient(farthest-side, currentColor calc(100% - 6px),#0000 calc(100% - 5px) 0); -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 13px),#000 calc(100% - 12px)); border-radius: 50%; animation: l19 2s infinite linear; } 
        .loadingIcon::before, 
        .loadingIcon::after { content: ""; grid-area: 1/1; background: linear-gradient(currentColor 0 0) center, linear-gradient(currentColor 0 0) center; background-size: 100% 10px,10px 100%; background-repeat: no-repeat; } 
        .loadingIcon::after { transform: rotate(45deg);@keyframes l19 {100%{transform: rotate(1turn)}@keyframes rotate { 100%{ transform: rotate(360deg); }
        .loadingIcon2 { width: fit-content; font-weight: bold; font-family: monospace; font-size: 30px; background: linear-gradient(135deg,#0000 calc(50% - 0.5em),#000 0 calc(50% + 0.5em),#0000 0) right/300% 100%; animation: l22 2s infinite; } 
        .loadingIcon2::before { content: "Loading..."; color: #0000; padding: 0 5px; background: inherit; background-image: linear-gradient(135deg,#0000 calc(50% - 0.5em),#fff 0 calc(50% + 0.5em),#0000 0); -webkit-background-clip:text; background-clip:text;@keyframes l22{ 100%{background-position: left}
        .loadingIcon3 { width: 50px; aspect-ratio: 1; display: grid; border: 4px solid #0000; border-radius: 50%; border-right-color: #ffffff; animation: l15 1s infinite linear; } 
        .loadingIcon3::before, 
        .loadingIcon3::after { content: ""; grid-area: 1/1; margin: 2px; border: inherit; border-radius: 50%; animation: l15 2s infinite; } 
        .loadingIcon3::after { margin: 8px; animation-duration: 3s; } @keyframes l15{100%{transform: rotate(1turn)}
        .loadingIcon4 { width: 50px; aspect-ratio: 1; border-radius: 50%; background:radial-gradient(farthest-side,#ffffff 94%,#0000) top/8px 8px no-repeat, conic-gradient(#0000 30%,#ffffff); -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0); animation: l13 1s infinite linear; } @keyframes l13{100%{transform: rotate(1turn)}
        .loadingIcon5 { width: 40px; aspect-ratio: 1; color: #1d6485; position: relative; background: radial-gradient(10px,currentColor 94%,#0000); } 
        .loadingIcon5:before { content: ''; position: absolute; inset: 0; border-radius: 50%; background: radial-gradient(9px at bottom right,#0000 94%,currentColor) topleft, radial-gradient(9px at bottom left ,#0000 94%,currentColor) topright, radial-gradient(9px at topright,#0000 94%,currentColor) bottom left, radial-gradient(9px at topleft ,#0000 94%,currentColor) bottom right; background-size: 20px 20px; background-repeat: no-repeat; animation: l18 1.5s infinite cubic-bezier(0.3,1,0,1); } @keyframes l18 { 33%{inset:-10px;transform: rotate(0deg)} 66%{inset:-10px;transform: rotate(90deg)} 100% {inset:0;transform: rotate(90deg)}
        .loadingIcon6 { height: 4px; width: 130px; --c:no-repeat linear-gradient(#1d6485 0 0); background: var(--c),var(--c),#d7b8fc2d; background-size: 60% 100%; animation: l16 3s infinite; } @keyframes l16 { 0% {background-position:-150% 0,-150% 0} 66%{background-position: 250% 0,-150% 0} 100% {background-position: 250% 0, 250% 0} }`
)}
export type LoadifyBootstrap = (
    "loadingIcon" | 
    "loadingIcon2" | 
    "loadingIcon3" | 
    "loadingIcon4" | 
    "loadingIcon5" | 
    "loadingIcon6"
)
export default class Alerter{
    protected wrapper = new BaseHOC()
    control = new BaseHOC() 
    info = new BaseHOC()
    globalButtonsProps:dict = {}
    wrapperStyle:ICssHelper = {}
    controlStyle:ICssHelper = {}
    protected loadingControlStyle:ICssHelper = {}
    infoStyle:ICssHelper = {}
    defaultButton:DictButton = {innerText:"OK",textAlign:"left"}
    isOpened = false
    innerText:ReactNode = undefined
    display = ""
    loadingIconClassName = "loadingIcon"
    cache:dict = {}
    _
    _rootlistener:XListener
    openStyle
    closeStyle
    time
    alert
    remote
    private effect
    isloadify = false
    tapParentToClose = false
    protected previousAlert: "NONE" | "ASK" | "ALERT" | "LOADIFY" | "ICONIFY" = "NONE"
    protected daButtons:any[] = [
        <EButton key = {1} backgroundColor={"rgba(59, 130, 246, 0.7)"} onClick={()=>{this.close()}} color={"white"}>ok</EButton>,
        
    ]
    update:any
    
    protected open(){
        this.display = "grid"
        this.update()
        this.isOpened = true
        setTimeout(() => {
            this.control.style.addStyle (this.openStyle)
        }, 10);
        
    }
    close(){
        this.display = "none"
        this.control.style.addStyle(this.closeStyle)
        this.isOpened = false
        setTimeout(() => {
            this.update()
        }, this.time);
    }
    constructor({button = {} as BaseElementProps<HTMLDivElement>,remote = undefined as string | undefined,effect="ease-in-out",openStyle= {opacity:"1",scale:"1"} as ICssHelper ,closeStyle = {opacity:"0",scale:"1.2"} as ICssHelper,time = 300}={}){
            this.globalButtonsProps  = {
                backgroundColor:button.background || "rgba(59, 130, 246, 0.7)",
                color:"white",
                textAlign:"center",
                onClick:()=>{this.close()},
                ...button
            }
        this.openStyle = openStyle
        this.closeStyle = closeStyle
        this.time = time
        this.remote = remote
        this.effect = effect
        this.display = "none"
        this._ = this.Render
        this._rootlistener = new XListener("ALERTER|")
        LoadifyBootstrapActivate()
        this.alert = this.Alert
    }

    get rootlnr(){
        return this._rootlistener
    }

    initLnrs(remoteId:string){
        this.rootlnr.Listen(`${remoteId}.alert`,e=>{
            // console.log(`${remoteId}.alert `)
            this.Alert(e.data.text)
        })
        this.rootlnr.Listen(`${remoteId}.ask`,e=>{
            // console.log(`${remoteId}.ask`)
            this.ask(e.data.text,e.data.buttons)
        })
        this.rootlnr.Listen(`${remoteId}.loadify`,e=>{
            // console.log(`${remoteId}.loadify`)
            this.Loadify(e.data.text,{className:e.data.className})
        })
        this.rootlnr.Listen(`${remoteId}.iconify`,e=>{
            // console.log(`${remoteId}.iconify`)
            this.Iconify(e.data.text,e.data.tpc)
        })
    }
 

    protected generateButtons(buttons?:DictButton[]){
        this.daButtons = []
        if (!buttons){
            buttons = [this.defaultButton]
        }
        let ky = 0
        for (let button of buttons){
            ky ++
            const innerText = button.innerText
            button = button
            const props:dict = {}
            for(let key of Object.keys(button))
                if (key != "innerText"){
                    props[key] = (button as dict)[key]
                }
            let buttonCom = [<EButton key = {ky} {...this.globalButtonsProps}  {...props}>{innerText}</EButton>]
            this.daButtons.push(buttonCom[0])
        }
    }
    ask(message:ReactNode,buttons?:DictButton[],tapParentToClose?:boolean){
        if (this.remote){
            this.rootlnr.Announce(`${this.remote}.ask`,{data:{text:message,buttons:buttons}})
            return
        }
        this.tapParentToClose = tapParentToClose != undefined ? tapParentToClose : true
        this.isloadify = false
        this.generateButtons(buttons)        
        this.innerText = message
        this.open()
        this.previousAlert = "ASK"
    }

    Alert(message:ReactNode){
        if (this.remote){
            this.rootlnr.Announce(`${this.remote}.alert`,{data:{text:message}})
            return
        }
        this.ask(message)
        this.previousAlert = "ALERT"
    }

    Iconify(com:ReactNode,buttons:DictButton[] = [],tapParentToClose?:boolean){
        if (this.remote){
            this.rootlnr.Announce(`${this.remote}.iconify`,{data:{text:com}})
            return
        }
        this.ask(com,buttons,tapParentToClose)
        this.previousAlert = "ICONIFY"
       
    }

    Loadify(text?:ReactNode,{className,loadifyWrapperStyle = {gap:"20px"},style = {background:"transparent"}}:{className?:string ,style?:ICssHelper,loadifyWrapperStyle?:ICssHelper} = {}){
        if (this.remote){
            this.rootlnr.Announce(`${this.remote}.loadify`,{data:{text,className}})
            return
        }
        if (className == undefined){
            className = this.loadingIconClassName
        }
        this.isloadify = true
        this.loadingControlStyle  = style
        this.Iconify(<Div display="flex" alignItems="center" justifyContent="center" {...(loadifyWrapperStyle as dict)}>
            <Div className={className}></Div>
            {text != undefined &&text}
        </Div>,undefined,false)
        this.isloadify = true
        this.previousAlert = "LOADIFY"
    }

    Render = ({children,...props}:BaseElementProps<HTMLDivElement>)=>{
        const update = useStateUpdate()
        this.update = update
        
        // console.log(this.update)
        return <this.wrapper._ comment="Alerter"  background="rgba(0,0,0,0.7)" backdropFilter="blur(10px)" {...(this.wrapperStyle as dict)} position="fixed" width="100vw" height="100vh" top="0" left="0"  zIndex="1000" display={this.display} placeItems="center" onClick={
            (e)=>{
                this.wrapper.Execute((element)=>{
                    if (e.target == element){
                        if (this.tapParentToClose && this.previousAlert != "LOADIFY"){
                            this.close()
                        }
                    }
                })
            }
        }>
                {children}
                <this.control._ minHeight="150px" {...CWind.TransitionMerge([...Object.keys(this.openStyle)],`${this.time}ms ${this.effect}`)} {...this.closeStyle} gap="20px" boxSizing="border-box" minWidth="200px" maxWidth="300px" width="90%" overflowX="hidden"  padding="20px" display="flex" alignItems="center" justifyContent="center" flexDirection="column" borderRadius="15px" background="rgba(80,80,80,0.3)" {...(this.controlStyle as dict)} {...(this.isloadify? this.loadingControlStyle as dict:{})} {...props}>
                    <this.info._ width="100%" display="flex" justifyContent="center"  gap="20px" alignItems="center" flexDirection="column" {...(this.infoStyle as dict)}>
                           {this.innerText != undefined && <Div width="100%" textAlign="center" overflowWrap="break-word" overflow="hidden">{this.innerText}</Div>}
                    </this.info._>
                     {this.daButtons.length > 0 && <Div display="grid" width="100%" gap="10px" gridTemplateColumns="repeat(auto-fit,minmax(90px,1fr))">
                        {this.daButtons}
                    </Div>  }
                </this.control._>
        </this.wrapper._>
    }
    
}
























export class DangerousLoadify{
    protected wrapper:BaseHOC
    protected icon:BaseHOC
    protected loadingIconClassName 
    protected _message:string | undefined
    public wrapperProps:ICssHelper
    public iconProps:ICssHelper
    public textProps:ICssHelper
    public time:number = 0.5
    public openOnStart:boolean
    public iconTranslate:string
    public text:BaseHOC
    public flex
    public gap
    _
    update:any
    constructor(iconClassName:string = "loadingIcon",{message = undefined as string | undefined,openOnStart = true,flex="row",gap="20px"} = {}){
        this.time = 0.5
        this.wrapper = new BaseHOC()
        this.text = new BaseHOC()
        this.wrapperProps = {}
        this.textProps = {}
        this.iconProps = {}
        this.iconTranslate = "40px"
        this.icon = new BaseHOC()
        this.openOnStart = openOnStart
        this.loadingIconClassName = iconClassName
        this._message = message
        this.flex = flex
        this.gap = gap
        this._ = this.Render
        LoadifyBootstrapActivate()
 

    }
    textInnerText(value:string | undefined){
        this.text.Execute((_element)=>{
            if (value){
                this.text.style.display("block")
                this.text.innerHTML(value)
            }else{
                this.text.style.display("none")
            }
        })
    }



    Render =({children}:{children?:any})=>{
        this.update = useStateUpdate()
        
        return <this.wrapper._ background="rgba(0,0,0,0.7)" zIndex="2000" backdropFilter="blur(10px)" opacity={this.openOnStart == true?"1":"0"} transition={`opacity ${this.time}s ease-in-out`} {...this.wrapperProps as any} position="fixed" top="0px" left="0px" {...HeadWind.Square("v")} {...HeadWind.GridColumnCenter("")}>
               {children}
                <Div {...HeadWind.Square("fit")} {...HeadWind.FlexRowAllCenter(this.gap)} flexDirection={this.flex} transform={this.openOnStart == true?"translateY(0px)":`translateY(${this.iconTranslate})`} transition={`transform ${this.time}s ease-in-out`}>
                    <this.icon._  className={this.loadingIconClassName}  {...this.iconProps as any}>
                        </this.icon._>
                    <this.text._ fontSize="18px" fontWeight="bolder" {...this.textProps as any} display={this._message?"block":"none"}>{this._message}</this.text._>
                </Div>
            </this.wrapper._>
    }
    addWrapperProps(props:ICssHelper){
        this.wrapperProps = {...this.wrapperProps,...props}
    }
    addIconProps(props:ICssHelper){
        this.iconProps = {...this.iconProps,...props}
    }
    setLoadingIconClassName(name:string){
        this.loadingIconClassName = name
    }
    open({time=undefined as undefined | number, message = undefined as string |undefined} = {}){
        this.time = time || this.time
        message = message || this._message
        this.textInnerText(message)
        this.wrapper.style.transition(`opacity ${time}s ease-in-out`)
        this.icon.style.transition(`transform ${time}s ease-in-out`)
        this.wrapper.style.opacity("1")
        this.icon.style.transform("translateY(0px)")
        setTimeout(() => {
            this.wrapper.style.display("grid")
        }, this.time * 1000); 
    }
    close({time=undefined as undefined | number,message = undefined as string |undefined} = {}){
        this.textInnerText(message)
        this.time = time || this.time
        this.wrapper.style.transform(`translateY(${this.iconTranslate})`)
        this.wrapper.style.opacity("0")
        setTimeout(() => {
            this.wrapper.style.display("none")
        }, this.time * 1000); 

    }
}


