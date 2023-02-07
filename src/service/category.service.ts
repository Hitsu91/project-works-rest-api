import makeCategoryModel from '../model/category.model';
import { PostCategoryInput } from '../schema/category.schema';

const makeCategoryService = (collectionName: string) => {
  const Model = makeCategoryModel(collectionName);
  return {
    insert(input: Partial<PostCategoryInput>) {
      return Model.create(input);
    },
    getById(id: string) {
      return Model.findById(id);
    },
    getAll() {
      return Model.find();
    },
    update(id: string, input: Partial<PostCategoryInput>) {
      return Model.findByIdAndUpdate(id, input);
    },
    deleteById(id: string) {
      return Model.findByIdAndDelete(id);
    },
  };
};

type CategoryService = ReturnType<typeof makeCategoryService>;

export { makeCategoryService, CategoryService };
