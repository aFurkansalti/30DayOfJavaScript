// date

const date = new Date()

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDay(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayName = date.getDay();

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

let humanReadableDate = `${day} ${months[month]} ${year}, ${days[day]}, ${hour}:${minute}:${second}`
console.log(humanReadableDate)
