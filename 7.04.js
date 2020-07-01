function showMessage(message) {
    console.log(message);
}

showMessage('First Message');
showMessage('Second Message');

function showMessages(message, anotherMessage) {
    console.log(message, anotherMessage);
}

showMessages('First Message', 'Second Message');

/*
First Message
Second Message
First Message Second Message
*/

let myFunction = function (message, firstName) {
    console.log(message);
    console.log(firstName);
}

myFunction('Hello');

/*
First Message
Second Message
First Message Second Message
Hellow
undefined
*/
