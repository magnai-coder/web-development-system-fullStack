const whitePageWay = window.parent.document.getElementById('render');
whitePageWay.contentWindow.addEventListener('click', (event) => {
    var selectedElementToChange = event.target; 
    if (selectedElementToChange.className.includes('selectable') && selectedElementToChange !== " "){   
        const insideWhitePage = whitePageWay.contentWindow.document.getElementById("whitePage");
        // cursoriin helberjilt bairshilaas hamarch uurchlugduh
        insideWhitePage.addEventListener('mousemove', (event) => {
            var elementInformation = selectedElementToChange.getBoundingClientRect();
            var x = event.clientX;
            var y = event.clientY;
            var selectedElementHeight = elementInformation.height;
            var selectedElementWidth = elementInformation.width;    
            var xleftcorner = elementInformation.x;
            var yleftcorner = elementInformation.y;
            
            //Zuun deed untsuguus tataj urgun bolon unduriig nemj hasah 
            if (x > xleftcorner - 20 && x < xleftcorner + 2 && yleftcorner - 13 < y && y < yleftcorner + 2){
                selectedElementToChange.parentElement.style.cursor = 'nwse-resize';
                selectedElementToChange.style.cursor = 'nwse-resize';
                
                selectedElementToChange.parentElement.onmousedown = function() {
                    selectedElementToChange.parentElement.onmousemove = function(e) {
                        
                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.top = y + 'px';
                        selectedElementToChange.style.left = x + 'px';
                        
                        
                        selectedElementToChange.style.width = xleftcorner-x+selectedElementWidth + 'px';
                        selectedElementToChange.style.height = yleftcorner-y+selectedElementHeight + 'px';
                    }
                    }
                    
                    selectedElementToChange.parentElement.onmouseup = function () {
                        selectedElementToChange.style.outline = "5px solid #87CEFA"
                        
                        selectedElementToChange.parentElement.onmousedown = function(){
                            
                        }
                        selectedElementToChange.parentElement.onmousemove = function(){
                        }
                        
                        
                        
                    }
                    
                    
                }
                // Elementiin baruun dood hesgees chirch undur bolon urgunii hemjeeg ihesgeh
                else if (x > xleftcorner + selectedElementWidth - 2 && x < xleftcorner + selectedElementWidth + 10 && yleftcorner + selectedElementHeight - 2 < y && y < yleftcorner + selectedElementHeight + 10) {
                    selectedElementToChange.parentElement.style.cursor = 'nwse-resize';
                    selectedElementToChange.style.cursor = 'nwse-resize';
                    selectedElementToChange.parentElement.onmousedown = function() {
                        selectedElementToChange.parentElement.onmousemove = function(e) {
                            x = e.clientX;
                            y = e.clientY;
                            selectedElementToChange.style.height = y - yleftcorner + 'px';
                            selectedElementToChange.style.width = x - xleftcorner + 'px';
                        }
                    }
                    selectedElementToChange.parentElement.onmouseup = function () {
                        selectedElementToChange.style.outline = "5px solid #87CEFA"
                        
                        selectedElementToChange.parentElement.onmousedown = function(){
                        }
                        selectedElementToChange.parentElement.onmousemove = function(){
                        }
                        
                        
                        
                    }
                    
                }
            //Baruun deed untsuguus sungaj undur urguniig uurchluh bolomjtoi 
            else if (x > xleftcorner + selectedElementWidth - 2 && x < xleftcorner + selectedElementWidth + 13 && yleftcorner - 13 < y && y < yleftcorner + 2) {
                selectedElementToChange.style.cursor = 'sw-resize';
                selectedElementToChange.parentElement.style.cursor = 'sw-resize';
                selectedElementToChange.parentElement.onmousedown = function() {
                    selectedElementToChange.parentElement.onmousemove = function(e) {
                        

                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.top = y + 'px';
                        selectedElementToChange.style.left = xleftcorner + 'px';
                        
                        
                        selectedElementToChange.style.width = x-xleftcorner + 'px';
                        selectedElementToChange.style.height = yleftcorner-y+selectedElementWidth + 'px';
                    }
                }
                
                selectedElementToChange.parentElement.onmouseup = function () {
                    selectedElementToChange.style.outline = "5px solid #87CEFA"
                    
                    selectedElementToChange.parentElement.onmousedown = function(){
                        
                    }
                    selectedElementToChange.parentElement.onmousemove = function(){
                        
                    }
                    
                }
            }
            // zuun dood bulangaas tataj sungan urgun bolon unduriig uurchluh bolomjtoi boloh
            else if (x > xleftcorner - 13 && x < xleftcorner + 2 && yleftcorner + selectedElementHeight - 2 < y && y < yleftcorner + selectedElementHeight + 13) {
                selectedElementToChange.style.cursor = 'sw-resize';
                selectedElementToChange.parentElement.style.cursor = 'sw-resize';
                
                selectedElementToChange.parentElement.onmousedown = function() {
                    selectedElementToChange.parentElement.onmousemove = function(e) {

                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.top = yleftcorner+ 'px';
                        selectedElementToChange.style.left = x + 'px';
                        

                            selectedElementToChange.style.width = xleftcorner+selectedElementWidth-x + 'px';
                            selectedElementToChange.style.height = y - yleftcorner + 'px';
                        }
                    }
                    
                    selectedElementToChange.parentElement.onmouseup = function () {
                    selectedElementToChange.style.outline = "5px solid #87CEFA"
                    
                    selectedElementToChange.parentElement.onmousedown = function(){
                        
                    }
                    selectedElementToChange.parentElement.onmousemove = function(){
                        
                    }
                }
                
                ;
            }
            //Deed talaas tataj unduriig uurchluh bolomjtoi bolgoson
            else if (x > xleftcorner + 8 && x < xleftcorner + selectedElementWidth - 8 && yleftcorner - 8 < y && y < yleftcorner + 4) {
                selectedElementToChange.style.cursor = 'ns-resize';
                selectedElementToChange.parentElement.style.cursor = 'ns-resize';
                
                selectedElementToChange.parentElement.onmousedown = function() {
                    selectedElementToChange.parentElement.onmousemove = function(e) {
                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.top = y + 'px';
                        
                        selectedElementToChange.style.height = selectedElementHeight + yleftcorner - y + 'px';
                    }
                }
                
                selectedElementToChange.parentElement.onmouseup = function () {
                    selectedElementToChange.style.outline = "5px solid #87CEFA"
                    
                    selectedElementToChange.parentElement.onmousedown = function(){
                        
                    }
                    selectedElementToChange.parentElement.onmousemove = function(){
                        

                    }
                    
                }
            }
            //Dood talaas tataj sungan unduriig uurchilj boloh bolomjtoi bolson
            else if (x > xleftcorner + 3 && x < xleftcorner + selectedElementWidth - 5 && yleftcorner + selectedElementHeight - 5 < y && y < yleftcorner + selectedElementHeight + 3) {
                selectedElementToChange.style.cursor = 'ns-resize';
                selectedElementToChange.parentElement.style.cursor = 'ns-resize';
                selectedElementToChange.parentElement.onmousedown = function() {
                    selectedElementToChange.parentElement.onmousemove = function(e) {

                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.height = y - yleftcorner + 'px';
                        
                    }
                }
                
                selectedElementToChange.parentElement.onmouseup = function () {
                    selectedElementToChange.style.outline = "5px solid #87CEFA"
                    selectedElementToChange.parentElement.onmousedown = function(){
                        
                    }
                    selectedElementToChange.parentElement.onmousemove = function(){
                        
                    }
                    
                    
                    
                    
                }
                
            }
            //Zuun talaas sunguj elementiin urguniig uurchluh bolomjtoi bolgoson
            else if (x < xleftcorner + 4 && x > xleftcorner - 8 && yleftcorner + 8 < y && y < yleftcorner + selectedElementHeight - 8) {
                //Layout zuun talaas sungahiig horigloson
                if(selectedElementToChange.style.width.includes("100%")){
                }else{
                selectedElementToChange.style.cursor = 'ew-resize';
                selectedElementToChange.parentElement.style.cursor = 'ew-resize';
                
                selectedElementToChange.parentElement.onmousedown = function() {
                    selectedElementToChange.parentElement.onmousemove = function(e) {
                
                        
                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.left = x + 'px';
                        
                        selectedElementToChange.style.width = selectedElementWidth + xleftcorner - x + 'px';
                        
                    }
                }
                
                selectedElementToChange.parentElement.onmouseup = function () {
                    
                    selectedElementToChange.parentElement.onmousedown = function(){
                        
                    }
                    selectedElementToChange.parentElement.onmousemove = function(){
                        
                        
                    }
                    selectedElementToChange.style.outline = "5px solid #87CEFA"
                    
                    
                    
                }
            }
                
            }
            //Baruun talaas sungaj elementiiin urguniig uurchluh bolomjtoi bolgoh
            else if (x < xleftcorner + selectedElementWidth + 13 && x > xleftcorner + selectedElementWidth - 4  && yleftcorner + 8 < y && y < yleftcorner + selectedElementHeight - 8) {
                //Layout baruun talaas sungahiig horigloson
                if(selectedElementToChange.style.width.includes("100%")){
                }else{
                selectedElementToChange.style.cursor = 'ew-resize';
                selectedElementToChange.parentElement.style.cursor = 'ew-resize';
                
                selectedElementToChange.parentElement.onmousedown = function() {
                    
                    selectedElementToChange.parentElement.onmousemove = function(e) {
                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.width = x - xleftcorner + 'px';
                    }
                }
                
                selectedElementToChange.parentElement.onmouseup = function () {
                    selectedElementToChange.parentElement.onmousedown = function(){
                        
                    }
                    selectedElementToChange.parentElement.onmousemove = function(){
                        
                    }
                    selectedElementToChange.style.outline = "5px solid #87CEFA"
                }   
            }
                //Hureenii dortor bolon gaduurah cursoriin helberiig zaahaas gadna elementiin bairshiliig uurchluh bolomjtoi bolgoh
            }else{
                selectedElementToChange.parentElement.style.cursor = 'default';
                selectedElementToChange.ondblclick = function(){
                    selectedElementToChange.contentEditable = selectedElementToChange.contentEditable === "true" ? "false" : "true";
                }
                if(selectedElementToChange.contentEditable === "true"){
                    selectedElementToChange.style.cursor = 'auto';
                }else{
                    selectedElementToChange.style.cursor = 'all-scroll';
                }
                //double darahad utga uurchlugdun
                selectedElementToChange.onmousedown = function () {
                    var changingX = x - xleftcorner; 
                    var changingY = y - yleftcorner; 
                    
                    selectedElementToChange.parentElement.onmousedown = function(){
                        
                    }
                    selectedElementToChange.parentElement.onmousemove = function(){
                        
                    }
                    selectedElementToChange.parentElement.onmousemove = function(e){
                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.left = x - changingX + "px";
                        selectedElementToChange.style.top = y - changingY + "px";
                    }
                    selectedElementToChange.parentElement.onmousemove = function(e){
                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.left = x - changingX + "px";
                        selectedElementToChange.style.top = y - changingY + "px";
                    }
                }
                
                selectedElementToChange.onmouseup = function () {
                    
                    selectedElementToChange.onmousedown = function(){
                    }
                    selectedElementToChange.onmousemove = function(){
                        
                    }
                    selectedElementToChange.parentElement.onmousemove = function(){
                        
                    }
                    selectedElementToChange.parentElement.onmouseup = function(){
                  
                    }
                    
                }
                selectedElementToChange.parentElement.onmousedown = function(){
                    selectedElementToChange.parentElement.onmouseup = function(){

                    }
                    selectedElementToChange.style.outline = " ";
                }
             
            }
            
        })
        
    }
});

