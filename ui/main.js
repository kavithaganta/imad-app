console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "Mokshagna";
var img = document.getElementById("madi");

//var marginLeft = 0;
/*function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";
}*/
img.onClick =function(){
    img.style.position = "absolute";
   img.style.marginLeft= "50px ";
   // var interval = setInterval(moveRight(),50);
};
