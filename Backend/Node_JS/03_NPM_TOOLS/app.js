const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('<h1>Hello World</h1>')
        res.end()
    }
});
const PORT = 3001;
server.listen(PORT, () => {
console.log(`Server running on address http://localhost: ${PORT}`);
});