const { readFile, writeFile } = require('fs');
readFile('./content/text.txt', 'utf-8', (err, result) => {
    if (err) {
        return console.log(err);
    }
    let first = result;
    console.log(first);
    readFile('./content/text2.txt', 'utf-8', (err, result) => {
        if (err) {
            return console.log(err);
        }
        let second = result;
        console.log(second);
        writeFile('./content/text3.txt', 'This is third text file', { flag: "a" }, (err, result => {
            if (err) {
                return console.log(err);
            } let third = result
            console.log(third);
        }))
    })
})
