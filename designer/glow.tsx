import { useEffect } from "react"
import HeadWind from "../cwind"
import BaseHOC from "../HOC"
import { BaseElementProps, Div } from "../csml"
// import { ICssHelper } from "../css"
import { Clientable, dict } from "../anys"
import CWind from "../cwind"

export default class Glow{
    protected color:string
    protected size:number
    soul:BaseHOC
    protected speed:number
    protected opacity:number
    position
    Acting
    props
    attack :string | null
    _
    percentOnWindow:number
    sizeOnStop = 300 as number | Function  
    winStop
    NumberGetter
    protected parent:(el:Element | null | undefined)=>Element | null
    constructor ({color = "white", size = 400, attack = "b" as "x" | "y" | "b" | "both" | null,speed = 20,Acting = (_isActing:boolean)=>{},position=[50 , 50],opacity = 0.1,dispatcher=(el:Element | null | undefined)=>el !=null? el.parentElement:null,props={} as BaseElementProps<HTMLDivElement>} = {}){
        this.color = this.gradifyColor(color)
        this.size = size * 2
        this.soul = new BaseHOC()
        this.speed = speed/1000
        this.opacity = opacity
        this.parent = dispatcher
        this.position = position
        this.Acting = Acting
        this.props = props
        this.attack = attack
        this._ = this.Render
        this.percentOnWindow = 0
        this.sizeOnStop = 300
        this.winStop = 300
        this.NumberGetter = ()=>window.innerWidth
    
    }
    protected gradifyColor(color:string){
        return `radial-gradient(circle,${color} , rgba(0, 0, 0, 0) 50%)`
    }
    set Color(color:string){
        this.color = this.gradifyColor(color)
        this.soul.style.background(this.color)
    }
    percentify({percent = 50, stop = 300,sizeOnStop = 300 as number | Function,NumberGetter = ()=>window.innerWidth} = {}){
        this.percentOnWindow = percent
        this.sizeOnStop = sizeOnStop
        this.winStop = stop
        this.NumberGetter = NumberGetter
        const MainFunc =  ()=>{
                const fromPercent =  (this.percentOnWindow/100)*window.innerWidth
                if (fromPercent >= this.winStop){
                    this.Size = fromPercent
                }else{
                    this.Size = typeof(this.sizeOnStop) == "function"?this.sizeOnStop(): this.sizeOnStop
                }
            }
        MainFunc()
        Clientable(()=>{
            window.addEventListener("resize",MainFunc)
        })
    }
    get Color(){
        return this.color
    }
    set Opacity(opacity:number){
        this.opacity = opacity
        this.soul.style.opacity(String(this.opacity))
    }
    get Opacity(){
        return this.opacity
    }

    set Size(size:number){
        this.size = size * 2
        this.soul.style.addStyle({...HeadWind.Square(`${this.size}px`)})
    }
    get Size(){
        return this.size
    }
    Render = (props:BaseElementProps<HTMLDivElement>)=>{
        useEffect(()=>{
            let soul = this.soul;
            let self = this
            let parent = soul.Element?.parentElement
            if (parent != null){ 
                soul.set("parentRect",parent.getBoundingClientRect())
                soul.set("soulRect",soul.Element?.getBoundingClientRect())
               soul.set("cx",0)
               soul.set("cy",0)
               soul.set("mx",undefined)
               soul.set("my",undefined)
               soul.set("speed",this.speed)
               soul.set("position",this.position)
            //    soul.set("drag",this.drag)
               Array.from(parent.children).forEach(child=>{
                    const el = child as HTMLElement
                    if (child != soul.Element){
                        el.style.zIndex = `${Number(el.style.zIndex || 1) + 1}`
                        el.style.translate = el.style.translate || "0px"
                    }
               })
               const setCoords = () =>{ 
                    soul.set("soulRect",soul.Element?.getBoundingClientRect())
                    if (soul.get("soulRect").width){
                        const addx = ((soul.get("mx") - soul.get("cx"))*soul.get("speed"))
                        const addy = ((soul.get("my") - soul.get("cy"))*soul.get("speed"))
                        soul.set("cx",soul.get("cx") + addx )
                        soul.set("cy",soul.get("cy") + addy )
                        // soul.set("cx",soul.get("cx")-FromPercent(this.drag, soul.get("cx")))
                        // soul.set("cy",soul.get("cy")-FromPercent(this.drag, soul.get("cy")))
                        if (this.position){if (!soul.has("mx") || !soul.has("my")){    
                            soul.set("cx",(this.position[0]/100)*soul.get("parentRect").width )
                            soul.set("cy",(this.position[1]/100)*soul.get("parentRect").height )
                        }}
                        const top = soul.get("cy")-(soul.get("soulRect").width/2)
                        const left = soul.get("cx")-(soul.get("soulRect").height/2)
                        if (this.attack){    if(this.attack.toLowerCase() == "x"){
                                soul.style.left (`${left}px`);
                            }else if (this.attack.toLowerCase() == "y"){
                                soul.style.top (`${top }px`);
                            }else{
                                soul.style.left (`${left}px`);
                                soul.style.top (`${top }px`);
                            }}
                        if (this.position){if (!soul.has("mx") || !soul.has("my")){    
                            soul.style.left (`${left}px`);
                            soul.style.top (`${top }px`);
                        }}
                        soul.style.translate("0px")
                    }
                    requestAnimationFrame(setCoords)
               }
            //    parent.style.position = "relative"
                setCoords();
                (this.parent(soul.Element) as any).style.position = "relative";
                this.parent(soul.Element)?.addEventListener('mousemove', function(event:any) {
                const e = event as MouseEvent
                soul.Execute((_element)=>{
                    if (self.attack != null){
                        soul.style.display("block")
                            const parentRect = parent.getBoundingClientRect() 
                            const x = e.clientX - parentRect.left;
                            const y = e.clientY - parentRect.top;
                            soul.set("mx",x)
                            soul.set("my",y)
                            soul.set("soulRect",soul.Element?.getBoundingClientRect())
                            soul.set("parentRect",parent.getBoundingClientRect())
                            /* console.log(soul.get("soulRect"))
                            console.log(soul.Element?.scrollWidth)
                            console.log(soul.Element?.scrollHeight) */
                            self.Acting(true)}
                })
            })
            this.parent(soul.Element)?.addEventListener("mouseleave",()=>{
                self.Acting(false)
            })
        }
            
        },[])
        return <this.soul.Render background={this.color}  opacity={`${this.opacity}`} {...HeadWind.Square(`${this.size}px`)} position="absolute" zIndex="0"  borderRadius="50%"  top={`${this.position[1]}%`} left={`${this.position[0]}%`} translate={`-${this.position[0]}% -${this.position[1]}%`} {...props} {...{transition:HeadWind.TransitionMerge(["background","opacity","background-color","background-image"],"0.3s ease-in-out").transition + (props.transition?`, ${props.transition}`:"") + (this.props.transition?`, ${this.props.transition}`:"")}}></this.soul.Render>
    }
}

export function StaticGlow({size=400,opacity=50,color="white",position=[50,50]}:{size?:number,opacity?:number,color?:string,position?:[number,number]}& dict = {}){
    return <Div overflow="visible"  {...CWind.GridColumnCenter("")}  width="1px" height="1px" position="fixed" top={`${position[1]}%`} left={`${position[0]}%`} >
        <Div {...CWind.Square(`${size*2}px`)} opacity = {`${opacity/100}`} background={`radial-gradient(circle,${color},transparent 50%)`}  position="absolute">
        </Div>
    </Div>
}