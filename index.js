
const http = require('http');
const { url } = require('inspector');

const requestListener = function (req, res) {
  res.writeHead(200);
  console.log(req.url);
if (req.url=="/api/hello")


{


   //const randomn=Math.random()*20;
   const randomn = Math.trunc(Math.random()*100)+1;

res.end( 'The Random number between 1 and 100 is :            ' +randomn.toString());
}
else{
    res.end('Hello, World');
}
  
}

const server = http.createServer(requestListener);

server.listen(8080);
