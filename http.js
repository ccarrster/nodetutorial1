const http = require('http');
const server = http.createServer((req, res)=>{
    res.write('Carrots');
    res.end();
});

server.listen('3000');