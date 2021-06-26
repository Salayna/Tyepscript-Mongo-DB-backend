/**
 * @author  Salayna
 * @date  25/06/2021 23:21
 * @version 1.0
 */

import * as dotenv from "dotenv";
import mongoose, {} from 'mongoose';
import { logger } from './logger.config';
dotenv.config();

class Connection {
  constructor(){
      const url = process.env.MONGODB_URI;
      logger.info(`Connecting on the following URI: ${url}`);
      mongoose.Promise = global.Promise;
      mongoose.set('useNewUrlParser', true);
      mongoose.set('useFindAndModify', false);
      mongoose.set('useCreateIndex', true);
      mongoose.set('useUnifiedTopology', true);
      mongoose.connect(url || '');
  }
}
export default new Connection();