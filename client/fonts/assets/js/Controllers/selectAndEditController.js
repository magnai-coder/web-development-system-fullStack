
const renderFrameContent = window.parent.document.getElementById('render')
const selectedElementFontMenu = window.parent.document.getElementById('font')
const selectedElementFontSizeMenu = window.parent.document.getElementById('font-size')
const selectedElementFontWeightMenu = window.parent.document.getElementById('fontWeight')
const selectedElementHeightMenu = window.parent.document.getElementById('height')
const heightMeasure = window.parent.document.getElementById('heightvh')
const widthMeasure = window.parent.document.getElementById('widthvw')
const selectedElementWidthMenu = window.parent.document.getElementById('width')
const selectedElementBorderMenu = window.parent.document.getElementById('border')
const selectedElementBorderRadiusMenu = window.parent.document.getElementById('border-radius')
const selectedElementMarginMenu = window.parent.document.getElementById('margin')
const selectedElementPaddingMenu = window.parent.document.getElementById('padding')
const selectedElementColorMenu = window.parent.document.getElementById('color')
const selectedElementBackgroundColorMenu = window.parent.document.getElementById('backgroundColor')
const selectedElementBackgroundImageMenu = window.parent.document.getElementById('backgroundImage')


const selectedElementTextAlignMenu = window.parent.document.getElementById('textAlign')
const selectedElementDisplayMenu = window.parent.document.getElementById('display')
const selectedElementPositionMenu = window.parent.document.getElementById('position')
const selectedElementJustifyContentMenu = window.parent.document.getElementById('justifyContent')
const selectedElementAlignContentMenu = window.parent.document.getElementById('alignContent')
const selectedElementJustifyItemsMenu = window.parent.document.getElementById('justifyItems')
const selectedElementAlignItemsMenu = window.parent.document.getElementById('alignItems')
const selectedElementGapMenu = window.parent.document.getElementById('gap')
const selectedElementObjectFitMenu = window.parent.document.getElementById('objectFit')


let imageDescription = window.parent.document.getElementById('description');
let descriptionIn = window.parent.document.createElement('p');
let buttonDelete = window.parent.document.createElement('button');
var notSelectDiv;

//uurchlult oruulsan
var selectedFontFamily;
var selectedFontSize;
var selectedFontWeight
var selectedTextAlign;
var selectedHeight;
var selectedWidth;
var selectedBorderStyle;
var selectedBorderRadius;
var selectedMargin;
var selectedPadding;
var selectedColor;
var selectedBackgroundColor;
var selectedImage;

var selectedAlignItems;
var selectedDisplay;
var selectedPosition;
var selectedJustifyContent;
var selectedAlignContent;
var selectedJustifyItems = " ";
var selectedAlignItems;
var selectedGap;
var selectedObjectFit;

