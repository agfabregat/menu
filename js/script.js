
window.addEventListener('load',() => {
  //alert("Hello World.This page is loaded!")
  

let jsondata =[

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

function StringBuilder(value) {
    this.strings = new Array();
    this.append(value);
}

StringBuilder.prototype.append = function (value) {
    if (value) {
        this.strings.push(value);
    }
}

StringBuilder.prototype.clear = function () {
    this.strings.length = 0;
}

StringBuilder.prototype.toString = function () {
    return this.strings.join("");
}

var sb = new StringBuilder();
for (let i of jsondata) 
{ 
	sb.append("<div><span>i[title]</span><span>i[href]</span></div>");
}
let content = document.getElementById("content");
content.innerHTML=sb.toString(); 
sb.clear();


  
});