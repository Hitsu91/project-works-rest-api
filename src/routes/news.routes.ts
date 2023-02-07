import express from 'express';
import {
  addNewsHandler,
  deleteNewsHandler,
  getNewsHandler,
  updateNewsHandler,
} from '../controllers/news.controller';
import { collectionCheckMiddleware } from '../middleware/collection_check.middleware';
import validateResourse from '../middleware/validateResourse';
import { NewsSchema } from '../schema/news.schema';

const router = express.Router();
const validateNewss = validateResourse(NewsSchema);

router.get('/:col/news', collectionCheckMiddleware, getNewsHandler);

router.post(
  '/:col/news',
  collectionCheckMiddleware,
  validateNewss,
  addNewsHandler
);

router.put(
  '/:col/news/:id',
  collectionCheckMiddleware,
  validateNewss,
  updateNewsHandler
);

router.delete('/:col/news/:id', collectionCheckMiddleware, deleteNewsHandler);

export default router;
