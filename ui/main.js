console.log('Loaded!');
var element = document.getElementById("main-text");
//element.innerHTML = "Mokshagna";
var img = document.getElementById("madi");

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function(){
    
   //img.style.marginLeft= "500px ";
    var interval = setInterval(moveRight(),50);
};
