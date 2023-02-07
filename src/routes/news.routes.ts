import express from 'express';
import {
  addNewsHandler,
  deleteNewsHandler,
  getNewsByIdHandler,
  getNewsHandler,
  updateNewsHandler,
} from '../controllers/news.controller';
import { collectionCheckMiddleware } from '../middleware/collection_check.middleware';
import { objectIdCheckMiddleware } from '../middleware/object_id_validator.middleware';
import validateResourse from '../middleware/validateResourse';
import { NewsSchema } from '../schema/news.schema';

const router = express.Router();
const validateNewss = validateResourse(NewsSchema);

router.get('/:col/news', collectionCheckMiddleware, getNewsHandler);

router.get(
  '/:col/news/:id',
  objectIdCheckMiddleware,
  collectionCheckMiddleware,
  getNewsByIdHandler
);

router.post(
  '/:col/news',
  collectionCheckMiddleware,
  validateNewss,
  addNewsHandler
);

router.put(
  '/:col/news/:id',
  objectIdCheckMiddleware,
  collectionCheckMiddleware,
  validateNewss,
  updateNewsHandler
);

router.delete(
  '/:col/news/:id',
  objectIdCheckMiddleware,
  collectionCheckMiddleware,
  deleteNewsHandler
);

export default router;
