// Chapter 4 Example – Node.js HTTP Server

const http = require("http");
const fs = require("fs");

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
        res.end("<h1>Home Page</h1><p>Welcome to Node.js Chapter 4</p>");
    }
    else if (req.url === "/about") {
        res.end("<h1>About Page</h1><p>This is the about section.</p>");
    }
    else if (req.url === "/user") {
        const userData = { name: "Mounika", course: "Node.js" };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(userData));
    }
    else if (req.url === "/file") {
        fs.readFile("sample.html", "utf8", (err, data) => {
            if (err) {
                res.end("Error loading file");
            } else {
                res.end(data);
            }
        });
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
    }
});

// Start server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
