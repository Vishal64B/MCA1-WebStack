const fs = require('fs');
const path = require('path');

fs.unlink(path.join(__dirname, '/posts', 'blogPost.txt'), (err, data) => {
    if (err) throw err;

    console.log('file deleted');
}
);