const http = require("http");
const fs = require("fs");
var path = require("path");

const hostname = "localhost";
const port = 8000;
const home = fs.readFileSync("Signin.html");
const home1 = fs.readFileSync("index.html");
const register = fs.readFileSync("./register.html");
const ProductList = fs.readFileSync("./ProductList.html");
const SearchPage = fs.readFileSync("./SearchPage.html");
const contact = fs.readFileSync("./contact.html");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(home);
  } else if (req.url == "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(home1);
  } else if (req.url == "/register") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(register);
  } else if (req.url == "/ProductList") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(ProductList);
  } else if (req.url == "/SearchPage") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(SearchPage);
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(contact);
  } else if (req.url.match(".css$")) {
    var cssPath = path.join(__dirname, req.url);
    var fileStream = fs.createReadStream(cssPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res);
  } else if (
    req.url.match(".png$") ||
    req.url.match(".jpg$") ||
    req.url.match(".jpeg$")
  ) {
    var imagePath = path.join(__dirname, req.url);
    var fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/png" });
    fileStream.pipe(res);
  } else if (req.url.match(".ttf$")) {
    var fontPath = path.join(__dirname, req.url);
    var fileStream = fs.createReadStream(fontPath);
    res.writeHead(200, { "Content-Type": "font/ttf" });
    fileStream.pipe(res);
  } else if (req.url.match(".js$")) {
    var jsPath = path.join(__dirname, req.url);
    var fileStream = fs.createReadStream(jsPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/javascript" });
    fileStream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end("<h1>404 not found</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
