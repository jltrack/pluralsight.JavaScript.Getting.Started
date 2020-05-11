if (5 === 5) {
    console.log('Yes');
}

// codeblock is the code between parentheses

if (5 > 10) {
    console.log('No');
}

if (5 >= 5) {
    console.log('Yup');
}

// Console element will print both Yes and Yup in this series

let state = 'Fl';
let taxPercent = 0;

if (state === 'Fl') {
    taxPercent = 7;
}
console.log (taxPercent); 

//7 is printed

let state = 'Fl';
let taxPercent = 7;

if (state !== 'Fl') {
    taxPercent = 0;
}
console.log(taxPercent);

//error shows when this whole series is printed i.e. Uncaught SyntaxError: Identifier 'state' has already been declared
// !== checks for an inequality

// using just the code below, the word discounted shows instead of 'Get a grip'
let price = 20;
if (price > 15) {
    showMessage('discounted');
}
