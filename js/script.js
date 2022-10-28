
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


for (let i of jsondata) 
{ 
	let item = "<div><span>i.title</span><span>i.href</span></div>";
}
let content = document.getElementById("content");
content.appendChild.innerHTML(item); 
}

  
});