import { dict } from "./anys";

type NameFactory = {
    prefix:string
    types:dict<string>
    ReType:()=>void
}& dict

export default function NameFactoryCreate (prefix:string = "",types:dict<string> = {},separator:string = "-"){
    
    /* 
    NameFactory is a utility that generates consistent string identifiers based on a prefix and a set of types. 
    It takes a prefix, a dictionary of types, and an optional separator (defaulting to "-"). 
    The ReType method constructs the full identifier for each type by concatenating the prefix, separator, and type name. 
    This is useful for creating standardized class names, IDs, or other string-based identifiers in a project.
    */
    const ln:NameFactory = {
        prefix,
        types,
        ReType:()=>{}
    }
    ln.ReType = function(){
        for (const key in this.types){
            if (this.types.hasOwnProperty(key)) {
                const type = this.types[key];
                this[key] = this.prefix + separator + type;
            }
        }
    }
    ln.ReType()
    return ln 

}