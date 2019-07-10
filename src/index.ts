import express, { Application } from 'express';
import logger from './utils/logger';

const app: Application = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, () => {
  logger.info('Example app listening on port 3000!');

  logger.silly('silly');
  logger.debug('debug');
  logger.verbose('verbose');
  logger.info('info');
  logger.warn('warn');
  logger.error('error');
});