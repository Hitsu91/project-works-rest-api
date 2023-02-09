require('dotenv').config();
import config from 'config';
import cors from 'cors';
import express from 'express';
import connectToDb from '../utils/connect_to_db';
import log from '../utils/logger';

import loggerMiddleware from './middleware/logger_middleware';
import router from './routes';

const app = express();

app.use(cors());

app.get('/', (req, res) => res.json({ status: 'ok' }));

app.use(express.json());
app.use(loggerMiddleware);

app.use('/api/v1', router);

const port = config.get<number>('port');
app.listen(port, () => {
  log.info(`App running at port: ${port}`);
  connectToDb();
});
