console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "Mokshagna";
var image = document.getElementById("madi");
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    image.style.marginLeft = marginLeft + "px";
}
img.onClick =function(){
    //image.style.marginleft ="100px";
    var interval = setInterval(moveRight,50);
};
