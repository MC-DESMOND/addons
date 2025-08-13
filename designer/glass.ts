import { rgba } from "../anys";

namespace glass{
    export var blur = 20
    export function glass({r=100,g=100,b=100,op=25,bdo=14,bd=1,br=blur} = {}){
        return {
             backdropFilter:`blur(${br}px)`
            ,backgroundColor:rgba(r,g,b,op/100)
            ,border:bd+"px solid "+rgba(r,g,b,bdo/100)
        }
    }
    export const _:any = glass()
    export const black:any = glass({r:0,g:0,b:0,op:23,bdo:9});
    export const gray:any = glass({r:255,g:255,b:255,op:9,bdo:11});
    export const cyan:any = glass({r:0,g:250,b:255,op:9,bdo:12});
    export const yellow:any = glass({r:255,g:250,b:0,op:9,bdo:12});
    export const purple:any = glass({r:250,g:0,b:255,op:9,bdo:12});
    export const blue:any = glass({r:0,g:10,b:255,op:9,bdo:12});
    export const red:any = glass({r:255,g:10,b:0,op:16,bdo:14});
    export const green:any = glass({r:10,g:255,b:10,op:9,bdo:14});
    
}

export default glass;