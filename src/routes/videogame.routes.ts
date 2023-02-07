import express from 'express';
import {
  addVideogameHandler,
  deleteVideogameHandler,
  getVideogameHandler,
  updateVideogameHandler,
} from '../controllers/videogame.controller';
import { collectionCheckMiddleware } from '../middleware/collection_check.middleware';
import validateResourse from '../middleware/validateResourse';
import { VideogameSchema } from '../schema/videogame.schema';

const router = express.Router();
const validateVideogames = validateResourse(VideogameSchema);

router.get('/:col/videogame', collectionCheckMiddleware, getVideogameHandler);

router.post(
  '/:col/videogame',
  collectionCheckMiddleware,
  validateVideogames,
  addVideogameHandler
);

router.put(
  '/:col/videogame/:id',
  collectionCheckMiddleware,
  validateVideogames,
  updateVideogameHandler
);

router.delete(
  '/:col/videogame/:id',
  collectionCheckMiddleware,
  deleteVideogameHandler
);

export default router;
