const headerMark = window.parent.document.getElementById('render')
// document.addEventListener('mousedown', () => {
//     document.addEventListener('mousemove', changePosition);
//     function changePosition() {
//         x = e.pageX;
//         y = e.pageY;
//         console.log(x);
//         selectElement.style.left = x + "px";
//         selectElement.style.top = y + "px";
//     }
// });


var changedWidth;
var changeHeight;
// cursoriin helberjilt bairshilaas hamarch uurchlugduh
headerMark.contentWindow.document.addEventListener('mousemove', (event) => {
    var coordinate = selectElement.getBoundingClientRect();

    var x = event.clientX;
    var y = event.clientY;
    var selectedElementHeight = coordinate.height;
    var selectedElementWidth = coordinate.width;
    var xleftcorner = coordinate.x;
    var yleftcorner = coordinate.y;

    // frameContent.addEventListener('mouseover', stretching);

    if (x > xleftcorner - 10 && x < xleftcorner + 13 && yleftcorner - 13 < y && y < yleftcorner + 13) {
        selectElement.style.cursor = 'nwse-resize';
        selectElement.style.width = x - xleftcorner + 'px';
        selectElement.style.height = y - yleftcorner + 'px';

    }
    else if (x > xleftcorner + selectedElementWidth - 13 && x < xleftcorner + selectedElementWidth + 13 && yleftcorner + selectedElementHeight - 13 < y && y < yleftcorner + selectedElementHeight + 13) {
        selectElement.style.cursor = 'nwse-resize';

        selectElement.style.height = y - yleftcorner + 'px';
        selectElement.style.width = x - xleftcorner + 'px';

    }
    else if (x > xleftcorner + selectedElementWidth - 13 && x < xleftcorner + selectedElementWidth + 13 && yleftcorner - 13 < y && y < yleftcorner + 13) {
        selectElement.style.cursor = 'sw-resize';
        selectElement.style.height = y - yleftcorner + 'px';
        selectElement.style.width = x - xleftcorner + 'px';

    }
    else if (x > xleftcorner - 13 && x < xleftcorner + 13 && yleftcorner + selectedElementHeight - 13 < y && y < yleftcorner + selectedElementHeight + 13) {
        selectElement.style.cursor = 'sw-resize';
        selectElement.style.height = selectedElementHeight + yleftcorner - y + 'px';
        selectElement.style.width = selectedElementWidth + xleftcorner - x + 'px';
    }
    else if (x > xleftcorner + 8 && x < xleftcorner + selectedElementWidth - 8 && yleftcorner - 8 < y && y < yleftcorner + 8) {
        selectElement.style.cursor = 'ns-resize';
        selectElement.style.height = selectedElementHeight + y - yleftcorner + 'px';
    }
    else if (x > xleftcorner + 8 && x < xleftcorner + selectedElementWidth - 8 && yleftcorner + selectedElementHeight - 8 < y && y < yleftcorner + selectedElementHeight + 8) {
        selectElement.style.cursor = 'ns-resize';
        selectElement.style.height = y - yleftcorner + 'px';
    }
    else if (x < xleftcorner + 8 && x > xleftcorner - 8 && yleftcorner + 8 < y && y < yleftcorner + selectedElementHeight - 8) {
        selectElement.style.cursor = 'ew-resize';
        selectElement.style.width = selectedElementWidth - x + xleftcorner + 'px';
    }
    else if (x < xleftcorner + selectedElementWidth + 8 && x > xleftcorner + selectedElementWidth - 8 && yleftcorner + 8 < y && y < yleftcorner + selectedElementHeight - 8) {
        selectElement.style.cursor = 'ew-resize';
        selectElement.style.width = x - xleftcorner + 'px';

    }
    else {

        selectElement.style.cursor = 'all-scroll';
        // selectElement.style.position = 'absolute';
        selectElement.style.left = x - 100 + "px";
        selectElement.style.top = y - 100 + "px";




    }
});