
const codingSection =  window.parent.document.querySelector(".codeSection");
const shifterLever = document.querySelector(".shifterPart");
const renderContext = window.parent.document.querySelector(".whitePage");
const codeContext = document.querySelector(".codeWindows");
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");
const parentPage = window.parent.document.getElementById("imported");
const renderFrameContent = window.parent.parent.document.getElementById('render')



renderContext.style.height="97vh"
//Mouse udulhud bairshiliig burtgej avah
shifterLever.addEventListener('mousemove', (event)=> {
    let y = event.clientY;
    //zaaglagdsan bairshild cursor uurchlugduh
    if(y<8 && renderContext.style.height!=="97vh"){
        shifterLever.style.cursor = 'ns-resize';
        shifterLever.removeEventListener('mousedown', changePartRatio);
        //code zasah hesgiin hemjeesiig tataj sungah
        shifterLever.onmousedown = function() {
            shifterLever.onmousemove = function(e) {
                x = e.clientX;
                y = e.clientY;
                let parentPageHeight = parentPage.getBoundingClientRect().height;
                let codingSectionHeight = codingSection.getBoundingClientRect().height;
                codeContext.style.display="flex";
                renderContext.style.height=parentPageHeight+y+"px";
                codingSection.style.height=codingSectionHeight-y+"px";
            }
        }
        shifterLever.onmouseup = function () {
            shifterLever.onmousedown = function(){
                    }
                      shifterLever.onmousemove = function(){   
                    } 
                }
                
            }else{
                shifterLever.style.cursor = 'pointer';
                shifterLever.addEventListener('mousedown', changePartRatio);
            }
        })

        //Code heseg harahiig darhad code zasvarlah heseg bolon code uurchluh hesgiin hemjees uurchlugdun
        shifterLever.addEventListener("mousedown", changePartRatio);
        function changePartRatio() {
            if(renderContext.style.height!="97vh"){
                codeContext.style.display="none";
                renderContext.style.height="97vh";
                codingSection.style.height="3vh";
            }else{
                const codeContext = codingSection.contentWindow.document.querySelector(".codeWindows");
                renderContext.style.height = "65vh" ;
                codeContext.style.display = "flex";
                codingSection.style.height ="35vh";
                
            }
        }
        //shift hiij bui panneluudiin dynamic uurchlult
        function showPanel(panelIndex,colorCode) {
            tabButtons.forEach(function(node){
                node.style.backgroundColor="";
                node.style.color="";
                node.style.borderTop="";
                node.style.borderLeft="";
            });
            tabButtons[panelIndex].style.backgroundColor=colorCode;
            tabButtons[panelIndex].style.color="white";
            tabButtons[panelIndex].style.borderTop="solid black";
            tabButtons[panelIndex].style.borderLeft="solid black";
            tabButtons[panelIndex].style.borderRight="solid black";
            
            
            tabPanels.forEach(function(node){
                node.style.display="none";
   });
   tabPanels[panelIndex].style.display="block";
   tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#636C6D');


