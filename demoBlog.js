
/**function jumpText(){
	var request=new XMLHttpRequest();
	request.responseType="json";
	request.open("GET","demoBlog.json");
	request.onreadystatechange=function(){
		if(request.readyState==4&&request.status==200){
			var response=request.response;
			alert(response["Novel"]["Lord of the Flies"]["1"]["Title"]);
		}
	}
	request.setRequestHeader("Content-Type","application/json");
	request.send();
}**/
/**
var i=1;
function jumpText(){

	var callback=function(a){
		var title=document.querySelector("#right div");
		title.innerHTML=a["Novel"]["Lord of the Flies"]["1"]["Title"];		
	}
	getResponse("demoBlog.json","json",callback);
	var callback=function(a){
      	var right=document.querySelector("#right p");
		right.innerHTML=a;

	}
	getResponse("/Novel/Lord of The Flies/1.txt","text",callback);
}

function nextChapter(){
   var callback=function(a){
		var title=document.querySelector("#right div");
		title.innerHTML=a["Novel"]["Lord of the Flies"][""+i]["Title"];		
	}
	getResponse("demoBlog.json","json",callback);
	var callback=function(a){
      	var right=document.querySelector("#right p");
		right.innerHTML=a;
	}
	getResponse("/Novel/Lord of The Flies/"+i+".txt","text",callback);
	i++;
}
function lastChapter(){
   var callback=function(a){
		var title=document.querySelector("#right div");
		title.innerHTML=a["Novel"]["Lord of the Flies"][""+i]["Title"];		
	}
	getResponse("demoBlog.json","json",callback);
	var callback=function(a){
      	var right=document.querySelector("#right p");
		right.innerHTML=a;
	}
	getResponse("/Novel/Lord of The Flies/"+i+".txt","text",callback);
	i--;
}
**/
function getResponse(url,type,callback){
	var request=new XMLHttpRequest();	
	request.responseType=type;
	request.open("GET",url);
	request.onreadystatechange=function(){
		if(request.readyState==4&&request.status==200){
			var response=request.response;
			callback(response);
			request.abort();	

		}
	};
	if(type==="text"){
		request.setRequestHeader("Content-Type","text/plain");
	}else if(type==="json"){
		request.setRequestHeader("Content-Type","application/json");
	}else if(type==="document"){
		request.setRequestHeader("Content-Type","text/html");
	}else if(type==="blob"){
		request.setRequestHeader("Content-Type","text/xml");
	}
	request.send();
}

var i=1;
var j;
function refresh(){
	
 	var callback_1=function(a){
		var title=document.querySelector("#right div");
		console.log(a);
		title.innerHTML=a["Novel"]["Lord of the Flies"][i]["Title"];		
	}
	getResponse("demoBlog.json","json",callback_1);

	var callback_2=function(a){
      	var right=document.querySelector("#right p");
		right.innerHTML=a;
	}
	getResponse("/Novel/Lord of The Flies/"+i+".txt","text",callback_2);
}

function jumpText(){
	i=1;
	refresh_2("Lord of the Flies");
    j=1;
}

/**function lastChapter(){
	i--;
	refresh_2("Lord of the Flies");
}
function nextChapter(){
	i++;
	refresh_2("Lord of the Flies");
}**/
function refresh_2(bookTitle){
	var callback_1=function(a){
		var title=document.querySelector("#right div");
		title.innerHTML=a["Novel"][bookTitle][i]["Title"];		
	}
	getResponse("demoBlog.json","json",callback_1);

	var callback_2=function(a){
      	var right=document.querySelector("#right p");
		right.innerHTML=a;
	}
	getResponse("/Novel/"+bookTitle+"/"+i+".txt","text",callback_2);
}
function jumpText_2(){
	i=1;
	refresh_2("The Giver");
	j=2;
}

function lastChapter(){
	i--;
	if(j===1){
		refresh_2("Lord of the Flies");
	}
	else if(j===2){
		refresh_2("The Giver");
	}
}
function nextChapter(){
	i++;
	if(j===1){
		refresh_2("Lord of the Flies");
	}
	else if(j===2){
		refresh_2("The Giver");
	}
}