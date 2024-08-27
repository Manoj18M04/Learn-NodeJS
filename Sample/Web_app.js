const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("content-Type", "text/html");
    res.end("<p>Hello World!</p>");
})

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});