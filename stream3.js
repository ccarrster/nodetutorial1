const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('example2.txt.gz');
const writeStream = fs.createWriteStream('example3.txt');
readStream.pipe(gunzip).pipe(writeStream);