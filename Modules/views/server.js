
// creating node server 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((res, req) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'tex/plain');
    res.send('Hello world');
});

server.listen(port, hostname,() =>{
    console.log(`server running at http://${hostname}:${port}/`);
});

const { connectToDb, getDb } = require('./db')

// db connection 

connectToDb((err)=> {
    if(!err) {
        app.listen(3000, ()=> {
            console.log('listening for request at port 3000')
        })
        db = getDb()
    }
})
