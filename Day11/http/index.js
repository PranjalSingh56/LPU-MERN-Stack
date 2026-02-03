import http from "http";

const host = 'localhost';
const port = 3000;

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