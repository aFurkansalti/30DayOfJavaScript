// Exercise 1

let challenge = '30 Days Of JavaScript' // 1
console.log(challenge) // 2 
console.log('challange\'s length = ', challenge.length) // 3
console.log(challenge.toUpperCase()) // 4   
console.log(challenge.toLowerCase()) // 5
console.log(challenge.substring(0,1)) // 6
console.log(challenge.substring(3)) // 7
console.log(challenge.includes('Script')) // 8
console.log(challenge.split()) // 9
console.log(challenge.split(' ')) // 10
let programs = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(programs.split(', ')) // 11
console.log(challenge.replace('JavaScript', 'Python')) // 12
console.log(challenge.charAt(15)) // 13
console.log(challenge.charCodeAt(challenge.search('J'))) // 14
console.log(challenge.indexOf('a')) // 15
console.log(challenge.lastIndexOf('a')) // 16
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because')) // 17
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because')) // 18
console.log('You cannot end a sentence with because because because is a conjunction'.search('because')) // 19
console.log('   30 Days Of JavaScript   '.trim()) // 20
console.log(challenge.startsWith('30')) // 21
console.log(challenge.endsWith('cript')) // 22
console.log(challenge.match(/a/gi)) // 23
console.log('30 Days of'.concat(' ', 'JavaScript')) // 24
console.log(challenge.repeat(2)) //25

// Exercise 2

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another. \
') // 1 
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
) // 2

let ten = typeof 10
let tenstr = typeof '10'
if (ten == tenstr) {
    console.log("They are equal.")
} else {
    ten = typeof 10
    console.log(ten)
} // 3

let isqeual = parseFloat('9.8') == 10

if (isqeual) {
    console.log('They are alredy equal')
} else {
    console.log(Math.ceil(parseFloat(9.8))) 
} // 4

let textPhyton = 'python'
let textJargon = 'jargon'

console.log(textPhyton.search('on'))
console.log(textJargon.search('on')) // 5

let text2 = 'I hope this course is not full of jargon'
console.log(text2.search('jargon')) // 6
console.log(Math.floor(Math.random()*101)) // 7
console.log(Math.ceil(Math.random()*50) + 50) // 8
console.log(Math.floor(Math.random()*256)) // 9
console.log('JavaScript'[Math.floor(Math.random()*10)]) // 10
console.log('1 1 1 1 1\n\
2 1 2 4 8\n\
3 1 3 9 27\n\
4 1 4 16 64\n\
5 1 5 25 125') // 11

console.log('You cannot end a sentence with b'.length)
console.log('You cannot end a sentence with because because because'.length -1)
console.log('You cannot end a sentence with because because because is a conjunction'.length - 1)

let text3 = 'You cannot end a sentence with because because because is a conjunction'
console.log(text3.substr(0, 31) + text3.substr(53)) // 12


// Exercise 3

let sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let wordstemp = sentence.split('');
console.log(wordstemp); 
/*
for (let word of wordstemp) {
    if (word === '.') {
        word.replace('.', '');
    }
}
word, reference type olmadığı için değeri temelli değiştirmiyor.
*/
for (let i = 0; i < wordstemp.length; i++) {
    if (wordstemp[i] === '.') {
        wordstemp[i] = '';
    }
}
console.log(wordstemp)
sentence = wordstemp.join('')
console.log(sentence)
// sentence = sentence.replace('.', '');
// sentence = sentence.replace('.', '');
//console.log(sentence);

const words = sentence.split(' ') 
let count = 0;

console.log(words)

for (const word of words) {
  if (word === 'love') {
    count++;
  }
}

console.log(`The word "love" appears ${count} times in the sentence.`); // 1

sentence = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentence.match(/because/gi)); // 2

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching`;

let wordsOfSentence = sentence.split(``);
for (let character = 0; character < wordsOfSentence.length; character++) {
    if (wordsOfSentence[character] === `%` || wordsOfSentence[character] === `$` || wordsOfSentence[character] === `@` ||
    wordsOfSentence[character] === `.` || wordsOfSentence[character] === `;` || wordsOfSentence[character] === `#` || 
    wordsOfSentence[character] === `!` || wordsOfSentence[character] === `?` || wordsOfSentence[character] === `&`) 
    {
        wordsOfSentence[character] = ``;
    }
}
console.log(wordsOfSentence)
let tempSentence = wordsOfSentence.join(``);

wordsOfSentence = tempSentence.split(` `);

console.log(wordsOfSentence)
/*
for (let word in wordsOfSentence) {
    let count = 0;
    for (let word2 in wordsOfSentence) {
        if (word == word2) {
            count++;
        }
    }
    console.log(`The word ${word} is used ${count} times in this sentence`);
}
*/
let countMaxElement = 0;
for (let i = 0; i < wordsOfSentence.length; i++) {
    let count = 0;
    
    for (let j = 0; j < wordsOfSentence.length; j++) {
        if (wordsOfSentence[i] == wordsOfSentence[j]) {
            count++;
        }
    }
    if (count >= countMaxElement) {
        countMaxElement = count;
    }
}
// console.log(countMaxElement)
let maxElementS = [];
let array = [''];
for (let i = 0; i < wordsOfSentence.length; i++) {
    let count = 0;
    
    for (let j = 0; j < wordsOfSentence.length; j++) {
        if (wordsOfSentence[i] == wordsOfSentence[j]) {
            count++;
        }
    }
    
    let isAvailable;
    for (let k = 0; k < array.length; k++) {
        if (array[k] === wordsOfSentence[i]) {
            isAvailable = false;
            break;
        } else {
            isAvailable = true;
        }
    }
    // console.log(isAvailable)
    if (isAvailable) {
        console.log(`The word "${wordsOfSentence[i]}" is used ${count} times in this sentence`);
    }
    array.push(wordsOfSentence[i]);
    if (count >= countMaxElement) {
        countMaxElement = count;
        maxElementS.push(wordsOfSentence[i]);
    } 
}
console.log(`En fazla olan elementler;`);
console.log(maxElementS)
// console.log(array)    // 3


annualIncome = (5000 + 15000)*12 + 10000;
console.log(`Yıllık geliri ${annualIncome} euro.`); // 4































