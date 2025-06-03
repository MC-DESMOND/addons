"use client"
import { dict, useStateUpdate } from "./anys";
import BaseHOC from "./HOC";
import { BaseElementProps, Div, EButton, Pre } from "./csml";
import { ICssHelper } from "./css";
import { FC, ReactNode, useEffect } from "react";
import HeadWind from "./cwind";

type DictButton = {innerText:ReactNode} & BaseElementProps<HTMLDivElement>

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
            this.control.style.opacity ("1")
            this.control.style.translate ("0px 0px")
            

        }, 10);
        
    }
    close(){
        this.display = "none"
        this.control.style.translate ("0px 40px")
        this.control.style.opacity ("0")
        this.isOpened = false
        setTimeout(() => {
            this.update()
        }, 300);
    }
    constructor(globalButtonsProps:BaseElementProps<HTMLDivElement> = {}){
            this.globalButtonsProps  = {
                backgroundColor:globalButtonsProps.background || "rgba(59, 130, 246, 0.7)",
                color:"white",
                textAlign:"center",
                onClick:()=>{this.close()},
                ...globalButtonsProps
            }
        this.display = "none"
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
        this.tapParentToClose = tapParentToClose != undefined ? tapParentToClose : true
        this.isloadify = false
        this.generateButtons(buttons)        
        this.innerText = message
        this.open()
        this.previousAlert = "ASK"
    }

    Alert(message:ReactNode){
        this.ask(message)
        this.previousAlert = "ALERT"
    }

    Iconify(com:ReactNode,buttons:DictButton[] = [],tapParentToClose?:boolean){
        this.ask(com,buttons,tapParentToClose)
        this.previousAlert = "ICONIFY"
       
    }

    Loadify(text?:ReactNode,{className,loadifyWrapperStyle = {gap:"20px"},style = {background:"transparent"}}:{className?:string ,style?:ICssHelper,loadifyWrapperStyle?:ICssHelper} = {}){
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
        this.update = useStateUpdate()
        return <this.wrapper.Render comment="Alerter"  background="rgba(0,0,0,0.7)" backdropFilter="blur(10px)" {...(this.wrapperStyle as dict)} position="fixed" width="100vw" height="100vh" top="0" left="0"  zIndex="1000" display={this.display} placeItems="center" onClick={
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
                <this.control.Render minHeight="150px" transition="translate 0.4s ease-in-out, opacity 0.4s ease-in-out" opacity="1" translate="0px 0px" gap="20px" boxSizing="border-box" minWidth="200px" maxWidth="300px" width="90%" overflowX="hidden"  padding="20px" display="flex" alignItems="center" justifyContent="center" flexDirection="column" borderRadius="15px" background="rgba(80,80,80,0.3)" {...(this.controlStyle as dict)} {...(this.isloadify? this.loadingControlStyle as dict:{})} {...props}>
                    <this.info.Render width="100%" display="flex" justifyContent="center" gap="20px" alignItems="center" flexDirection="column" {...(this.infoStyle as dict)}>
                           {this.innerText != undefined && <Div width="100%" textAlign="center">{this.innerText}</Div>}
                    </this.info.Render>
                     {this.daButtons.length > 0 && <Div display="grid" width="100%" gap="10px" gridTemplateColumns="repeat(auto-fit,minmax(90px,1fr))">
                        {this.daButtons}
                    </Div>  }
                </this.control.Render>
        </this.wrapper.Render>
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

    }
    textInnerText(value:string | undefined){
        this.text.Execute((element)=>{
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
        return <this.wrapper.Render background="rgba(0,0,0,0.7)" zIndex="2000" backdropFilter="blur(10px)" opacity={this.openOnStart == true?"1":"0"} transition={`opacity ${this.time}s ease-in-out`} {...this.wrapperProps as any} position="fixed" top="0px" left="0px" {...HeadWind.Square("v")} {...HeadWind.GridColumnCenter("")}>
               {children}
                <Div {...HeadWind.Square("fit")} {...HeadWind.FlexRowAllCenter(this.gap)} flexDirection={this.flex} transform={this.openOnStart == true?"translateY(0px)":`translateY(${this.iconTranslate})`} transition={`transform ${this.time}s ease-in-out`}>
                    <this.icon.Render  className={this.loadingIconClassName}  {...this.iconProps as any}>
                        </this.icon.Render>
                    <this.text.Render fontSize="18px" fontWeight="bolder" {...this.textProps as any} display={this._message?"block":"none"}>{this._message}</this.text.Render>
                </Div>
            </this.wrapper.Render>
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


