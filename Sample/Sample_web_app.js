const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
    if(parsedUrl.pathname === "/") {
        res.writeHead(200, {"content-Type": "text/html"});
        res.write("<h1>Home Page</h1>");
        res.end();
    }
    else if(parsedUrl.pathname === "/about") {
        res.writeHead(200, {"content-Type": "text/html"});
        res.write("<h1>About Page</h1>");
        res.end();
    }
    else if(parsedUrl.pathname === "/contact") {
        res.writeHead(200, {"content-Type": "text/html"});
        res.write("<h1>Contact Page</h1>");
        res.end();
    }
    else {
        res.writeHead(404, {"content-Type": "text/html"});
        res.write("<h1>Page Not Found</h1>");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server listening on http://localhost:3000");
});