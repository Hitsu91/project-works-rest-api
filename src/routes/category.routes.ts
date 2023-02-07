import express from 'express';
import {
  addCategoryHandler,
  deleteCategoryHandler,
  getCategoriesHandler,
  updateCategoryHandler,
} from '../controllers/category.controller';

import { collectionCheckMiddleware } from '../middleware/collection_check.middleware';
import validateResourse from '../middleware/validateResourse';
import { CategorySchema } from '../schema/category.schema';

const router = express.Router();
const validateCategories = validateResourse(CategorySchema);

router.get('/:col/category', collectionCheckMiddleware, getCategoriesHandler);

router.post(
  '/:col/category',
  collectionCheckMiddleware,
  validateCategories,
  addCategoryHandler
);

router.put(
  '/:col/category/:id',
  collectionCheckMiddleware,
  validateCategories,
  updateCategoryHandler
);

router.delete(
  '/:col/category/:id',
  collectionCheckMiddleware,
  deleteCategoryHandler
);

export default router;
