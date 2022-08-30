import http from "http";

const server = http.createServer((req, res) => {
  res.end(`Hello from the server. The time ${new Date().toISOString()}`);
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log("System Listening at :%s", port);
});
