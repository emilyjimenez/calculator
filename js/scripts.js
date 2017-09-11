var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function (number1, number2) {
	return number1 - number2;
};

var divide = function (number1, number2) {
	return number1 / number2;
};

var number1 = parseInt(prompt("enter a number:"));
var number2 = parseInt(prompt("enter another number:"));

var BMI = function (kg, meters) {
	return kg/Math.pow(meters,2);
};

var kg = parseFloat(prompt("enter a weight in kg:"));
var meters = parseFloat(prompt("enter a height in meters:"));

alert(BMI(kg, meters));


var toCelsius = function (farenheit) {
	return (farenheit - 32) *5/9
};

var farenheit = parseFloat(prompt("enter temperature in celsius"));

alert(toCelsius(farenheit))
