import makeIngredientModel from '../model/ingredient.model';
import { PostIngredientInput } from '../schema/ingredient.schema';

const makeIngredientService = (collectionName: string) => {
  const IngredientModel = makeIngredientModel(collectionName);
  return {
    insertIngredient(input: Partial<PostIngredientInput>) {
      return IngredientModel.create(input);
    },
    getAllIngredients() {
      return IngredientModel.find();
    },
    updateIngredient(id: string, input: Partial<PostIngredientInput>) {
      return IngredientModel.findByIdAndUpdate(id, input);
    },
    deleteIngredient(id: string) {
      return IngredientModel.findByIdAndDelete(id);
    },
    findIngredientByName(name: string) {
      return IngredientModel.findOne({ name });
    },
  };
};

type IngredientService = ReturnType<typeof makeIngredientService>;

export { makeIngredientService, IngredientService };
