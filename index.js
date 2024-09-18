const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var { Readability } = require('@mozilla/readability');

var doc = new JSDOM("<body>Look at this cat: <img src='./cat.jpg'></body>", {
    url: "https://www.example.com/the-page-i-got-the-source-from"
});
let reader = new Readability(doc.window.document);
let article = reader.parse();

console.log( 'hello' );
console.log( 'world' )
