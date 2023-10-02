// Exercise 1
/*
let userInput = prompt("Enter your age.");
if (userInput > 18) {
    console.log("You are old enough to drive.");
} else {
    console.log(`You are left with ${18 - userInput}`);
} // 1

let yourAge = prompt("Enter your age:");
if (24 < yourAge) {
    console.log(`You are ${Math.abs(24 - yourAge)} older than me.`);
} else if (24 > yourAge) {
    console.log(`I am ${Math.abs(24-yourAge)} older than you.`);
} else {
    console.log(`We are the same age.`)
} // 2

let a = 4;
let b = 3;
a > b 
    ? console.log(`${a} is greater than ${b}`)
    : console.log(`${a} is less than ${b}`) // 3


userInput = prompt("Enter a number:");
modulo = userInput % 2
switch (modulo) {
    case 0:
        console.log(`${userInput} is an couple number.`);
        break;
    case 1:
        console.log(`${userInput} is an odd number.`);
        break;
    default:
        console.log("Invalid value.");
} // 4

// Exercise

let mark = prompt("Enter your mark.");
if (mark >= 85 && mark <= 100) {
    console.log("A");
} else if (mark >= 70 && mark < 85) {
    console.log("B");
} else if (mark >= 60 && mark < 70) {
    console.log("C");
} else if (mark >=50 && mark < 60) {
    console.log("D");
} else if (mark >= 0 && mark < 50) {
    console.log("F");
} else {
    console.log("Invalid");
} // 1


let season = prompt("Enter season:");
switch (season.toLowerCase()) {
    case "autumn":
        console.log("September, October, November");
        break;
    case "winter":
        console.log("December, January, February");
        break;
    case "spring":
        console.log("March, April, May");
        break;
    case "summer":
        console.log("June, July, August");
        break;
    default:
        console.log("Invalid value.");
} // 2


let day = prompt("What is the day?", "Monday");

if (day.toLowerCase() == "monday" ||
    day.toLowerCase() == "thuesday" ||
    day.toLowerCase() == "wednesday" || 
    day.toLowerCase() == "friday" ||
    day.toLowerCase() == "thuesday") {
        console.log(`${day} is a workday.`);
    } else if (day.toLowerCase() == "saturday" ||
               day.toLowerCase() == "sunday") {
                console.log(`${day} is a weekend.`)
               } // 3
*/

// Exercise 3

const daysPerMonth = {
    "january": 31,   // Ocak
    "february": 28,   // Şubat
    "march": 31,   // Mart
    "april": 30,   // Nisan
    "may": 31,   // Mayıs
    "june": 30,   // Haziran
    "july": 31,   // Temmuz
    "august": 31,   // Ağustos
    "september": 30,   // Eylül
    "october": 31,  // Ekim
    "november": 30,  // Kasım
    "december": 31   // Aralık
  };

let enterMonth = prompt("Enter a month: ");

console.log(`${enterMonth} has ${daysPerMonth[enterMonth.toLowerCase()]} days.`) // 1

function daysInMonth(year, month) {
  const daysPerMonth = {
    1: 31,   // Ocak
    2: (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) ? 28 : 29, // Şubat (artık yıl hesaplama)
    3: 31,   // Mart
    4: 30,   // Nisan
    5: 31,   // Mayıs
    6: 30,   // Haziran
    7: 31,   // Temmuz
    8: 31,   // Ağustos
    9: 30,   // Eylül
    10: 31,  // Ekim
    11: 30,  // Kasım
    12: 31   // Aralık
  };

  if (month < 1 || month > 12) {
    return "Invalid month";
  }

  return daysPerMonth[month];
}

let year = prompt("Enter a year: ");
let month = prompt("Enter a month: ");

const result = daysInMonth(year, month);
if (result === "Invalid month") {
  console.log(result);
} else {
  console.log(`${year} yılının ${month}. ayında ${result} gün bulunmaktadır.`);
} // 2


 





