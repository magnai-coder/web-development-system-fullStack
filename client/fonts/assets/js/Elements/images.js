class Images{
    constructor( size = [a, b], radius){
        this.size = size;
        this.radius = radius;
        
    }
    createImg(){
        let img = document.createElement('img');
        img.src = "https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png";
        img.style.height = this.size[0] + 'vh';
        img.style.width = this.size[1] + 'vw';
        img.style.borderRadius = this.radius;
        img.classList.add('selectable');
        img.style.backgroundRepeat = "no-repeat";
        img.style.objectFit = "fill";
        img.setAttribute("draggable", "false")
        img.tabIndex = "0";
        return img;
    }
}
export {Images};