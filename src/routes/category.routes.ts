import express from 'express';
import {
  addCategoryHandler,
  deleteCategoryHandler,
  getCategoriesHandler,
  getCategoryByIdHandler,
  updateCategoryHandler,
} from '../controllers/category.controller';

import { collectionCheckMiddleware } from '../middleware/collection_check.middleware';
import { objectIdCheckMiddleware } from '../middleware/object_id_validator.middleware';
import validateResourse from '../middleware/validateResourse';
import { CategorySchema } from '../schema/category.schema';

const router = express.Router();
const validateCategories = validateResourse(CategorySchema);

router.get('/:col/category', collectionCheckMiddleware, getCategoriesHandler);

router.get(
  '/:col/category/:id',
  objectIdCheckMiddleware,
  collectionCheckMiddleware,
  getCategoryByIdHandler
);

router.post(
  '/:col/category',
  collectionCheckMiddleware,
  validateCategories,
  addCategoryHandler
);

router.put(
  '/:col/category/:id',
  objectIdCheckMiddleware,
  collectionCheckMiddleware,
  validateCategories,
  updateCategoryHandler
);

router.delete(
  '/:col/category/:id',
  objectIdCheckMiddleware,
  collectionCheckMiddleware,
  deleteCategoryHandler
);

export default router;
