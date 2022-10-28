
window.addEventListener('load',() => {
  //alert("Hello World.This page is loaded!")
  

var jsondata =[

{"title":"Lucianne",
  "href":"https://lucianne.com"
}, 
{"title":"Drudge",
  "href":"https://drudgereport.com"
}, 
{"title":"Treehouse",
  "href":"https://conservativetreehouse.com"
}, 
{"title":"Google",
  "href":"https://google.com"
}

  
];
var content = document.getElementById("content");
var list = document.createElement("ul");
for (let i of jsondata) 
{ 
var item = document.createElement("li"); 
list.appendChild(item.title); 
}
content.appendChild.inner(list);
  
});