// null and undefined
// each has one value

let saved;
showMessage(saved);
console.log(saved);

// returned 'undefined' in the log

let saved = 10;
saved = null;
showMessage(saved);
console.log(saved);

// returned 'null' in the console and nothing shows in the browser
// JavaScript sets value to undefined when uninitalized but a programmer will set values to null as best practice
// use null when you want to wipe out the value of a variable, don't use undefined. that way you can differentiate between JavaScript doing it or a developer doing it
