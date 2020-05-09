let name = 'Andrea';
let message = `Hello 


${name}`;

showMessage(message);
console.log(message);

// for the Mozille doc with the Escape Notation table https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

/* The website shows Hello Andrea. The back tick ` is used.  
\" you can escape the quote " to make it show so if you want to say Hello "Andrea" and have those show you'd "\" Hello Andrea \"" but honestly give Andrea a break you can just say Hello Andrea without that shade.
The outside " " are the quote and the inside \" \" escape the " to make them part of the word
So if you want to put "World" you have to escape each " and make them work within the outer " "
so the order is " \" \" " to get a word with ""
mozilla developer network: operator precedence, upper case String, and search for the word escape to get "Escape notation"
"Hello \"World\"";
The "World" shows up on the website because the " " are escaped
\" double quote
\n new line
\t tab
 you can also use a `
but with the back tic you can use interpolation 
let name = 'Andrea';\nlet message = `Hello ${name}`;\n\nshowMessage(message);
that gives you Hello Andrea
let name = 'Andrea';\nlet message = `Hello \n\n\n${name}`;\n\nshowMessage(message);\nconsole.log(message);
If you want to see the space between Hello on line 2 and name on line 5, consol.log(message) to check in the Console tab on Developer Tools to see the \nHello\n\n\nAndrea
*/
