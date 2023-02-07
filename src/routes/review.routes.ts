import express from 'express';
import {
  addReviewHandler,
  deleteReviewHandler,
  getReviewHandler,
  updateReviewHandler,
} from '../controllers/review.controller';
import { collectionCheckMiddleware } from '../middleware/collection_check.middleware';
import validateResourse from '../middleware/validateResourse';
import { ReviewSchema } from '../schema/review.schema';

const router = express.Router();
const validateReviews = validateResourse(ReviewSchema);

router.get('/:col/review', collectionCheckMiddleware, getReviewHandler);

router.post(
  '/:col/review',
  collectionCheckMiddleware,
  validateReviews,
  addReviewHandler
);

router.put(
  '/:col/review/:id',
  collectionCheckMiddleware,
  validateReviews,
  updateReviewHandler
);

router.delete(
  '/:col/review/:id',
  collectionCheckMiddleware,
  deleteReviewHandler
);

export default router;
