"use client"
import React, { PropsWithChildren } from "react"
import {  FC } from "react"
import  { CompileStyle, FCssHelper, ICssHelper } from "./css"

import { dict, DictToStringProps, filterOutDict, mergeText, pairIf } from "./anys";


// export var css = {} as ICssHelper


// generates unique id
export function genId(p = "b",length = 8){
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const rand = (arr:(string | string []),len:number)=>{
      const singleGen = ()=> arr[Math.floor(Math.random()*arr.length)]
      let str = ""
      for(let i = 0;i<len;i++){
        str+=singleGen()
      }
      return str
    }
    if (p == "l"){
      return rand(letters,length)
    }else if(p == "b"){
      return rand([...numbers,...letters],length)
    }else if(p == "n"){
      return rand(numbers,length)
    }else{
      return rand([...numbers,...letters],length)
    }
  }

  export function getRandomHexColor() {
    var color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`
    return color;
  }
  


export function filterInStyles(Styles:any = {}){
  var allCSSProperties
      allCSSProperties = {...FCssHelper};
      var propsforstyle:any = {}
      for (var cssAttr in  allCSSProperties){
          if (cssAttr in Styles){
              propsforstyle[cssAttr] = Styles[cssAttr]
          }
      }
  return propsforstyle
}
export function filterOutStyles(Styles:any = {}){
  var allCSSProperties
      allCSSProperties = {...FCssHelper};
      var propforit:any = {}
      for (let key in Styles){
          if (!(key in allCSSProperties)){
              propforit[key] = Styles[key]
          }
      }
  return propforit
}

export type BaseElementProps<T> =  ICssHelper & React.DetailedHTMLProps<React.HTMLAttributes<T>,T> & PropsWithChildren & dict &{
  comment?:string | null,
  Ref?:any,
  translate?:any | string,
  square?:string,
  bg?:string
  stringify?:boolean
}

export function Center(props:BaseElementProps<HTMLDivElement>&{Ref?:any}){
      return <Div  display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" {...props}>
          {props.children}
      </Div>
}

/**
 * 
 * @example
 * ```
 * <Div display = "flex"></Div>
 * ```
 * 
 */



export function UpdateElementStyle(element:HTMLElement,Style:dict){
  let key:any 
    for( key of Object.keys(Style)){
        element.style[key] = Style[key]
    }
    return element
}


export function BaseElement({className,tag = "div",children,id,Ref,onClick,comment=null,style={},stringify=false,ReElement = undefined,...props}:any): any{
  const UnClassName = comment?`/*${String(comment).split(" ").join("_")}*/`:""
  className = `${className?className:""} ${UnClassName}`
  const Element =ReElement?({Ref,...newProps}:any)=><ReElement ref={Ref} {...newProps}> {newProps.children}</ReElement>: ({children,Ref,...attr}:any)=>{return React.createElement(tag,{ref:Ref,...attr},children)}
  let propsforstyle = filterInStyles(props)
  const square:string | undefined = props.square 
  const bg:string | undefined = props.bg 
  props = filterOutDict(props,"square")
  const Style:ICssHelper = {
      ...pairIf("width",square? square.toLowerCase() == "doc"?"100vw":square : undefined),
      ...pairIf("height",square? square.toLowerCase() == "doc"?"100vh":square : undefined),
      ...bg?{backgroundColor:bg ,
      background:  bg ,}:{} ,
      ...style,
      ...propsforstyle  
  }
  const propforit = filterOutStyles(props)
  if (stringify){
      return `<${tag} style="${CompileStyle(Style as any)}" id = "${id}" class = "${className}" ${DictToStringProps(propforit)} >${children}</${tag}>`
  }
  return <Element { ...propforit} className={mergeText(className)} onClick={onClick} id={id} Ref={Ref} style={Style}>
      {children}
  </Element>
}

export const Text:FC<BaseElementProps<HTMLParagraphElement>> = function({className,children,id,Ref,...props}:any){
  return <BaseElement tag="p" display = "inline-block" {...props} className={className} id={id} Ref={Ref}  >{children}</BaseElement>
}
/**
 * 
 * @example
 * ```
 * <Span display = "flex"></Span>
 * ```
 * 
 */
export const Span:FC<BaseElementProps<HTMLSpanElement>> = function({className,children,id,Ref,...props}:any){
  return <BaseElement tag="span" display="inline-block" {...props} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}

/**
 * 
 * @example
 * ```
 * <Div display = "flex"></Div>
 * ```
 * 
 */
export const Div:FC<BaseElementProps<HTMLDivElement> >= function({className,children,id,Ref,onClick,...props}){
  return <BaseElement tag="div"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const A:FC<BaseElementProps<HTMLAnchorElement>& {href:string} >= function({className,children,id,Ref,onClick,...props}){
  return <BaseElement tag="a"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Footer:FC<BaseElementProps<HTMLElement>>= function({className,children,id,Ref,onClick,...props}){
  return <BaseElement tag="footer"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Header:FC<BaseElementProps<HTMLElement>>= function({className,children,id,Ref,onClick,...props}){
  return <BaseElement tag="header"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const P:FC<BaseElementProps<HTMLElement>>= function({className,children,id,Ref,onClick,...props}){
  return <BaseElement tag="p"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Form:FC<BaseElementProps<HTMLFormElement> >= function({className,children,id,Ref,onClick,...props}){
  return <BaseElement tag="form"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Label:FC<BaseElementProps<HTMLLabelElement> >= function({className,children,id,Ref,onClick,...props}){
  return <BaseElement tag="label"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const RDiv:FC<BaseElementProps<HTMLDivElement>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="div"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Main:FC<BaseElementProps<HTMLBaseElement>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="main"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Section:FC<BaseElementProps<HTMLBaseElement>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="section"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Button:FC<BaseElementProps<HTMLButtonElement>> = function({className,children,id,Ref,type = "button",onClick,...props}:any){
  return <BaseElement tag="button" border="none" outline="none" cursor="pointer" borderRadius="8px" {...props} type = {type} onClick={onClick}  className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Input:FC<BaseElementProps<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> &{name?:string,value?:string}> = function({className,children,id,Ref,type = "text",placeholder,onClick,...props}){
  return <BaseElement tag="input"  {...props} type = {type} placeholder = {placeholder} onClick={onClick} className={className} id={id} Ref={Ref}   ></BaseElement>
}
export const TextArea:FC<BaseElementProps<HTMLTextAreaElement>  & {Ref?:any,cols?:string,rows?:string,placeholder?:string}> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="textarea"  {...props} onClick={onClick} className={className} id={id} Ref={Ref}   ></BaseElement>
}
export const Img:FC<BaseElementProps<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement>> = function({className,children,id,Ref,src,onClick,...props}){
  return <BaseElement tag="img"   {...props}  ReElement = {({children,...attr}:any)=><img src={src} {...attr}/>} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const CAudio:FC<BaseElementProps<HTMLAudioElement>> = function({className,children,id,Ref,src,onClick,...props}:any){
  return <BaseElement tag="audio"  {...props}  ReElement={({children,...attr}:any)=><audio src={src} {...attr}> {children}</audio>} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const CVideo:FC<BaseElementProps<HTMLVideoElement> & React.VideoHTMLAttributes<HTMLVideoElement>> = function({className,children,id,Ref,src,onClick,...props}:any){
  return <BaseElement tag="video"  {...props}  ReElement={({children,...attr}:any)=><video src={src} {...attr} ref={Ref}> {children}</video>}onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Ol:FC<BaseElementProps<HTMLElement>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="ol" {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Ul:FC<BaseElementProps<HTMLElement>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="ul" {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Li:FC<BaseElementProps<HTMLElement>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="li" {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const H1:FC<BaseElementProps<HTMLElement>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="h1" {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const H2:FC<BaseElementProps<HTMLElement>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="h2" {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Hr:FC<BaseElementProps<HTMLHRElement>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="hr" {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Br:FC<BaseElementProps<HTMLBRElement>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="br" {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const Pre:FC<BaseElementProps<HTMLPreElement>> = function({className,children,id,Ref,onClick,...props}:any){
  return <BaseElement tag="pre" {...props} onClick={onClick} className={className} id={id} Ref={Ref}   >{children}</BaseElement>
}
export const EButton:FC<BaseElementProps<HTMLElement>> = function({className,children,id,Ref,onClick,...props}:any){
  return <Div borderRadius="8px" paddingInline="22px" paddingBlock="10px" {...props} onClick={onClick} Ref={Ref} id={id} className={className}>{children}</Div>
}

export const Hidden:FC<BaseElementProps<HTMLDivElement>> = function (props){
  return <Div display="none" {...props}>
      {props.children}
  </Div>
}

export const CTextArea:FC<BaseElementProps<HTMLDivElement>> = function (props:BaseElementProps<HTMLDivElement>&{value?:string}){

  return <Div textAlign="left" minHeight="60px" height="fit-content" overflow="hidden" color="white" backgroundColor="rgba(79, 79, 79, 1)" overflowY="auto" overflowX="hidden" {...props}>
    <Div textAlign="inherit" contentEditable width="100%" height="100%" display="inline" gap="0" dangerouslySetInnerHTML={{__html:props.value as any}}></Div>
  </Div>
}