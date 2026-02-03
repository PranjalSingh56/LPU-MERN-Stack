import http from "http";
import fs from "fs";
import path from "path";
const host = 'localhost';
const port = 4000;

// const server = http.createServer((req, res) => {
//     // res.setHeader('Content-Type', 'text/plain');
//     // res.writeHead(200);
//     res.writeHead(200, {'Content-Type': 'Application/json'})
//     res.write("Welcome to Node js")
//     res.end();
    
// });

// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });


/*
const server = http.createServer((req, res) => {
    const responseObj ={
    success:true,
    message:"USer Created",
    userId : 1232
}
    res.writeHead(200, {
        'Content-Type': 'Application/json',

    })
    res.end(JSON.stringify(responseObj));
    
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

*/


/*
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("index.html", "utf-8"));
});
server.listen(3001, () => {
    console.log("SERVER running at http://localhost:3001");
});
*/

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(fs.readFileSync("index.html", "utf-8"));
    }
    else if (req.url === "/style.css") {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(fs.readFileSync("style.css", "utf-8"));
    }
});

server.listen(3001, () => {
    console.log("SERVER running at http://localhost:3001");
});