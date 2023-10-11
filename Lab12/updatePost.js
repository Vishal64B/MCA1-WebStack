const fs = require('fs');
const path = require('path');

fs.appendFile(
    path.join(__dirname, 'posts', 'blogPost.txt'), '\nMore data', (err,data) => {
        if(err) throw err;
        console.log('file content updated');
    }
);