import { object, string, TypeOf } from 'zod';

export const CategorySchema = object({
  name: string({
    required_error: 'Name is required',
  }),
});

export type PostCategoryInput = TypeOf<typeof CategorySchema>;
