function changeColor(){
var square = document.getElementById(squareid);
var randomColor = getRandomColor();
square.style.backgroundColor = randomColor;
}
function getRandomColor(){
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
return color;
}
