import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

const objectIdCheckMiddleware = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  if (isValidObjectId(id)) {
    return next();
  }
  return res.status(400).send({ error: 'Not a valid id' });
};

export { objectIdCheckMiddleware };
