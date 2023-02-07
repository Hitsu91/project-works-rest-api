import makeNewsModel from '../model/news.model';
import { PostNewsInput } from '../schema/news.schema';

const makeNewsService = (collectionName: string) => {
  const NewsModel = makeNewsModel(collectionName);
  return {
    insertNews(input: Partial<PostNewsInput>) {
      return NewsModel.create(input);
    },
    getAllNews() {
      return NewsModel.find();
    },
    getNewsById(id: string) {
      return NewsModel.findById(id);
    },
    updateNews(id: string, input: Partial<PostNewsInput>) {
      return NewsModel.findByIdAndUpdate(id, input);
    },
    deleteNews(id: string) {
      return NewsModel.findByIdAndDelete(id);
    },
    findNewsByName(name: string) {
      return NewsModel.findOne({ name });
    },
  };
};

type NewsService = ReturnType<typeof makeNewsService>;

export { makeNewsService, NewsService };
