import { prop } from '@typegoose/typegoose';
import { getModelForClassOfCollection } from '../../utils/model-for-class-collection';

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
}

const makeReviewModel = (collectionName: string) =>
  getModelForClassOfCollection(Review, collectionName);

export default makeReviewModel;
