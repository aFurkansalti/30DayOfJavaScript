// Exercise 1

const emptyArray = Array(6);
const emptyArray2 = [];
console.log(emptyArray, emptyArray2); // 1

const numbers = [1, 2, 3, 4, 5]; // 2

console.log(numbers.length) // 3

console.log(numbers[0], numbers[((numbers.length - 1) / 2)], numbers[numbers.length - 1]); // 4

const mixedDataTypes = ["Furkan", 4, 3.14, true, NaN, undefined, [1, 2, 3], {1: "furkan", 2: "saltı"}];
console.log(mixedDataTypes.length); // 5

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]; // 6

console.log(itCompanies); // 7

console.log(itCompanies.length); // 8

const lastCompanie = itCompanies.length - 1;
console.log(itCompanies[0], itCompanies[lastCompanie / 2], itCompanies[lastCompanie]); // 9

for (let companie in itCompanies) {
    console.log(itCompanies[companie]);
} // 10
console.log("***")
for (let companie in itCompanies) {
    console.log(itCompanies[companie].toUpperCase());
} // 11
console.log("/******")
let thelastCompanie = itCompanies.pop();
let sixCompanies = itCompanies.join(", ");
console.log(itCompanies)
console.log(`${sixCompanies} and ${thelastCompanie} are big IT companies.`); 
itCompanies.push(thelastCompanie) // 12 

//let entrie = prompt("Enter your Index:");
let entrie = 5;
if (itCompanies[entrie] != undefined) {
    console.log(itCompanies[entrie]);
} else {
    console.log("company is not found");
} // 13

let moreThanOneO = [];
for (const companie in itCompanies) {
    let count = 0;
    for (const letter in itCompanies[companie]) {
        if (itCompanies[companie][letter] == "o") {
            count++;
        } 
    } 
    
    if (count == 2) {
        moreThanOneO.push(itCompanies[companie]);
    }
}

console.log(moreThanOneO); // 14

console.log(itCompanies.sort()); // 15

console.log(itCompanies.reverse()); // 16

let firstthree = itCompanies.slice(0, 3);
console.log(firstthree);
console.log(itCompanies) // 17

let lastthree = itCompanies.slice(itCompanies.length - 3, itCompanies.length);
console.log(lastthree); // 18


let middleCompanieOrCompanies
if (itCompanies.length % 2 != 0) {
    middleCompanieOrCompanies = itCompanies.slice(((itCompanies.length - 1) / 2), itCompanies.length / 2 + 1);
} else {
    middleCompanieOrCompanies = itCompanies.slice((itCompanies.length / 2 - 1), ((itCompanies.length - 1) / 2) + 2);
}
console.log(middleCompanieOrCompanies); // 19

console.log(itCompanies.shift(), itCompanies); // 20

console.log(itCompanies.splice((itCompanies.length / 2 - 1), 2), itCompanies); // 21

console.log(itCompanies.pop(), itCompanies) // 22

console.log(itCompanies.splice(0, itCompanies.length), itCompanies) // 23


// Exercise 2



// Exercise 3










