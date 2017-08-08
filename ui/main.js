console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "Mokshagna";
var image = document.getElementById("madi");
var marginLeft = 0;
function moveRight(){
    marginLeft =marginLeft + 10;
    image.style.marginLeft = marginLeft + "px";
}
img.onclick =function(){
    //image.style.marginleft ="100px";
    var interval = setinterval(moveRight,50);
};
