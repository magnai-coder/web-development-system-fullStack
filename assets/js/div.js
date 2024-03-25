class Div{
    constructor(width, height, backgroundColor){
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
    }
    
    createDiv(){
        var idSerial = idSerial++;
        let container = document.createElement('div');
        container.setAttribute('id', `div ${idSerial}`);
        container.style.width = this.width;
        container.style.height = this.height;
        container.style.backgroundColor = this.backgroundColor;
        container.classList.add('selectable');
        container.style.backgroundRepeat = "no-repeat";
        container.style.objectFit = "cover";
        container.tabIndex = "0";
        return container;
    }
}  
export {Div};