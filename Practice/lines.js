import fs from 'fs'; // File system module
let file = './applicationpage.html';
let filedata = fs.readFileSync(file, 'utf8');
let lines = filedata.split('\n');
let count = lines.length;
console.log("No of lines in applicationpage.html is",count);