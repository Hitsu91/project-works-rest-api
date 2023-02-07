import { prop } from '@typegoose/typegoose';
import { getModelForClassOfCollection } from '../../utils/model-for-class-collection';

export class Ingredient {
  @prop({ required: true })
  name: string;

  @prop({ default: false })
  isAllergen: boolean;

  @prop({ default: false })
  isVegan: boolean;
}

const makeIngredientModel = (collectionName: string) =>
  getModelForClassOfCollection(Ingredient, collectionName);

export default makeIngredientModel;
