import express, { Application } from 'express';
import logger from './utils/logger';
import bodyParser from 'body-parser';
import { initRoutes } from './routes';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

initRoutes(app);

app.listen(3000, () => {
  logger.info('Example app listening on port 3000!');

  logger.silly('silly');
  logger.debug('debug');
  logger.verbose('verbose');
  logger.info('info');
  logger.warn('warn');
  logger.error('error');
});