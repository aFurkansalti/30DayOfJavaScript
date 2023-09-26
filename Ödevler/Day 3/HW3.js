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

console.log(typeof 10 == 10) // 2

console.log(parseInt(9.8) == 10); // 3

console.log("Hello World!", 3, [1,2,3]) // truthy
console.log("", NaN, undefined) // falsy  ->  4


