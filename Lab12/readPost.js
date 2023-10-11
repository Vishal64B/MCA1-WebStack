const fs = require('fs');
const path = require('path');

fs.readFile(
    path.join(__dirname, 'posts','blogPost.txt'), 'utf-8', (err,data) => {
        if (err) throw err;

        console.log(data);
        const content = Buffer.from(data);


        // console.log(content.toString()); 
        console.log(data);
    }
);