import { dict } from "./anys";
import { BaseElementProps, Div,Span, TextArea } from "./csml";
import { ICssHelper } from "./css";
import BaseHOC, { InputHOC } from "./HOC";
// 789729
type commandNames = (
    "bold" | "italic" | 
    "underline" | "strikethrough" | 
    "subscript" | "superscript" | 
    "justifyLeft" | "justifyCenter" | 
    "justifyRight" | "justifyFull" | 
    "insertOrderedList" | "insertUnorderedList" | 
    "outdent" | "indent" | 
    "fontName" | "fontSize" | 
    "foreColor" | "createLink" | 
    "insertImage" | "insertHorizontalRule" | 
    "removeFormat" | "undo" | 
    "redo" | "selectAll" | 
    "insertTable" | "deleteTable" |
    "insertLineBreak" | "styleWithCSS" 

)

export default class Editor{
    editor = new BaseHOC<React.TextareaHTMLAttributes<HTMLTextAreaElement>,HTMLTextAreaElement>({Component:TextArea});
    
    constructor (){

    }

    format(command:commandNames,value?:string) {
        if (command == "createLink"){
            this.insertLink()
        }else if(command == "insertImage"){
            this.insertImage()
        }else if (command == "fontName"){
            this.setFont(value || "")
        }else if (command == "fontSize"){
            this.setSize(value || "")
        }else if (command == "foreColor"){
            this.setColor(value || "")
        }

        else{
            document.execCommand(command, false, undefined);
        }
      }
  
    setFont(font:string) {
        if (font){
            document.execCommand("fontName", false, font);
        }
      }
  
    setSize(size:string) {
        if (size){
            document.execCommand("fontSize", false, size);
        }
      }
  
    setColor(color:string) {
        if (color){
            document.execCommand("foreColor", false, color);
        }
      }
    
    
  
    insertLink() {
        const url = prompt("Enter the URL:");
        if (url) {
            document.execCommand("createLink", false, url);
        }
    }

    insertImage(){
        const url = prompt("Enter the image URL:");
        if (url) {
            document.execCommand("insertImage", false, url);
        }
    }

    

    Render = (props:BaseElementProps<HTMLTextAreaElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>)=>{
        return <this.editor.Render {...props}/>

    }
}


// ApplyToSelected(style:ICssHelper){
//     const selection = window.getSelection();
//     if (selection){
//         if (!selection.rangeCount) return;

//         const range = selection.getRangeAt(0);
//         if (range.collapsed) return; // No text selected

//         const span = document.createElement('span');
//         Object.keys(style).forEach((styleUnitKey:any)=>{
//             span.style[styleUnitKey] = (style as any)[styleUnitKey]
//         })
//         range.surroundContents(span);

//         // Deselect the text
//         selection.removeAllRanges();
//     }
// }

// ApplyToPosition(style:ICssHelper){
    
// }
