import { Layouts } from "../Containers/baseContainerLayouts.js";
import { Elements } from "../Containers/baseContainerElements.js";



const frameInsideMainPage = window.parent.document.getElementById('render');
//asynchron uildliig boluilj daraalaar kodiig ajluulah
frameInsideMainPage.onload = function () {
const frameContent = frameInsideMainPage.contentWindow.document.getElementById("whitePage");

var constuctedPart;
var hoverElement = frameInsideMainPage.contentWindow.document.getElementById("whitePage"); 
// dragAndDrop undsen code
function handleDragAndDrop(chosenElement) {
    try {
        const layout = new Layouts();
        const elements = new Elements();
        
        if (chosenElement.id.includes("Layout")) {
            constuctedPart = layout.createLayout(chosenElement.id);
        } else if (chosenElement.id.includes("Tag")) {
            constuctedPart = elements.createElement(chosenElement.id);
        }
        
        var x;
        var y;
        function dragOver(event) {
            event.preventDefault();
            /*umnuh hover hiisen element odoogiin hover hiij bui elementees uur, urgun n 100% gsn baih, zuuj bui object n 
            urgun n 100% aguulsan baival tuhain componentiin deed huree ulaan ungu uzuulne. Ingesneer oruulah gej bui componentiin bairshiliig medej bolno*/
            if(hoverElement != event.target.id && event.target.style.width.includes("100%") && constuctedPart.style.width.includes("100%")){
                hoverElement.style.borderTop = "";
                hoverElement = event.target;
                hoverElement.style.borderTop = "5px solid red"  
            }else{     
                hoverElement.style.borderTop = "";
                hoverElement = event.target;

            }
            x = event.pageX;
            y = event.pageY;
        }

        function drop() {
            //drop hiih uyed haan unaj baigaagaas hamaarch (if nuhtsold shalguuraas hamaarch) yamar componentiin umnu bairluulahiig shiidne
            if(constuctedPart.style.width.includes("100%") && frameContent.children[0] != null && hoverElement.className !="whitePage"){
                frameContent.insertBefore(constuctedPart, hoverElement);
                hoverElement.style.borderTop = "";
            }else{
                constuctedPart.style.top = y + 'px';
                constuctedPart.style.left = x + 'px';
                frameInsideMainPage.contentWindow.document.getElementById(hoverElement.id).appendChild(constuctedPart);
                frameContent.removeEventListener("dragover", dragOver);
                frameContent.removeEventListener("drop", drop);
            }
        }

        frameContent.addEventListener("dragover", dragOver);
        frameContent.addEventListener("drop", drop);
        
    } catch (error) {
        console.error(error);
    }
}

// songoson zuuh elementiig shalgaj bna
window.parent.document.getElementById("accordionLeft").addEventListener('mousedown', (event) => {
    const clickedElement = event.target;
    const elementId = clickedElement.id;
   
    if (elementId.includes("Part")) {
        handleDragAndDrop(clickedElement);
    }

});
}
