let convert = function(intext){
	out = intext.replace(/, /g, " #");
	out = "#"+out;
	
	return out;
} 

let conv = function(input){
	console.log("working");
	document.getElementById("output").innerText = convert(input);	
	
	
}	

