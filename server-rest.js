const restify = require('restify');

const server = restify.createServer();
server.use(restify.plugins.gzipResponse());

server.get('/api/', (req, res, next) => {
  res.json({ api: 'test' });
  next();
});

server.get(
  '*',
  restify.plugins.serveStatic({
    directory: `${__dirname}/dist`,
    default: 'index.html',
  })
);

server.listen(process.env.PORT || 8080, () =>
  console.log(`${server.name} is listening at ${server.url}`)
);
