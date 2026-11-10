const http = require("http");

const port = Number(process.env.PORT) || 3000;
const message = "Hello From a Test App created via MCP";

const server = http.createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(message + "\n");
});

server.listen(port, () => {
  console.log(message);
  console.log(`Listening on port ${port}`);
});
