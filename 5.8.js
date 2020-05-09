// Converting Strings and Numbers
// Also I am realizing the pluralsight export to notes as .csv is adding an escape notation \n new line so I can print on a single line what is in the IDE as multiple lines 🧐🕵️‍♂️

let amount = Number.parseFloat ("123.12A");
showMessage(amount);

/*
let amount = 123;\n\nshowMessage(amount);
let amount = 123;\namount = amount.toString();\nshowMessage(amount);
variable as a number and call amount.toString() 
let amount = 123;\namount = amount.toString();\nshowMessage(typeof amount);\n//prints 'string'
let amount = Number.parseFloat ("123.12");\nshowMessage(typeof amount);\n\n//prints 'number'
let amount = Number.parseFloat ("A123.12");\nshowMessage(amount);\n\n//prints 'NaN' for not a number because the A means JavaScript can't parse the string into a number
If you want to parse a string into a number ensure that the start of the string is a number.\n\nlet amount = Number.parseFloat ("123.12A");\nshowMessage(amount);\n\n/prints 123.12
*/
