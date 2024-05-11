const contextMenu = document.querySelector(".wrapper");
const addingMenu = contextMenu.querySelector(".adding-menu");
const whitePageContent = document.getElementById("whitePage")

whitePageContent.addEventListener("contextmenu", e =>{
    //menunii default utguudiig horiglon
    e.preventDefault();
    //windowiin undur bolon orgonii utguudiig avlgaa
    //objectiin undur bolon urgunii hemjeeg avsan
    let x = e.clientX, y = e.clientY,
    winWidth = whitePageContent.getBoundingClientRect().width,
    winHeight = whitePageContent.getBoundingClientRect().height,
    mouseMenuWidth = contextMenu.offsetWidth;
    mouseMenuHeight = contextMenu.offsetHeight;
    //hervee x bolon y hemjee menu bolon zainaa ih 
    //baival x bolon y hemjeegeer bairshiliig ugnu
    x = x > winWidth - mouseMenuWidth ? winWidth - mouseMenuWidth : x;
    y = y > winHeight - mouseMenuHeight ? winHeight - mouseMenuHeight : y;
    //herev nemelt menu zahad bagtahgui bol undsen menunii nuguu tald garna
    if(x>(winWidth - mouseMenuWidth - addingMenu.offsetWidth)){
        addingMenu.style.left = "-180px";
    }else{
        addingMenu.style.left = "200px";
    }
    contextMenu.style.left = `${x}px`
    contextMenu.style.top = `${y}px`
    contextMenu.style.visibility = "visible";
    
})
whitePageContent.onclick = function(){
    contextMenu.style.visibility = "hidden";
}