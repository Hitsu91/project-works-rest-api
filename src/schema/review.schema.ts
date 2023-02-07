import { number, object, string, TypeOf } from 'zod';

export const ReviewSchema = object({
  title: string({
    required_error: 'Title is required',
  }),
  publicationDate: string({ required_error: 'Publication Date is required' }),
  content: string({
    required_error: 'Content is required',
  }),
  score: number(),
  reviewerName: string({
    required_error: 'Name of Reviewer is required',
  }),
  imageUrls: string().array().optional(),
});

export type PostReviewInput = TypeOf<typeof ReviewSchema>;
