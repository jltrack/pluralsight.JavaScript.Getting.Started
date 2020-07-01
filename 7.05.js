function getSecretCode(value) {
    let code = value * 42;
    return code;
}

console.log(getSecretCode(2));
//84


function getSecretCode(value) {
    let code = value * 42;
    return code;
}

let secretCode = getSecretCode(2);
showMessage(secretCode);

//two lines of code is cleaner
