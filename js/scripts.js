var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function (number1, number2) {
	return number1 - number2;
};

var multiply = function (number1, number2) {
	return number1 * number2;
}

var divide = function (number1, number2) {
	return number1 / number2;
};

$(document).ready(function() {
	$("form#calculate").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#input1").val());
		var number2 = parseInt($("#input2").val());
		var operator = $("input:radio[name=operator]:checked").val();
		var result;
		if (operator === "add") {
			result = add(number1, number2);
		} else if (operator === "subtract") {
			result = subtract(number1, number2);
		} else if (operator === "multiply") {
			result = multiply(number1, number2);
		} else if (operator === "divide") {
			result = divide(number1, number2);
		}
		
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
