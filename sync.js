const { readFileSync, writeFileSync } = require('fs');
// const path = require('path');
// const filepath = path.join(__dirname, 'content', 'text.txt');
// const first = readFileSync(filepath, 'utf8');
const first = readFileSync('./content/text.txt', 'utf-8')
console.log(first);
