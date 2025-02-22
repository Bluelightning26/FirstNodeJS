const http = require('http');
const port = 3000

const fs = require('fs');

const server = http.createServer
    ((req, res) =>
    {
//response goes here
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('index.html', function(error, data)
        {
            if (error){
                res.writeHead(404);
                res.write('error occurred!\n');
            }
            else {
                res.write(data);
                res.end();
            }

        })

        res.end();
       res.write('Hello Node World! \n');
       res.write('This is my first Node.js project!\n');
       res.write('Most people prefer web applications nowadays, ' +
           'and they are easier to deploy than projects in my main' +
           ' language of Java \n' +
           'Thus I am attempting to learn more about JavaScript and how it works\n\n');
       res.write('I have had node installed for a while now but am using it for the first time today (2/21/25)\n' +
           'Feel free to visit https://dhyans.xyz to learn more about my endeavors!\n\n\n');

           res.write('JavaScript was actually one of the first languages I learned... \n' +
               'Back in the day on Khan Academy I finished most of the JavaScript course \n' +
               'which I believe is in Processing.js\n\n\n\n\n\n');
           res.write('That\'s all for now!');



})

server.listen(port, function(error)
{
 if (error) {
     console.log('Oops, something went wrong', error);
 }  else {
     console.log('Server started on port' + port);
 }
})