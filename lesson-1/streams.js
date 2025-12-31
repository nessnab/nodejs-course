const fs = require('fs');

const readStream = fs.createReadStream('./doc/blog-3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./doc/blog-4.txt');

readStream.on('data', (chunk) => {
    console.log('---New Chunk---');
    console.log(chunk);
    writeStream.write('\n New added chunk \n');
    writeStream.write(chunk);
});

// piping
// readStream.pipe(writeStream);