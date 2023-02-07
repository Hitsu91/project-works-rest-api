import express from 'express';
import {
  addReviewHandler,
  deleteReviewHandler,
  getReviewByIdHandler,
  getReviewHandler,
  updateReviewHandler,
} from '../controllers/review.controller';
import { collectionCheckMiddleware } from '../middleware/collection_check.middleware';
import { objectIdCheckMiddleware } from '../middleware/object_id_validator.middleware';
import validateResourse from '../middleware/validateResourse';
import { ReviewSchema } from '../schema/review.schema';

const router = express.Router();
const validateReviews = validateResourse(ReviewSchema);

router.get('/:col/review', collectionCheckMiddleware, getReviewHandler);

router.get(
  '/:col/review/:id',
  objectIdCheckMiddleware,
  collectionCheckMiddleware,
  getReviewByIdHandler
);

router.post(
  '/:col/review',
  collectionCheckMiddleware,
  validateReviews,
  addReviewHandler
);

router.put(
  '/:col/review/:id',
  objectIdCheckMiddleware,
  collectionCheckMiddleware,
  validateReviews,
  updateReviewHandler
);

router.delete(
  '/:col/review/:id',
  objectIdCheckMiddleware,
  collectionCheckMiddleware,
  deleteReviewHandler
);

export default router;
