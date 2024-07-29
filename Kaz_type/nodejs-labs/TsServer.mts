import * as http from "http";

const hostname: string = "127.0.0.1";
const port: number = 3000;

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
  }
);

server.listen(port, hostname, () => {
  console.log(
    `El servidor esta corriendo en la Url: http://${hostname}:${port}`
  );
});
