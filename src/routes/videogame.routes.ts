import express from 'express';
import {
  addVideogameHandler,
  deleteVideogameHandler,
  getVideogameByIdHandler,
  getVideogameHandler,
  updateVideogameHandler,
} from '../controllers/videogame.controller';
import { collectionCheckMiddleware } from '../middleware/collection_check.middleware';
import { objectIdCheckMiddleware } from '../middleware/object_id_validator.middleware';
import validateResourse from '../middleware/validateResourse';
import { VideogameSchema } from '../schema/videogame.schema';

const router = express.Router();
const validateVideogames = validateResourse(VideogameSchema);

router.get('/:col/videogame', collectionCheckMiddleware, getVideogameHandler);

router.get(
  '/:col/videogame/:id',
  objectIdCheckMiddleware,
  collectionCheckMiddleware,
  getVideogameByIdHandler
);

router.post(
  '/:col/videogame',
  collectionCheckMiddleware,
  validateVideogames,
  addVideogameHandler
);

router.put(
  '/:col/videogame/:id',
  objectIdCheckMiddleware,
  collectionCheckMiddleware,
  validateVideogames,
  updateVideogameHandler
);

router.delete(
  '/:col/videogame/:id',
  objectIdCheckMiddleware,
  collectionCheckMiddleware,
  deleteVideogameHandler
);

export default router;
