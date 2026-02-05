
import path from "path";
import http from "http";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  console.log(req.url);

  // PRODUCTS PAGE (SSR)
  if (req.url === "/products") {
    const apiRes = await fetch("https://dummyjson.com/products");
    const data = await apiRes.json();

    let productHTML = "";
    data.products.forEach(p => {
      productHTML += `
        <li>
          <h3>${p.title}</h3>
          <img src="${p.thumbnail}" width="150"/>
        </li>
      `;
    });

    const templatePath = path.join(__dirname, "index.html");
    let html = fs.readFileSync(templatePath, "utf-8");
// hydrate templete = templete +data = final html
    html = html.replace("{{products}}", productHTML);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
    return;
  }

  // CSS (STATIC FILE)- css is static browser request it seperatly
  if (req.url === "/style.css") {
    const cssPath = path.join(__dirname, "style.css");
    const css = fs.readFileSync(cssPath);

    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(css);
    return;
  }

  // FAVICON
  if (req.url === "/favicon.ico") {
    const iconPath = path.join(__dirname, "favicon.png");
    const icon = fs.readFileSync(iconPath);

    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(icon);
    return;
  }

  // DEFAULT ROUTE
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000/products");
});
