
if (true) {
    let value = 'yes';
    showMessage('true')
}

console.log(value);

//home.js:7 Uncaught ReferenceError: value is not defined at home.js:7
//this doesn't work if you use var instead of let. by using let then it leaks outside of the code block instead of remaining encoded within the code block. let and const are the moves, go with those. don't use var
