
    async function handleSaveCode(){
        try{
            const mainCodeContainerRoute = window.parent.document.getElementById('render');
            const mainCodeContainer = mainCodeContainerRoute.contentWindow.document.getElementById('whitePage');

            const test = mainCodeContainer.outerHTML
            console.log(mainCodeContainer);
            const response = await fetch("http://localhost:3030/save-code",{ 
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({test})
            });
            if(!response.ok){
                throw new Error(`HTTP error Status: ${response.status}`);
            }
        }catch(error){
        console.error("fetch error",error);
    }
}


