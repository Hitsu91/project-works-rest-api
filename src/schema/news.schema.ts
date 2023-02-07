import { object, string, TypeOf } from 'zod';

export const NewsSchema = object({
  title: string({
    required_error: 'Title is required',
  }),
  category: string({
    required_error: 'Category is required',
  }),
  imageUrl: string().optional(),
  content: string({ required_error: 'Content is required' }),
  publicationDate: string({ required_error: 'Publication Date is required' }),
  authorName: string({ required_error: 'Author name is required' }),
  tags: string().array().optional(),
});

export type PostNewsInput = TypeOf<typeof NewsSchema>;
