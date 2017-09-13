var add = function(number1, number2) {
	return number1 + number2;
};

// var subtract = function (number1, number2) {
// 	return number1 - number2;
// };
//
// var divide = function (number1, number2) {
// 	return number1 / number2;
// };

$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1,number2);
		$("#output").text(result);
	});
});

// var BMI = function (kg, meters) {
// 	return kg/Math.pow(meters,2);
// };
//
// var kg = parseFloat(prompt("enter a weight in kg:"));
// var meters = parseFloat(prompt("enter a height in meters:"));


// var toCelsius = function (farenheit) {
// 	return (farenheit - 32) *5/9
// };

// var farenheit = parseFloat(prompt("enter temperature in celsius"));
