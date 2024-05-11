
const codingSection =  window.parent.document.querySelector(".codeSection");
const shifterLever = document.querySelector(".shifterPart");
const renderContext = window.parent.document.querySelector(".whitePage");
const codeContext = document.querySelector(".codeWindows");

console.log(codeContext)

shifterLever.onclick = function () {
   const codeContext = codingSection.contentWindow.document.querySelector(".codeWindows");

   console.log(codeContext)
   renderContext.style.height = renderContext.style.height === "43vh" ? "94vh" : "43vh";
   codeContext.style.display = codeContext.style.display === "flex" ? "none" : "flex";
   codingSection.style.height = codingSection.style.height === "56.5vh" ? "5.5vh" : "56.5vh";


}


