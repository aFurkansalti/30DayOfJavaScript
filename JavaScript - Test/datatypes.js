//let name = "Furkan";
let isHandsome = true;
let sport = undefined;
let car = null;

//console.log(typeof name);
console.log(typeof 3);
console.log(typeof 4.5);
console.log(typeof isHandsome);
console.log(typeof car);
console.log(typeof sport);

let word = 'JavaScript'
console.log(word)
word[0] = 'Y'
console.log(word[0])

//Number
const PI = Math.PI
console.log(PI)
console.log(Math.round(PI))
console.log(Math.round(9.81))
console.log(Math.floor(PI))
console.log(Math.ceil(PI))

console.log(Math.min(11, 2, -3))
console.log(Math.max(11, 2, -3))

const randNum = Math.round(Math.random()*10)
const randNum2 = Math.floor(Math.random()*11)

console.log(Math.random()*10)
console.log(randNum)
console.log(randNum2)

// String
const paragraph = "My name is Furkan, I live in Pendik. \
I am a \tsoftware developer\t and \nI am crazy about coding. \
I am 24 years old."

console.log(paragraph)

let name = "Furkan"
console.log(`Benim adım ${name}`)

let a = 5
let b = 3 
let sum = `Toplam; 
=>
a + b = ${a + b}`

console.log(sum)

console.log(`${a} is greater than ${b}: ${a > b}`)

let js = 'JavaScript'
console.log(js.length)
console.log(js[0] + js[js.length - 1])

word = 'furkan'
console.log(`
${word.toUpperCase()}
${word.toLowerCase()}
${word.substr(3, 2)}
${word.substring(2, 4)}
`)

word = 'furkan saltı'
console.log(`
${word.split(' ')}
`)

console.log('  furkan  '.split('').reverse().join('').trim())

let string = '30 Days Of JavaScript'
console.log(string.includes('Days'), string.includes('days'))








