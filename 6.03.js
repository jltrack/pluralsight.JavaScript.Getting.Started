/* truthy is the opposite of falsy
falsy | truthy
false | Everything NOT falsy
0 | true
"" or " i.e. empty strings | 0.5
null | "O"
undefined | 
NaN
truthy:




if ("0") {
    showMessage('true');
}

//true shows up because "0" is a string

if (0) {
    showMessage('true');
}

//true does not show up because it's false

*/

if ( +(1.1 + 1.3).toFixed(2) !== 2.4) {
    showMessage('true');
}

// if 1.1 plus 1.3 but only to two spaces is not equal to 2.4 then show the message true. True doesn't show up because this facts is true. Without the .toFixed floating point arithmatic will make true show up because the addition of 1.1 and 1.3 will not equal 2.4

