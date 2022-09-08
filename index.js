
const http = require('http');

const requestListener = function (req, res) {
    //res.setHeader('Content-Type', 'application/json');
    //res.writeHead(200);

  console.log(req.url);
  if (req.url=="/api/hello") {

    var words = ['Rock', 'Paper', 'Scissors'];
    var number = Math.floor(Math.random() * words.length);
    var output = {
      "word":words[number]
    };
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(output));
  }
  else {
    res.end('Hello, World');}
}

const server = http.createServer(requestListener);
server.listen(8080);

    //const randomn=Math.random()*20;
    //const randomn = Math.trunc(Math.random()*100)+1;
    //var things = ['Rock', 'Paper', 'Scissor'];
    //var thing = things[Math.floor(Math.random()*things.length)];
    //alert('The computer chose:' + thing);

    //var c = "Rock";
    //var d = "Paper";
    //var e = "Scissors";
    //var thing = window['cde'.charAt(Math.floor(Math.random()*3))];
    //document.write('The computer chose: ' + thing);

    

    