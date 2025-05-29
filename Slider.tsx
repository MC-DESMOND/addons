"use client"

import React, { FC, ReactNode, useEffect } from "react"
import { dict, ListChildren } from "./anys"
import { BaseElementProps, Div } from "./csml"
import BaseHOC from "./HOC"
// import {LastIndex, useUpdate} from "./anys"


export default class SliderHOC{
    children:ReactNode[] = []
    control:BaseHOC<{SELF?:any}>
    widthDivideList:number[] = []
    direction
    currentIndex = 0
    slideTime
    effect
    refType:any
    innerFrame:BaseHOC
    blockLoop:boolean = false
    fitContent:boolean = false
    FrameHocs:BaseHOC[] = []
    onSlide:Function = (_val:number)=>{}
    onEnd:Function = (_val:number)=>{}

    constructor({direction="row",fitContent = false,slideTime = 300,blockLoop = false,effect = "ease-in-out", refType = React.useRef} = {}){
        this.direction = direction
        this.slideTime = slideTime
        this.effect = effect
        this.refType = refType
        this.blockLoop = blockLoop
        this.fitContent = fitContent
        this.control = new BaseHOC({Component:(
            {...props}:BaseElementProps<HTMLDivElement>
        )=><this._SliderComponent  {...props}></this._SliderComponent>,
        refee:this.refType((null as any))})
        this.innerFrame = new BaseHOC({Component:Div,refee:this.refType((null as any))})
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    slide(index:number | Function){
        const lastIndex = this.children.length-1
        const lengthOf = this.children.length
        let inputIndex = typeof index == "function" ? index(this.currentIndex) : (index as number);

        this.innerFrame.style.transition(`transform ${this.slideTime}ms ${this.effect}`)
        /*  */
        
        if (this.blockLoop)
            {
                inputIndex = inputIndex<lengthOf?inputIndex:this.currentIndex
                inputIndex = inputIndex>=0?inputIndex:this.currentIndex
            }
        else{
            if (inputIndex <0){
                inputIndex = lastIndex
            }
        }
        if (this.currentIndex == inputIndex && inputIndex == lastIndex){
            this.onEnd()
        }
        const scroll = (inputIndex%lengthOf)*100
        if (this.direction.toLowerCase().trim() == "row"){
            this.control.Execute(()=>{
                this.innerFrame.style.transform(`translateX(-${scroll}%)`)
            })
        }
        else if (this.direction.toLowerCase().trim() == "column"){
            this.control.Execute(()=>{
                this.innerFrame.style.transform(`translateY(-${scroll}%)`)
            })
        }
        if (this.fitContent){
            this.FrameHocs[inputIndex % lengthOf].style.display("block")
            setTimeout(()=>{
            this.FrameHocs.map((frameHoc) => {
                frameHoc.style.display("none")
                this.FrameHocs[inputIndex % lengthOf].style.display("block")
            })
        },this.slideTime)}
        /* console.log(this.direction)
        console.log(inputIndex) */
        this.currentIndex = inputIndex%lengthOf
        this.onSlide(this.currentIndex)
        // this.ForceUpdate()
    }

    Render:FC<BaseElementProps<HTMLDivElement>> = ({...props}:BaseElementProps<HTMLDivElement>)=>{
        return <this.control.Render  comment="Slider" {...props}></this.control.Render>
    }

    protected _SliderComponent = ({...props}:BaseElementProps<HTMLDivElement>)=>{
        const _children = props.children
        const children:ReactNode[] = ListChildren(_children,{})
        this.children = children
        const Style:dict = {
            ...props.style,
            overflow:"hidden",
            boxSizing:"border-box"
        }
        const innerFrameStyle:dict = {
            display:"flex",
            width:"100%",
            height:"100%",
            overflow:"visible",
            minWidth:"100%",
            minHeight:"100%",
            flexDirection:this.direction
            
        }

        const firstReturn = children.map((child:ReactNode,index:number)=>{
            const HOC = new BaseHOC({Component:Div})
            this.FrameHocs.push(HOC)
            const FStyle = {
                width:"100%",
                height:"100%",
                display:"block",
                minWidth:"100%",
                minHeight:"100%",
                overflow:"auto",
            }
            return<Div {...FStyle} key={index}><HOC.Render  {...FStyle}>
               {child}
            </HOC.Render></Div>
        
        })

        useEffect(()=>{
            if (this.fitContent){this.FrameHocs.map(frameHoc=>{
                    frameHoc.style.display("none")
                })
                this.FrameHocs[0] && this.FrameHocs[0].style.display("block")}
        },[])
       
        return <Div width="100%" height="100%" {...props} style={Style} >
            <this.innerFrame.Render  style={innerFrameStyle} comment="FlipInnerFrame">
                {firstReturn}
            </this.innerFrame.Render>
        </Div>
    }
}