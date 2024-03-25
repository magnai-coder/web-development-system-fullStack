
var idSerial=0;
class Div{
    constructor(width, height, backgroundColor){
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
    }
    createDiv(){
        // function loadDocGet(){
        //     const xhttp = new XMLHttpRequest();
        //     xhttp.onload = function(){
        //         idSerial = this.responseText;
        //         console.log(idSerial);
        //     }
        //     xhttp.open("GET","../assets/outputSourceCode/configs.txt",true);
        //     xhttp.send();
        // }
        // loadDocGet();
       
        let container = document.createElement('div');
        container.setAttribute('id', `div ${idSerial}`);
        container.style.width = this.width;
        container.style.height = this.height;
        container.style.backgroundColor = this.backgroundColor;
        container.classList.add('selectable');
        container.style.minHeight = '200px';
        container.style.backgroundRepeat = "no-repeat";
        container.style.objectFit = "cover";
        container.tabIndex = "0";
        idSerial++;
        console.log(idSerial);
        return container;
    }
}  
export {Div};