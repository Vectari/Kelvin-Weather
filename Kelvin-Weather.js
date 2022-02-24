const kelvin = 293;
// Constant kelvin value equal 293
const celsius = kelvin - 273;
// Constant celsius value equal kelvin - 273
let fahrenheit = celsius * (9/5) + 32;
// Fahrenheit equal celsius * (9/5) + 32 
fahrenheit = Math.floor(fahrenheit);
// When convert from Celsius to Fahrenheit you often get decimal numer. Use .floor() to round down
let newton = celsius * (33/100);
//Convert Celsius to Newton
newton = Math.floor(newton);
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);