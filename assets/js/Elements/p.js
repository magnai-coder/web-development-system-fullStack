class P_tag{

constructor(text, fontSize, fontFamily, color, width, height){
    this.text = text;
    this.fontSize = fontSize;
    this.fontFamily = fontFamily;
    this.color = color;
    this.width = width;
    this.height = height;
}
createP(){
    var p = document.createElement("p");
    var textPart = document.createTextNode(this.text);
    p.style.fontSize = this.fontSize;
    p.style.fontFamily = this.fontFamily;
    p.style.color = this.color;
    p.style.width = this.width;
    p.style.minHeight = this.height;
    p.appendChild(textPart);
    p.classList.add('selectable');
    return p;
}
}
export {P_tag};