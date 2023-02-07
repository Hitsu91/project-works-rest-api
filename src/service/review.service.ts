import makeReviewModel from '../model/review.model';
import { PostReviewInput } from '../schema/review.schema';

const makeReviewService = (collectionName: string) => {
  const ReviewModel = makeReviewModel(collectionName);
  return {
    insertReview(input: Partial<PostReviewInput>) {
      return ReviewModel.create(input);
    },
    getAllReview() {
      return ReviewModel.find();
    },
    getReviewById(id: string) {
      return ReviewModel.findById(id);
    },
    updateReview(id: string, input: Partial<PostReviewInput>) {
      return ReviewModel.findByIdAndUpdate(id, input);
    },
    deleteReview(id: string) {
      return ReviewModel.findByIdAndDelete(id);
    },
    findReviewByName(name: string) {
      return ReviewModel.findOne({ name });
    },
  };
};

type ReviewService = ReturnType<typeof makeReviewService>;

export { makeReviewService, ReviewService };
