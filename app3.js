const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

//const wordCount = content.split(' ');

// const reactWordCount = wordCount.filter( word => /react/gi.test(word)).length;

// const reactWordCountMatch = wordCount.filter( word => word.match(/react/gi)).length;

// console.log("Total React Word: ", reactWordCount);
// console.log("Total React Word Match: ", reactWordCountMatch);

const reactWordCount = content.match(/react/ig && []).length;

console.log("Total React Word: ", reactWordCount);