var range = document.getElementById('high');
var fill = document.getElementById('fill_char');
var value = document.getElementById('value'),
        canvas = document.getElementsByClassName('canvas')[0];
var fillChar = fill['value'];
var num = 1;
drawPyramid(fillChar, num);
range.addEventListener('change', updateText);
fill.addEventListener('change', updateFill);

function clearCanvas() {
    canvas.innerHTML = '';
} // clear div 'canvas'
function drawPyramid(ch, n) { // draw pyramid at div 'canvas'
    for (var i=1; i<=n; i++) {
    var node = document.createElement('p');
    var text = '';
    for (j=1; j<=i+1; j++) text+=ch;
    node.className = 'stair';
    node.innerHTML = text;
    canvas.appendChild(node);
    }
}
function updateText(event) {
    num = parseInt(event.target['value']);
    value.innerHTML = num;
    clearCanvas();
    drawPyramid(fillChar, num);
}
function updateFill(event) {
    fillChar = event.target['value'];
    clearCanvas();
    drawPyramid(fillChar, num);
}