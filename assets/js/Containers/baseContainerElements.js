import { Div } from "../Elements/div.js";
import { A_tag } from "../Elements/a_tag.js";
import { Images } from "../Elements/images.js";
import { P_tag } from "../Elements/p.js";
import { Button } from "../Elements/button.js";

class Elements {
  constructor(typeName) {
    this.typeName = typeName;
  }

  createElement(typeName) {
   
    if (typeName === "buttonTagPart") {
        const button = new Button('12', 'Malgun', 'grey', 'Товч', [30, 100], 5, 3, 0, 'solid').createButton();
        button.style.position = "absolute";
      return button;
    }
    if (typeName === "aTagPart") {
        const aTag = new A_tag('none', 'black', '#', 'Текст оруулах', '14px', '10px').createA();
        aTag.style.position = "absolute";

        return aTag;
    }
    if (typeName === "divTagPart"){
        const divTag = new Div("40vh", "20vw", "transparent").createDiv();
        divTag.style.position = "absolute";  
    return divTag;
    }
    if (typeName === "pTagPart"){
        const pTag = new P_tag("Гарчиг", "32px", "Malgun", "black", "auto", "auto").createP();
        pTag.style.position = "absolute";

        return pTag;
    }
    if (typeName === "imageTagPart"){
        const image = new Images([10, 10]).createImg();
        image.style.position = "absolute";

        return image;
    }
  }
}
export {Elements};