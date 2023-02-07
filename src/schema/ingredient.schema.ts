import { boolean, object, string, TypeOf } from 'zod';

export const IngredientSchema = object({
  name: string({
    required_error: 'Name is required',
  }),
  isAllergen: boolean().optional(),
  isVegan: boolean().optional(),
});

export type PostIngredientInput = TypeOf<typeof IngredientSchema>;
