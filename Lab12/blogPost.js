const fs = require('fs')

fs.readFile('Sample.txt', 'utf-8', (err, data) => {
    console.log(data);
})