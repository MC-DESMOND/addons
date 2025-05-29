"use client"
import React, { FC, ReactNode, useEffect } from "react";
import { BaseElementProps, Div } from "./csml";
import { CEXModel, CIEvent} from "./cexmodel"
import {dict, ListChildren, RandInt, useStateUpdate} from "./anys";
import { OERModel } from "./ObjectEvent";
import BaseHOC from "./HOC";


export default class BasicRouter{
    view = new BaseHOC()
    defaultPageIndex = 0
    currentPage?:string = undefined
    pages:dict<Function> = {}
    index:Function[] = []
    update:any | Function
    protected _pages:dict<ReactNode> = {}

    constructor(){

    }

    Route = ({name,...props}:{name:string} & BaseElementProps<HTMLDivElement>)=>{
        this._pages[name]  = [<Div key={1} {...props}>{props.children}</Div>]
        const pageDispatcher = ()=>{
            this.view.SetVariable("current",name)
            this.currentPage = name
            this.update()
        }
        this.pages[name] = pageDispatcher
        this.index.push(pageDispatcher)
        return <></>
    }

    Render = (props:BaseElementProps<HTMLDivElement>)=>{
        this.update = useStateUpdate()
        this.view.SetVariable("current",this.view.GetVariable("current") || "")
        useEffect(()=>{
             if (this.currentPage == undefined){this.index[0]()}
        },[])
        return <this.view.Render>
            {this._pages[this.view.GetVariable("current")]}
            {props.children}
        </this.view.Render>
    }
}


export  class BasicRouterDeprecated {

    pages: { [key: string]: ReactNode } = {};
    pageNameList:string[] = []
    defaultPage:string = ""
    channel:string = ""
    children:any[] = []
    changeModel = new OERModel("RouterChangeModel")
    // props:React.PropsWithChildren<any>


    CreatePage(PageName:string,tag = "div"){
        this.pageNameList.push(PageName)
        var Component =({...props}:BaseElementProps<HTMLParagraphElement>)=>{
            return <>{React.createElement(tag,props)}</>
        }
        return Component
    }

    GetPage(PageName:string){
        return this.pages[PageName]
    }


    Refine(): void {
        var children = ListChildren(this.children,{})
        this.pageNameList.forEach((Name:string,index:number)=>{
            this.pages[Name] = children[index] || children[0]
        })
        this.defaultPage = this.pageNameList[0]
        
    }

    DisplayPage(PageName:string){
        this.changeModel.dispatcher[this.channel]({name:PageName})
    }

    View = ({tag = "div",children,className,...props}:{children?:any,tag?:string,className?:string} & BaseElementProps<HTMLDivElement>)=>{
        this.children = children || []
        this.Refine()
        const channel = this.channel
        const [currentPage,setCurrentPage] =  React.useState(this.defaultPage)
        function TriggerDisplayPage({name = ""}){
            setCurrentPage(()=>name)
            console.log(channel," pageing ",name)
        }
        var ReturnEl = React.createElement(tag,{className:className,...props},[this.GetPage(currentPage),
        <this.changeModel.RenderCreate channel={this.channel} key="1" onEvent={TriggerDisplayPage} ></this.changeModel.RenderCreate>])
        return ReturnEl
    }

    constructor (channel:string = ""){
        this.channel = `${RandInt(0,4000)}-${channel}`
    }
}
