// == JS attempts to convert types 
/*
if (1 == "1") {
    showMessage('true');
}
else {
    showMessage('false');
}

// this shows message true because the "1" was converted from a string into a number
*/
if (1 === "1") {
    showMessage('true');
}
else {
    showMessage('false');
}

// this shows message false because the "1" string is not strictly equal to the number 1
