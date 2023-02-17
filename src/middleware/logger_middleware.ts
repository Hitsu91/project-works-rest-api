import { NextFunction, Request, Response } from 'express';
import log from '../../utils/logger';

const loggerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  log.info(`Request at ${req.path} from ${req.ip} [${req.ips.join(', ')}]`);
  return next();
};

export default loggerMiddleware;
