const {Server} = require('http');

const server = new Server();

server.on('request', async (req /*http.IncomingMessage*/, res /*http.ServerResponse*/) => {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  // res.writeHeader(200);
  // res.flushHeaders();

  // res.write("hello")
  // res.write("world")
  req.pipe(res);
});

server.listen(3000);
