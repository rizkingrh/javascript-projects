const http = require('http');

const requestListener = (request, response) => {
    response.statusCode = 404;
};

const server = http.createServer (requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
})