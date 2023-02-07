import { prop } from '@typegoose/typegoose';
import { getModelForClassOfCollection } from '../../utils/model-for-class-collection';

class ReviewedGame {
  @prop()
  id: string;

  @prop()
  name: string;
}

export class Review {
  @prop({ required: true })
  title: string;

  @prop({ required: true })
  publicationDate: string;

  @prop({ required: true })
  content: string;

  @prop({ required: true })
  score: number;

  @prop({ required: true })
  reviewerName: string;

  @prop({ type: String })
  imageUrls: string[];

  @prop({ _id: false })
  reviewedGame: ReviewedGame;
}

const makeReviewModel = (collectionName: string) =>
  getModelForClassOfCollection(Review, collectionName);

export default makeReviewModel;
