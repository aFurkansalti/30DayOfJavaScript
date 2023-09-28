// Exercise 1
/*
let firstname = "Furkan",
    lastname = "Saltı",
    country = "Turkey",
    city = "İstanbul",
    age = 24,
    isMarried = false
    year = 2023;

console.log(typeof firstname === "string",
    typeof lastname == 'number',
    typeof country == undefined,
    typeof city == null,
    typeof age == 'number',
    typeof isMarried == 'boolean',
    typeof year === typeof 1
)  // 1
*/
console.log(`10` === 10  ) // 2

console.log(parseInt(9.8) == 10); // 3

console.log("Hello World!", 3, [1,2,3]) // truthy
console.log("", NaN, undefined) // falsy  ->  4


4 > 3 // true
4 >= 3 // true
4 < 3 // false
4 <= 3 // false 
4 == 4 // true
4 === 4 // true
4 != 4 // false
4 !== 4 // false
4 != '4' // false
4 == '4' // true
4 === '4' // false

if ("python".length - "jargon".length) {
    console.log("Statement is truthy");
} else {
    console.log("Statement is falsy");
} // 5


4 > 3 && 10 < 12 // true
4 > 3 && 10 > 12 // false
4 > 3 || 10 < 12 // true
4 > 3 || 10 > 12 // true
!(4 > 3) // false
!(4 < 3) // true
!(false) // true
!(4 > 3 && 10 < 12) // false
!(4 > 3 && 10 > 12) // true
!(4 === '4') // true
console.log(`dragon`.includes("on") && `phyton`.includes("on")); // 6


const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`);
console.log(date.getDay());
console.log(`${date.getHours()}:${date.getMinutes()}`);
const millisecondsSince1970 = date.getTime(); // 1 January 1970 is default starting date. 
const secondsSince1970 = Math.floor(millisecondsSince1970 / 1000);
console.log(`Seconds since January 1, 1970: ${secondsSince1970}`); // 7


// Exercise 2
/*
let base = prompt("Enter base", 1);
let weight = prompt("Enter height", 1);
let triangleArea = 0.5 * base * weight;
console.log(`The area of the triangle is ${triangleArea}`); // 1

let sideA = prompt("Enter side A", 1);
let sideB = prompt("Enter side B", 2);
let sideC = prompt("Enter side C", 3);
let trianglePerimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
console.log(`The perimeter of the tringle is ${trianglePerimeter}`); // 2

let sideD = prompt("Enter side D", 1);
let sideE = prompt("Enter side E", 1);
let rectangleArea = sideD * sideE;
console.log(`The area of the rectangle is ${rectangleArea}`); // 3

let radius = prompt("Enter the radius of the circle", "1");
let circleArea = Math.PI * radius * radius;
let circleCircumference = 2 * Math.PI * radius; 
console.log(`The area of the circle is ${circleArea} and the circumference of the circle is ${circleCircumference}`); // 4
*/
let x = 0;
let y_intercept = 2*x - 2;

let y = 0;
let x_intercept = (y + 2) / 2;
let slope_5 = Math.abs(y_intercept / x_intercept);

console.log(`Formula: y = 2*x - 2
x-intercept: ${x_intercept}
y-intercept: ${y_intercept}
slope: ${slope_5}`) // 5


let x_1 = 2, y_1 = 2;
let x_2 = 6, y_2 = 10;
let slope_6 = (y_2 - y_1) / (x_2 - x_1);
console.log(`The slope between point (${x_1 + `,` + y_1}) and point (${x_2 + `,` + y_2}) is ${slope_6}`); // 6


if (slope_5 > slope_6) {
    console.log("slope_5 is bigger.");
} else {
    console.log("slope_6 is bigger.");
} // 7



for (let i = -9; i <= 9; i++) {
    let a = i;
    let b = a*a + 6*a + 9;
    if (b === 0) {
        console.log(`b is 0 when a equal to ${a}`);
    }
} // 8
/*
let hours = prompt("Enter hours:", 1);
let ratePerHour = prompt("Enter rate per hour:", 1);
console.log(`Your weekly earning is ${hours * ratePerHour}`); // 9
*/
let nameLength = "Furkan".length;
let isnamelong = nameLength > 7
console.log(isnamelong ? "name is long" : "name is short") // 10

let firstname = "Furkan";
let lastname = "Saltı";
let isFirstnameLong = firstname.length > lastname.length;
console.log(isFirstnameLong ? "Your first name, Furkan is longer than your family name, Saltı" :
"Your first name, Furkan is shorter than your family name, Saltı"); // 11

let myAge = 250;
let yourAge = 25
console.log((myAge > yourAge) ?
    `I am ${myAge - yourAge} years older than you.` :
    "I am not older than you."); // 14

let birthYear = prompt("Enter birth year: ", "1999");
let userAge = 2023 - birthYear;
console.log((userAge >= 18 ? 
    `You are ${userAge}. You are old enough to drive` : 
    `You are ${userAge}. You will be allowed to drive after ${18 - userAge} year.`)); // 13

let livedYears = prompt("Enter number of years you live:", "24");
let leapYear = livedYears / 4;
let livedSeconds = (livedYears-leapYear)*365*24*60 + leapYear*366*24*60;
console.log(`You lived ${livedSeconds} seconds.`); // 14

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDay(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayName = date.getDate();

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

console.log(`${day}-${month}-${year} ${hour}:${minute}`); 

// Exercise 3

if (toString(hour).length == 1 && toString(minute).length == 1) {
    console.log(`${day}-${month}-${year} 0${hour}:0${minute}`); 
} else if (toString(minute).length == 1) {
    console.log(`${day}-${month}-${year} ${hour}:0${minute}`); 
} else if (toString(hour).length == 1) {
    console.log(`${day}-${month}-${year} 0${hour}:${minute}`);
}; // 1
























