// import { ICssHelper } from "./css";
import {  pairIf } from "./anys";
import { ICssHelper } from "./css";




 namespace CWind{
    export function Square(val:string){
        let width = val
        let height = val
        if (val == "doc" || val == "v"){
            width = "100vw"
            height = "100vh"
        }
        else if (val == "exp" || val == "%"){
            width = "100%"
            height = "100%"
        }
        else if (val == "fit" || val == "_"){
            width = "fit-content"
            height = "fit-content"
        }
        return {
           width:width,
           height:height, 
        }
    }

    // # Flex
    export function  FlexRow(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
        } as ICssHelper
    }
    export function  FlexColumn(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
        } as ICssHelper
    }
    export function  FlexRowAllCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
        } as ICssHelper
    }
    export function  FlexColumnAllCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        } as ICssHelper
    }
    export function  FlexColumnJustifyCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
        } as ICssHelper
    }
    export function  FlexColumnAlignCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        } as ICssHelper
    }
    export function  FlexRowJustifyCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
        } as ICssHelper
    }
    export function  FlexRowAlignCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            alignItems:"center"
        } as ICssHelper
    }
    export function  FlexRowJustifyBetween(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
        } as ICssHelper
    }
    export function  FlexColumnJustifyBetween(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
        } as ICssHelper
    }
    export function  FlexRowAlignCenterJustifyBetween(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
        } as ICssHelper
    }
    export function  FlexColumnAlignCenterJustifyBetween(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            alignItems:"center"
        } as ICssHelper
    }
    export function  FlexRowJustifyEnd(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"end",
        } as ICssHelper
    }
    export function  FlexColumnJustifyEnd(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"end",
        } as ICssHelper
    }
    export function  FlexRowAlignCenterJustifyEnd(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"end",
            alignItems:"center"
        } as ICssHelper
    }
    export function  FlexColumnAlignCenterJustifyEnd(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"end",
            alignItems:"center"
        } as ICssHelper
    }
    export function  FlexRowJustifyAround(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
        } as ICssHelper
    }
    export function  FlexColumnJustifyAround(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around",
        } as ICssHelper
    }
    export function  FlexRowAlignCenterJustifyAround(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"center"
        } as ICssHelper
    }
    export function  FlexColumnAlignCenterJustifyAround(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around",
            alignItems:"center"
        } as ICssHelper
    }

    // # Grid
    export function GridRow(gridTemplateRows:string,gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"grid",
            gridTemplateRows:gridTemplateRows,
        } as ICssHelper
    }
    export function GridRowCenter(gridTemplateRows:string,gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"grid",
            gridTemplateRows:gridTemplateRows,
            placeItems:"center"
        } as ICssHelper
    }

    export function GridColumn(gridTemplateColumns:string,gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"grid",
            gridTemplateColumns:gridTemplateColumns,
        } as ICssHelper
    }
    export function GridColumnCenter(gridTemplateColumns:string,gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"grid",
            gridTemplateColumns:gridTemplateColumns,
            placeItems:"center"
        } as ICssHelper
    }
    export function GridColumnAutoFitMinMax(minmax:string = "250px , 1fr",gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"grid",
            gridTemplateColumns:`repeat(auto-fit, minmax(${minmax})`
        }
    }
    export function GridColumnCenterAutoFitMinMax(minmax:string = "250px , 1fr",gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"grid",
            gridTemplateColumns:`repeat(auto-fit, minmax(${minmax})`,
            placeItems:"center"
        }
    }
    export function Iconify(size:number){
    return {...GridColumnCenter("")
        ,...Square(`${size}px`),
        borderRadius:"50%"} as ICssHelper 
    }
    export function GridRowAutoFitMinMax(minmax:string = "250px , 1fr",gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"grid",
            gridTemplateRows:`repeat(auto-fit, minmax(${minmax})`
        }
    }
    export function GridRowCenterAutoFitMinMax(minmax:string = "250px , 1fr",gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"grid",
            gridTemplateRows:`repeat(auto-fit, minmax(${minmax})`,
            placeItems:"center"
        } as ICssHelper
    }

    export function bg(val:string){
        return {
            backgroundColor:val,
            background:val
            
        }
    }
    export function OverflowOnlyY(overflowY:string = "auto"){
        return{
            overflowX:"hidden",
            overflowY: overflowY
        } as ICssHelper
    }
    export function OverflowOnlyX(overflowX:string = "auto"){
        return{
            overflowY:"hidden",
            overflowX: overflowX
        } as ICssHelper
    }

    export function TransitionMerge(names:string[], transition:string){
        return {
            transition:names.map((name)=>`${name} ${transition}`).join(", ")
        }
    }
}



export default CWind