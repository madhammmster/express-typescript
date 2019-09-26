import express, { Application } from 'express';
import logger from './utils/logger';
import bodyParser from 'body-parser';
import { initRoutes } from './routes';
import { initDatabaseConnection } from './db';
import { MongoClient } from 'mongodb';

const initApp = async () => {
  const app: Application = express();
  let mongoClient: MongoClient;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  initRoutes(app);

  try {
    mongoClient = await initDatabaseConnection() as MongoClient;
  } catch (error) {
    logger.error(error);
  }

  app.listen(3000, () => {
    logger.info('Example app listening on port 3000!');

    // logger.silly('silly');
    // logger.debug('debug');
    // logger.verbose('verbose');
    // logger.info('info');
    // logger.warn('warn');
    // logger.error('error');
  });

  process.on('exit', () => {
    mongoClient.close();
  })
}

initApp();


