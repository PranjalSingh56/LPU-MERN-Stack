import http, { createServer } from "http";
/*
const server = http.createServer((req,res)=>{
    if(req.url("/")){
        res.end("Home Page")
    }else if(req.url("/about")){
        res.end("About Page")
    }else if(req.url("/contact")){
        res.end("Contact")
    }else{
        res.end("Page not found")
    }
})
server.listen(5000,()=>{
    console.log("Server running on port http://localhost:5000");
    
})
// netstat -ano | findstr: 3000
*/

/*
const server = http.createServer((req,res)=>{
    if(req.method === "GET"){
        res.end("Fetch Data")
    }else if(req.method === "POST"){
        res.end("Send Data")
    }else if(req.method === "PUT"){
        res.end("Update Data")
    }else if(req.method === "DELETE"){
        res.end("Delete Data")
    }else{
        res.end("Something went wrong")
    }
})
server.listen(3000,()=>{
    console.log("SERVER running at http://localhost:3000");
    
})
*/
/*
let users = [
  { id: 1, name: "Ankit" },
  { id: 2, name: "Rohit" }
];

function getRequestBody(req) {
  return new Promise((resolve) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      resolve(JSON.parse(body));
    });
  });
}

const server2 = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  // GET → Fetch all users
  if (req.url === "/users" && req.method === "GET") {
    res.end(JSON.stringify(users));
  }

  // POST → Create new user
  else if (req.url === "/users" && req.method === "POST") {
    const data = await getRequestBody(req);

    const newUser = {
      id: users.length + 1,
      name: data.name
    };

    users.push(newUser);
    res.end(JSON.stringify(newUser));
  }
  //PUT
  else if (req.url === "/users" && req.method === "PUT") {
    const data = await getRequestBody(req);

    const user = users.find((u)=>{u.id == data.id})
    if(!user){
        res.statusCode =404;
        res.end(JSON.stringify({message:"User Not Found"}))
        return;
    }
    user.name = data.name

    res.end(JSON.stringify(user));
  }
  //Delete
  else if (req.url === "/users" && req.method === "Delete") {
    const data = await getRequestBody(req);

    users = users.filter((u)=>{u.id !== data.id})
    res.end(JSON.stringify({message:"User Deleted"}))

  }

  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server2.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
*/

