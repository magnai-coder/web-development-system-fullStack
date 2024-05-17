

const sourceCode = window.document.querySelector(".addingSection");
console.log(sourceCode)

async function handleSaveCode() {
    
    try {
        const mainCodeContainerRoute = window.parent.document.getElementById('render');
        if (!mainCodeContainerRoute) {
            throw new Error("Unable to find 'render' element in parent document");
        }
        
        const mainCodeContainer = mainCodeContainerRoute.contentWindow.document.getElementById('whitePage');
        if (!mainCodeContainer) {
            throw new Error("Unable to find 'whitePage' element in iframe document");
        }
        
        const test = mainCodeContainer.outerHTML;
        const response = await fetch("http://localhost:3030/save-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: test }) // Sending 'text' as required by the schema
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error Status: ${response.status}`);
        }
        
        const responseGet = await fetch("http://localhost:3030/save-code", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (!responseGet.ok) {
            throw new Error(`HTTP error Status: ${response.status}`);
        }
        const data = await responseGet.json();
        
        console.log(sourceCode)
        sourceCode.insertAdjacentHTML('afterbegin',data.data[0].text);
        location.href="http://127.0.0.1:5500/client/pages/renderPage.html";
        console.log(data.data[0].text);
        
        console.log("Code saved successfully");
    } catch (error) {
        console.error("Fetch error:", error);
    }
}