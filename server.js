const express = require('express');
const compression = require('compression');
const winston = require('winston');
const app = express();

winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
);

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

app.use(compression());
app.use(express.static(__dirname + '/dist'));

app.get('/info', (req, res) => {
  res.json({
    viewSystem: 'React',
    architecture: 'Redux',
  });
});

app.listen(8080, () => logger.info('App running on port 8080 o//'));
