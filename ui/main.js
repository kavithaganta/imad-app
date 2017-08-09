`console.log('Loaded!');
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
} ;`

var button = document.getElementById("counter");
 //var counter = 0;
 button.onclick = function()
 {
     var request = new XMLHTTPRequest();
     request.onreadystatechange = function()
     {
          if(request.readyState=== XMLHTTPRequest.Done)
          {
              if(request.status===200)
              {
                var counter = request.responseText;
                var span = document.getElementBtId("count");
                span.innerHTML = counter.toString();
          }
     }
//counter = counter + 1;
 //    var span = document .getElementById ("count");
    };
    //make the request
request.open('GET','http://gantakavitha.imad.hasura-app.io\counter',true);
request.send(null);
};
