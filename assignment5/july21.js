
//Part A

bmi = (mass, height) =>
{
	if (height === '0')
		return 0;
	return mass / (height*height);
}

var bminumber1 = bmi(78, 1.69).toFixed(2); //used toFixed to round the decimal to two places
var bminumber2 = bmi(92, 1.95).toFixed(2);
console.log(`Peter's bmi is ${bminumber2} ,Lucas's bmi ${bminumber1} ,  true`);
console.log(`Peter's bmi is ${bminumber2} ,Lucas's bmi ${bminumber1} ,  false`);

//Part B
celciusToFarenheit = (celcius) =>
{
	return celcius*(9/5) + 32;
};
farenheitToCelcius = (farenheit) =>
{
	return (farenheit - 32) * (5/9);
}


//Part C
if (bminumber1 > bminumber2)
	console.log(`Peter's bmi ${bminumber2} ,Lucas's bmi ${bminumber1} , Lucas's BMI is higher than Peter's BMI`);
else	
	console.log(`Peter's bmi is ${bminumber2} ,Lucas's bmi ${bminumber1} , Peter's BMI is higher than Lucas's BMI`);

//Part D
var celcius = 32;
var farenheit = 89.60;
console.log(` ${celcius} celcius degrees is ${celciusToFarenheit(celcius).toFixed(2)} farenheit degrees`);
console.log(` ${farenheit} farenheit degrees is ${farenheitToCelcius(farenheit).toFixed(2)} celcius degrees`);