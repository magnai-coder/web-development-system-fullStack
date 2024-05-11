class A_tag{
    constructor(decoration, color, href, text, size, margin ){
        this.decoration = decoration;
        this.color = color;
        this.href = href;
        this.text = text;
        this.size = size;
        this.margin = margin;
    }
    createA(){
        let text = document.createTextNode(this.text);
        let a = document.createElement('a');
        a.style.textDecoration = this.decoration;
        a.href = this.href;
        a.style.color = this.color;
        a.style.text = this.text;
        a.style.fontSize = this.size;
        a.style.margin = this.margin;
        a.classList.add('selectable');
        a.appendChild(text);
        a.setAttribute("draggable", "false")

        return a;
    }
}
export {A_tag};