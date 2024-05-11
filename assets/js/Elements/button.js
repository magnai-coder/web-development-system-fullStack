class Button {
    constructor(sizefont, font, color, text, size = [a, b], margin, padding, borderRadius, border) {
        this.sizefont = sizefont;
        this.font = font;
        this.color = color;
        this.text = text;
        this.size = size;
        this.margin = margin;
        this.padding = padding;
        this.borderRadius = borderRadius;
        this.border = border;
    }
    createButton() {
        let button = document.createElement('button');
        let buttonText = document.createTextNode(this.text);
        button.style.fontSize = this.sizefont + 'px';
        button.style.borderWidth = 'initial';
        button.style.borderColor = 'initial';
        button.style.borderImage = 'initial';
        button.style.fontFamily = this.font;
        button.style.backgroundColor = this.color;
        button.style.height = this.size[0] + 'px';
        button.style.width = this.size[1] + 'px';
        button.style.margin = this.margin + 'px';
        button.style.padding = this.padding + 'px';
        button.style.borderRadius = this.borderRadius +'%';
        button.style.border = this.border;
        button.classList.add('selectable');
        button.appendChild(buttonText);
        button.addEventListener('click', () => { });
        return button;
       
    }
}

export { Button };