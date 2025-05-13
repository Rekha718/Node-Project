const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Hello from Node.js!</h1>');
        res.write('<form action="/submit" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        return res.end();
    }
    if (req.url === '/submit' && req.method === 'POST') {
        const body = []
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
            fs.writeFile('usernames.txt', username,err=>{
                 res.statusCode = 302;
                 res.setHeader('Location', '/');
                 return res.end();
            });
            
        });
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>This is end of flow</h1>')
    res.end()
});

server.listen(3000);
