import { prop } from '@typegoose/typegoose';
import { getModelForClassOfCollection } from '../../utils/model-for-class-collection';

export class News {
  @prop({ required: true })
  title: string;

  @prop({ required: true })
  category: string;

  @prop({ required: true })
  imageUrl: string;

  @prop({ required: true })
  content: string;

  @prop({ required: true })
  pubblicationDate: string;

  @prop({ required: true })
  authorName: string;

  @prop({ type: String })
  tags: string[];
}

const makeNewsModel = (collectionName: string) =>
  getModelForClassOfCollection(News, collectionName);

export default makeNewsModel;
