// bring in the express module
var express = require("express");

// Express initialization
var app = express();

app.get("/", function(request, response){
   response.json({"result":null});
});


app.get("/add/:number1/:number2", function(request, response){
	 // parseFloat can parse a string with a decimal into a number
	var n1 = parseFloat(request.params.number1);
	var n2 = parseFloat(request.params.number2); 
	var result = n1 + n2;
	response.json({"result":result});
});

app.get("/substract/:number1/:number2", function(request, response){
	var n1 = parseFloat(request.params.number1); 
	var n2 = parseFloat(request.params.number2); 
	var result = n1 - n2;
	response.json({"result":result});
});

app.get("/multiply/:number1/:number2", function(request, response){
	var n1 = parseFloat(request.params.number1);
	var n2 = parseFloat(request.params.number2); 
	var result = n1 * n2;
	response.json({"result":result});
});

app.get("/divide/:number1/:number2", function(request, response){
	var n1 = parseFloat(request.params.number1); 
	var n2 = parseFloat(request.params.number2); 
	var result = (n1 / n2);
	response.json({"result":result});
});

app.listen(3001, function(){
    console.log("server starting on port 3001");
});