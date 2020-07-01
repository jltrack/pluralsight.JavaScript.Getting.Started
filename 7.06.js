
let key = 42;

function getSecretCode(value) {

    let keyGenerator = function() {
        let key = 12;
        console.log('in keyGenerator:', key);
        return key;
    }

    let code = value * keyGenerator();
    console.log(' in getSecretCode: ', key);
    return code;
}

let secretCode = getSecretCode(2);
showMessage(secretCode);

//variable is defined outside the function so it can be used
//using the same variable name twice, stay on top of the order and what's nested. When a function finishes executing, all of its local variables go away
