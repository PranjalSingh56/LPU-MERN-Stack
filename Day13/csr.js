const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log("Request:", req.url);

  if (req.url === "/") {
    console.log("HTML REQUESTED")
    const html = fs.readFileSync("index.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }

  if (req.url === "/client.js") {
    console.log("JS REQUESTED");
    const js = fs.readFileSync("client.js");
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(js);
  }
});

server.listen(8080,()=>{console.log("Server running on http://localhost:8080/client.js")
});
