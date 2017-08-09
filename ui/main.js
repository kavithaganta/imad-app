/*console.log('Loaded!');
var element = document.getElementById("main-text");
//element.innerHTML = "Mokshagna";
var img = document.getElementById("madi");

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + "px";
};
img.onclick = function(){
    
   //img.style.marginLeft= "500px ";
    var interval = setInterval(moveRight(),50);
} ;*/

var button = document.getElementById("counter");
 //var counter = 0;
 button.onclick = function()
 {
     //create request
     var request = new XMLHttpRequest();
     //capture the response
     request.onreadystatechange = function()
     {
          if(request.readyState === XMLHttpRequest.DONE)
          {
              if(request.status === 200)
              {
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
          }
     }
//counter = counter + 1;
 //    var span = document .getElementById ("count");
    };
    //make the request
request.open('GET','http://gantakavitha.imad.hasura-app.io/counter',true);
request.send(null);
};
//submit name
var nameInput = document.getElementById("name");
var name = nameInput.value;
var submit = document.getElementById("submit-btn");
submit.onclick = function(){
    var names=  ["name1" ,"name2", "name3", "name4"];
    var list = '';
    for(var i=0;i<names.length;i++){
    list +='<li>'+ names[i]+'</li>';
    }
    var ul = document.getElementById("namelist");
    ul.innerHTML = list;
    
};
