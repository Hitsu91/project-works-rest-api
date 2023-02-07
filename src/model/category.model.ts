import { prop } from '@typegoose/typegoose';
import { getModelForClassOfCollection } from '../../utils/model-for-class-collection';

export class Category {
  @prop({ required: true })
  name: string;
}

const makeCategoryModel = (collectionName: string) =>
  getModelForClassOfCollection(Category, collectionName);

export default makeCategoryModel;