var imageName = "Хоосон";
//Download blob object 


    

    
    //Elementuudeed select hiih uyed elementiig uurtuu hadgalah huvisagch
    var selectedPart = null;
    var selectedElement = " ";
    //herev element deer darval tuhain elementiig avna
    renderFrameContent.contentWindow.onmousedown = function(event){
        selectedPart = event.target;
        if (selectedPart.className.includes('selectable')) {
            if(selectedPart === selectedElement){
                if(selectedElement.style.outline === "none"){
                    selectedElement.style.outline = "5px solid #87CEFA";
                }else{
                    selectedElement.style.outline = "none";
                }
                
            }else{
                
            selectedElement = selectedPart;
            const selectableElements = renderFrameContent.contentWindow.document.querySelectorAll('.selectable');
            //Songoson elementees busdiig todruulahiig zogsooh
            selectableElements.forEach(element => {
                element.style.outline = "";
            });
            // document.getElementById("myH1").setAttribute("class", "democlass"); 
            
            notSelectDiv = selectedElement.tagName.toLowerCase().substring(0, 3);
            //     if (notSelectDiv.includes('div')) {
            //         selectedElement.style.width="100%"
            //     } else {
            //     //Zuuh uyed duudah function
            //     let chooseElement = null;
            //     console.log(chooseElement)
            //     selectedElement.style.position = "absolute";
            //     chooseElement = selectedElement;
            //     document.onmousemove = (e) => {
            //         x = e.pageX;
            //         y = e.pageY;

            //         chooseElement.style.left = x - 50 + "px";
            //         chooseElement.style.top = y - 10 + "px";
            //     }
            //     document.onmouseup = function (e) {
            //         chooseElement = null;
            //     }
            // }
            //double darahad utga uurchlugdun
            selectedElement.style.outline = "5px solid #87CEFA";}
            selectedElement.ondblclick = function(){
                selectedElement.contentEditable = selectedElement.contentEditable === "true" ? "false" : "true";
            }
            

            //Delete darahad element ustana
            selectedElement.onkeydown = function(event){
                const keyPressed = event.key;
                if (keyPressed === "Delete") {
                    selectedElement.remove();
                }
                if (keyPressed === "Enter") {
                    event.preventDefault(); // Prevent the default action of Enter key
        
        // Create a new line break element
        var br = document.createElement("br");
        
        // Get the selection and range
        var selection = window.getSelection();
        var range = selection.getRangeAt(0);
        
        // Insert the line break at the cursor position
        range.deleteContents(); // Delete any selected content
        range.insertNode(br);
        
        // Set the cursor position after the inserted line break
        range.setStartAfter(br);
        range.collapse(true);
        
        // Update the selection with the modified range
        selection.removeAllRanges();
        selection.addRange(range);
                }
            };
            
            
            //Songoson hesgiin style medeelluudiig angilan hadgalgh
            let collectStyle = window.getComputedStyle(selectedElement);
            for (let i = 0; i < collectStyle.length; i++) {
                if (collectStyle[i] === 'font-family') {
                    window.selectedFontFamily = collectStyle.getPropertyValue('font-family');
                }
                else if (collectStyle[i] === 'font-size') {
                    window.selectedFontSize = collectStyle.getPropertyValue('font-size');
                } 
                else if (collectStyle[i] === 'font-weight') {
                    window.selectedFontWeight = collectStyle.getPropertyValue('font-weight');
                }
                else if (collectStyle[i] === 'text-align') {
                    window.selectedTextAlign = collectStyle.getPropertyValue('text-align');
                }else if (collectStyle[i] === 'display') {
                    window.selectedDisplay = collectStyle.getPropertyValue('display');
                }else if (collectStyle[i] === 'position') {
                    window.selectedPosition = collectStyle.getPropertyValue('position');
                }else if (collectStyle[i] === 'justify-content') {
                    window.selectedJustifyContent = collectStyle.getPropertyValue('justify-content');
                }else if (collectStyle[i] === 'align-content') {
                    window.selectedAlignContent = collectStyle.getPropertyValue('align-content');
                }else if (collectStyle[i] === 'justify-items') {
                    window.selectedJustifyItems = collectStyle.getPropertyValue('justify-items');
                }else if (collectStyle[i] === 'align-items') {
                    window.selectedAlignItems = collectStyle.getPropertyValue('align-items');
                }else if (collectStyle[i] === 'gap') {
                    window.selectedGap = collectStyle.getPropertyValue('gap');
                }
                else if (collectStyle[i] === 'object-fit') {
                    window.selectedObjectFit = collectStyle.getPropertyValue('object-fit');
                }
                else if (collectStyle[i] === 'height') {
                    window.selectedHeight = collectStyle.getPropertyValue('height');
                }
                else if (collectStyle[i] === 'width') {
                        window.selectedWidth = collectStyle.getPropertyValue('width');
                        
                
                }
                else if (collectStyle[i] === 'border-bottom-style') {
                    window.selectedBorderStyle = collectStyle.getPropertyValue('border-bottom-style');
                }
                else if (collectStyle[i] === 'border-bottom-left-radius') {
                    window.selectedBorderRadius = collectStyle.getPropertyValue('border-bottom-left-radius').split('x');
                }
                else if (collectStyle[i] === 'margin-top'){
                    window.selectedMargin = collectStyle.getPropertyValue('margin-top');
                }
                else if (collectStyle[i] === 'padding-top'){
                    window.selectedPadding = collectStyle.getPropertyValue('padding-top');
                }
                else if (collectStyle[i] === 'text-align'){
                    window.selectedTextAlign = collectStyle.getPropertyValue('text-align');
                }
                else if (collectStyle[i] === 'color'){
                    let styleValue = collectStyle.getPropertyValue('color');
                    let clearRGB = styleValue.substring(4, styleValue.length - 1)
                    let rgbArray = clearRGB.split(',');
                    let hexArray = rgbArray.map(function (value) {
                        let hex = parseInt(value).toString(16);
                        return hex.length == 1 ? "0" + hex : hex;
                    });
                    window.selectedColor = '#' + hexArray.join('').toUpperCase();
                }
                else if (collectStyle[i] === 'background-color'){
                    let styleValue = collectStyle.getPropertyValue('background-color');
                    let clearRGB = styleValue.substring(4, styleValue.length - 1)
                    let rgbArray = clearRGB.split(',');
                    let hexArray = rgbArray.map(function (value) {
                        let hex = parseInt(value).toString(16);
                        return hex.length == 1 ? "0" + hex : hex;
                    });
                    window.selectedBackgroundColor = '#' + hexArray.join('').toUpperCase();
                }
                if (notSelectDiv.includes('img')) {
                    window.selectedImage = selectedElement.src;
                }
                else {
                    if (collectStyle[i] === 'background-image'){
                        window.selectedImage = collectStyle.getPropertyValue('background-image');
                    }
                }
            }
            
        }else{
            //select hiigdeegeh bolomjgui gazar darval umnuh select hiisen idevhjil alga bolno
            selectedElement.style.outline = "";
        }
    };
    
        //Select hiigdsen styluudiig menu hesgiin oroltiin heseg shiljuulen haruulah real-time uurchlult uugeer hiigdej bga
    Object.defineProperty(window, 'selectedFontFamily', {
        get: function () {
            return selectedFontFamily;
        },
        set: function (value) {
            if (value !== selectedFontFamily) {
                selectedFontFamily = value;
                selectedElementFontMenu.value = selectedFontFamily;
            }
        }
    });
    Object.defineProperty(window, 'selectedFontSize', {
        get: function () {
            return selectedFontSize;
        },
        set: function (value) {
            if (value !== selectedFontSize) {
                selectedFontSize = value;
                selectedElementFontSizeMenu.value = selectedFontSize;
            }
        }
    });
    Object.defineProperty(window, 'selectedFontWeight', {
        get: function () {
            return selectedFontWeight;
        },
        set: function (value) {
            if (value !== selectedFontWeight) {
                selectedFontWeight = value;
                selectedElementFontWeightMenu.value = selectedFontWeight;
            }
        }
    });

    Object.defineProperty(window, 'selectedTextAlign', {
        get: function () {
            return selectedTextAlign;
        },
        set: function (value) {
            if (value !== selectedTextAlign) {
                selectedTextAlign = value;
                selectedElementTextAlignMenu.value = selectedTextAlign;
            }
        }
    });
    Object.defineProperty(window, 'selectedDisplay', {
        get: function () {
            return selectedDisplay;
        },
        set: function (value) {
            if (value !== selectedDisplay) {
                selectedDisplay = value;
                selectedElementDisplayMenu.value = selectedDisplay;
            }
        }
    });
    Object.defineProperty(window, 'selectedPosition', {
        get: function () {
            return selectedPosition;
        },
        set: function (value) {
            if (value !== selectedPosition) {
                selectedPosition = value;
                selectedElementPositionMenu.value = selectedPosition;
            }
        }
    });
    Object.defineProperty(window, 'selectedJustifyContent', {
        get: function () {
            return selectedJustifyContent;
        },
        set: function (value) {
            if (value !== selectedJustifyContent) {
                selectedJustifyContent = value;
                selectedElementJustifyContentMenu.value = selectedJustifyContent;
            }
        }
    });
    Object.defineProperty(window, 'selectedAlignContent', {
        get: function () {
            return selectedAlignContent;
        },
        set: function (value) {
            if (value !== selectedAlignContent) {
                selectedAlignContent = value;
                selectedElementAlignContentMenu.value = selectedAlignContent;
            }
        }
    });
    Object.defineProperty(window, 'selectedJustifyItems', {
        get: function () {
            return selectedJustifyItems;
        },
        set: function (value) {
            if (value !== selectedJustifyItems) {
                selectedJustifyItems = value;
                selectedElementJustifyItemsMenu.value = selectedJustifyItems;
            }
        }
    });
    Object.defineProperty(window, 'selectedAlignItems', {
        get: function () {
            return selectedAlignItems;
        },
        set: function (value) {
            if (value !== selectedAlignItems) {
                selectedAlignItems = value;
                selectedElementAlignItemsMenu.value = selectedAlignItems;
            }
        }
    });
    Object.defineProperty(window, 'selectedGap', {
        get: function () {
            return selectedGap;
        },
        set: function (value) {
            if (value !== selectedGap) {
                selectedGap = value;
                selectedElementGapMenu.value = Math.floor(selectedGap[0].substring(0, selectedGap[0].length - 2));
            }
        }
    });
    Object.defineProperty(window, 'selectedObjectFit', {
        get: function () {
            return selectedObjectFit;
        },
        set: function (value) {
            if (value !== selectedObjectFit) {
                selectedObjectFit = value;
                selectedElementObjectFitMenu.value = selectedObjectFit;
            }
        }
    });
    
    
    Object.defineProperty(window, 'selectedHeight', {
        get: function () {
            return selectedHeight;
        },
        set: function (value) {
            if (value !== selectedHeight) {
                selectedHeight = value;
                selectedElementHeightMenu.value = Math.floor(selectedHeight.substring(0, selectedHeight.length - 2));
            }
        }
    });
    Object.defineProperty(window, 'selectedWidth', {
        get: function () {
            return selectedWidth;
        },
        set: function (value) {
            if (value !== selectedWidth) {
                selectedWidth = value;
                selectedElementWidthMenu.value = Math.floor(selectedWidth.substring(0, selectedWidth.length - 2));
            }
        }
    });
    Object.defineProperty(window, 'selectedBorderStyle', {
        get: function () {
            return selectedBorderStyle;
        },
        set: function (value) {
            if (value !== selectedBorderStyle) {
                selectedBorderStyle = value;
                selectedElementBorderMenu.value = selectedBorderStyle;
            }
        }
    });
    Object.defineProperty(window, 'selectedBorderRadius', {
        get: function () {
            return selectedBorderRadius;
        },
        set: function (value) {
            if (value !== selectedBorderRadius) {
                selectedBorderRadius = value;
                selectedElementBorderRadiusMenu.value = Math.floor(selectedBorderRadius[0].substring(0, selectedBorderRadius[0].length - 1));

            }
        }
    });
    Object.defineProperty(window, 'selectedMargin', {
        get: function () {
            return selectedMargin;
        },
        set: function (value) {
            if (value !== selectedMargin) {
                selectedMargin = value;
                selectedElementMarginMenu.value = Math.floor(selectedMargin.substring(0, selectedMargin.length - 2));
            }
        }
    });
    Object.defineProperty(window, 'selectedPadding', {
        get: function () {
            return selectedPadding;
        },
        set: function (value) {
            if (value !== selectedPadding) {
                selectedPadding = value;
                selectedElementPaddingMenu.value = Math.floor(selectedPadding.substring(0, selectedPadding.length - 2));
            }
        }
    });
    Object.defineProperty(window, 'selectedColor', {
        get: function () {
            return selectedColor;
        },
        set: function (value) {
            if (value !== selectedColor) {
                selectedColor = value;
                selectedElementColorMenu.value = selectedColor;
            }
        }
    });
    Object.defineProperty(window, 'selectedBackgroundColor', {
        get: function () {
            return selectedBackgroundColor;
        },
        set: function (value) {
            if (value !== selectedBackgroundColor) {
                selectedBackgroundColor = value;
                selectedElementBackgroundColorMenu.value = selectedBackgroundColor;
            }
        }
    });
    Object.defineProperty(window, 'selectedImage', {
        get: function () {
            return selectedImage;
        },
        set: function (value) {
            if (value !== selectedImage){
                selectedImage = value;
                selectedElementBackgroundImageMenu.name = selectedImage;
                imageName = selectedImage.substring(0, 4);    
            }
        }
    });
    
    
    
    //Menu hesegt utguudiin uurchlultuud orohod undsen huudas deer obectod uurchlultiig oruulj uguh uuregute
    selectedElementFontMenu.onchange = function(){
        selectedElement.style.fontFamily = selectedElementFontMenu.value.trim();
        
    };
    selectedElementFontSizeMenu.onchange = function(){
        selectedElement.style.fontSize = selectedElementFontSizeMenu.value.trim();
    };
    selectedElementFontWeightMenu.onchange = function(){
        selectedElement.style.fontWeight = selectedElementFontWeightMenu.value.trim();
    };
    selectedElementTextAlignMenu.onchange = function(){
        selectedElement.style.textAlign = selectedElementTextAlignMenu.value.trim();
    };
    selectedElementDisplayMenu.onchange = function(){
        selectedElement.style.display = selectedElementDisplayMenu.value.trim();
    };
    selectedElementPositionMenu.onchange = function(){
        selectedElement.style.position = selectedElementPositionMenu.value.trim();
    };
    selectedElementJustifyContentMenu.onchange = function(){
        selectedElement.style.justifyContent = selectedElementJustifyContentMenu.value.trim();
    };
    selectedElementAlignContentMenu.onchange = function(){
        selectedElement.style.alignContent = selectedElementAlignContentMenu.value.trim();
    };
    selectedElementJustifyItemsMenu.onchange = function(){
        selectedElement.style.justifyItems = selectedElementJustifyItemsMenu.value.trim();
    };
    selectedElementAlignItemsMenu.onchange = function(){
        selectedElement.style.alignItems = selectedElementAlignItemsMenu.value.trim();
    };
    selectedElementGapMenu.onchange = function(){
        selectedElement.style.gap = selectedElementGapMenu.value.trim()+ "px";
    };
    selectedElementHeightMenu.onchange = function(){
        selectedElement.style.height = selectedElementHeightMenu.value.trim() + heightMeasure.value;
    };
    selectedElementWidthMenu.onchange = function(){
        selectedElement.style.width = selectedElementWidthMenu.value.trim() + widthMeasure.value;
        
    };
    selectedElementBorderMenu.onchange = function(){
        selectedElement.style.border = selectedElementBorderMenu.value.trim();
    };
    selectedElementBorderRadiusMenu.onchange = function(){
        selectedElement.style.borderRadius = selectedElementBorderRadiusMenu.value.trim() + "%";
        
        
    };
    selectedElementMarginMenu.onchange = function(){
        selectedElement.style.margin = selectedElementMarginMenu.value.trim() + "px";
        
        
    };
    selectedElementPaddingMenu.onchange = function(){
        selectedElement.style.padding = selectedElementPaddingMenu.value.trim() + "px";
        
    };
    selectedElementObjectFitMenu.onchange = function(){
        selectedElement.style.objectFit = selectedElementObjectFitMenu.value.trim();
    };
    selectedElementColorMenu.onchange = function(){
        selectedElement.style.color = selectedElementColorMenu.value.trim();
        
    };
    selectedElementBackgroundColorMenu.onchange = function(){
        selectedElement.style.backgroundColor = selectedElementBackgroundColorMenu.value.trim();
        
    };
    selectedElementBackgroundImageMenu.onchange = function(){
        const reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        reader.onload = function(){            
            if (notSelectDiv.includes('img')) {
                selectedElement.src = reader.result;
            } else {
                selectedElement.style.backgroundImage = `url(${reader.result})`;
            }
        }
        
    };
    
    //Zurag uurchluh oruulah hesgiin tohirgoo
    
    imageDescription.style.margin = "10px";
    buttonDelete.style.color = "black";
    buttonDelete.style.backgroundColor = "white";
    buttonDelete.style.borderRadius = "5%";
    buttonDelete.style.padding = "3px";
    buttonDelete.textContent = "Зураг устгах";
    descriptionIn.style.marginRight = "25px"
    buttonDelete.onclick = function(){
        selectedElement.src="https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png";
        selectedElementBackgroundImageMenu.splice();
    }
    imageDescription.appendChild(descriptionIn);
    imageDescription.appendChild(buttonDelete);
    
    