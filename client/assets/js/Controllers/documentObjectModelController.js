function downloading() {
    try {
        let imported = window.parent.document.getElementById('render').contentWindow.document.getElementById('whitePage');
        if (imported) {
            const data = imported.outerHTML;
            const blob = new Blob([data], { type: "text/html" });
            const href = URL.createObjectURL(blob);
            const a = Object.assign(document.createElement('a'), { href, style: "display:none", download: "index.html" });
            a.click();
            URL.revokeObjectURL(href);
            a.remove();
        } else {
            console.error('Huudas oldsongui');
        }
    } catch (error) {
        console.error(error);
    }
}
function reloadFrame(){
    const page = document.getElementById("render").contentWindow.document.getElementById("whitePage");
    page.removeChild(page.firstChild);
    sessionStorage.clear();
}
