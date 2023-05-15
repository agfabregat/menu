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

	//var sb = new StringBuilder();
	//for (let i of jsondata) 
	//{ 
	//	var t = i.title;
	//	var h = i.href;
	//	sb.append(`<div><a target="_blank" href="${i.href}">${i.title}</a></div>`);
	//	//sb.append(`<div><span>${i.title}</span><span>${i.href}</span></div>`);
	//}
	//let content = document.getElementById("content");
	//content.innerHTML=sb.toString(); 
	//sb.clear();