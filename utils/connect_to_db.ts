import config from 'config';
import mongoose from 'mongoose';
import log from './logger';

mongoose.set('strictQuery', false);

async function connectToDb() {
  const dbUri = config.get<string>('dbUri');
  try {
    await mongoose.connect(dbUri);
    log.info('Connected to DB');
  } catch (e) {
    log.error('Ops', e);
    process.exit(1);
  }
}

export default connectToDb;
