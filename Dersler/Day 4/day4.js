let num = prompt('Enter number');
switch(true) {
    case num > 0:
        console.log('Number is positive');
        break;
    case num == 0:
        console.log('Number is zero');
        break;
    case num < 0:
        console.log('Number is negative');
        break;
    default:
        console.log('Entered value was not a number.');
}

let isRaining = true;
isRaining 
    ? console.log(`You need a rain coat.`)
    : console.log(`You need for a rain coat.`)