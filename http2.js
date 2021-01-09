const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Hello node');
        res.end();
    } else {
        res.write('Nope');
        res.end();
    }
});

server.listen('3000');