import { NextFunction, Request, Response } from 'express';
import { CollectionParam, Collections } from '../../utils/collections';

const collectionCheckMiddleware = async (
  req: Request<CollectionParam>,
  res: Response,
  next: NextFunction
) => {
  const col = req.params.col;
  if (Collections.includes(col)) {
    return next();
  }
  return res.status(404).send({ error: 'Not found' });
};

export { collectionCheckMiddleware };
