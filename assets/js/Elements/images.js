class Images{
    constructor( size = [a, b], radius){
        this.size = size;
        this.radius = radius;
        
    }
    createImg(){
        let img = document.createElement('img');
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9BCdRVRqfpjUy8KUyojVLPKzAtxxcPZ-SaY5HNafZMq_s1vb9CAe5WH1HzLZ0eJXPW6g&usqp=CAU";
        img.style.height = this.size[0] + 'vh';
        img.style.width = this.size[1] + 'vw';
        img.style.borderRadius = this.radius;
        img.style.border = "solid";
        img.classList.add('selectable');
        img.style.backgroundRepeat = "no-repeat";
        img.style.objectFit = "cover";
        img.setAttribute("draggable", "false")
        img.tabIndex = "0";
        return img;
    }
}
export {Images};