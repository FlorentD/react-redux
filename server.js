const express = require('express');
const compression = require('compression');
const logger = require('winston');
const app = express();

app.use(compression());
app.use(express.static(__dirname + '/dist'));

app.get('/info', (req, res) => {
  res.json({
    viewSystem: 'React',
    architecture: 'Redux',
  });
});

app.listen(8080, () => logger.info('App running on port 8080 o//'));
