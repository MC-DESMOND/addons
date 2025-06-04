import { ICssHelper } from "./css";
import { dict, pairIf } from "./anys";




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
        } 
    }
    export function  FlexColumn(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
        } 
    }
    export function  FlexRowAllCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
        } 
    }
    export function  FlexColumnAllCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        } 
    }
    export function  FlexColumnJustifyCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
        } 
    }
    export function  FlexColumnAlignCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        } 
    }
    export function  FlexRowJustifyCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
        } 
    }
    export function  FlexRowAlignCenter(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            alignItems:"center"
        } 
    }
    export function  FlexRowJustifyBetween(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
        } 
    }
    export function  FlexColumnJustifyBetween(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
        } 
    }
    export function  FlexRowAlignCenterJustifyBetween(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
        } 
    }
    export function  FlexColumnAlignCenterJustifyBetween(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            alignItems:"center"
        } 
    }
    export function  FlexRowJustifyEnd(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"end",
        } 
    }
    export function  FlexColumnJustifyEnd(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"end",
        } 
    }
    export function  FlexRowAlignCenterJustifyEnd(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"end",
            alignItems:"center"
        } 
    }
    export function  FlexColumnAlignCenterJustifyEnd(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"end",
            alignItems:"center"
        } 
    }
    export function  FlexRowJustifyAround(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
        } 
    }
    export function  FlexColumnJustifyAround(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around",
        } 
    }
    export function  FlexRowAlignCenterJustifyAround(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"center"
        } 
    }
    export function  FlexColumnAlignCenterJustifyAround(gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around",
            alignItems:"center"
        } 
    }

    // # Grid
    export function GridRow(gridTemplateRows:string,gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"grid",
            gridTemplateRows:gridTemplateRows,
        } 
    }
    export function GridRowCenter(gridTemplateRows:string,gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"grid",
            gridTemplateRows:gridTemplateRows,
            placeItems:"center"
        } 
    }

    export function GridColumn(gridTemplateColumns:string,gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"grid",
            gridTemplateColumns:gridTemplateColumns,
        } 
    }
    export function GridColumnCenter(gridTemplateColumns:string,gap?:string){
        return {
            ...pairIf("gap",gap),
            display:"grid",
            gridTemplateColumns:gridTemplateColumns,
            placeItems:"center"
        } 
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
        }
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
        } 
    }
    export function OverflowOnlyX(overflowX:string = "auto"){
        return{
            overflowY:"hidden",
            overflowX: overflowX
        } 
    }

    export function TransitionMerge(names:string[], transition:string){
        return {
            transition:names.map((name)=>`${name} ${transition}`).join(", ")
        }
    }
}



export default CWind