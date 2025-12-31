const fs = require('fs');

// reading files
// fs.readFile('./doc/blog-1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     } 
//     console.log(data.toString());
// });

// console.log('last line');


// writing files
// fs.writeFile('./doc/blog-1.txt', 'Hello, Ness!', () => {
//     console.log('file was written');
// });

// fs.writeFile('./doc/blog-2.txt', 'Hello, this is not Ness!', () => {
//     console.log('new file was written');
// });

//directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log('folder deleted');
}

// deleting files
if (fs.existsSync('./doc/deleteme.txt')) {
    fs.unlink('./doc/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}
