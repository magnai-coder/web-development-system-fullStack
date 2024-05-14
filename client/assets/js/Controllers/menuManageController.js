const contextMenu = document.querySelector(".wrapper");
const addingMenu = contextMenu.querySelector(".adding-menu");
const whitePageContent = document.getElementById("whitePage")
const renderFrameContent = window.parent.document.getElementById('render')

whitePageContent.addEventListener("contextmenu", e =>{
    //menunii default utguudiig horiglon
    e.preventDefault();
    //windowiin undur bolon orgonii utguudiig avlaa
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
//Zoom in zoom out
  // var scale = 1,
  //       panning = false,
  //       pointX = 0,
  //       pointY = 0,
  //       start = { x: 0, y: 0 },
  //       zoom = document.getElementById("whitePage");
  //     function setTransform() {
  //         zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
  //     }
  //     zoom.onmousedown = function (e){
  //       e.preventDefault();
  //       start = { x: e.clientX - pointX, y: e.clientY - pointY };
  //       panning = true;
  //     }
  //     zoom.onmouseup = function(e) {
  //       panning = false;
        
  //     }
  //     zoom.onmousemove = function (e) {
  //       console.log(scale)
  //       e.preventDefault();
  //       if (!panning) {
  //         return;
  //       }
  //       pointX = (e.clientX - start.x);
  //       pointY = (e.clientY - start.y);
  //       setTransform();
  //     }
  //     zoom.onwheel = function (e) {
  //       e.preventDefault();
  //       var xs = (e.clientX - pointX) / scale,
  //         ys = (e.clientY - pointY) / scale,
  //         delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
  //       (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
  //       pointX = e.clientX - xs * scale;
  //       pointY = e.clientY - ys * scale;
  //       setTransform();
  //     }
