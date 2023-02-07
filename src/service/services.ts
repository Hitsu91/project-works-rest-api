import { Request } from 'express';
import {
  CollectionParam,
  Collections,
  CollectionType,
} from '../../utils/collections';
import { CategoryService, makeCategoryService } from './category.service';
import { makeNewsService, NewsService } from './news.service';
import { makeReviewService, ReviewService } from './review.service';
import { makeVideogameService, VideogameService } from './videogame.service';

type ServiceMap<ServiceT> = { [key in CollectionType]: ServiceT };

const newsServices: ServiceMap<NewsService> = makeService(makeNewsService);
const categoryServices: ServiceMap<CategoryService> =
  makeService(makeCategoryService);
const videogamesServices: ServiceMap<VideogameService> =
  makeService(makeVideogameService);
const reviewsService: ServiceMap<ReviewService> =
  makeService(makeReviewService);

function getNewsService(req: Request<CollectionParam>): NewsService {
  return getService(req, newsServices);
}

function getCategoryService(req: Request<CollectionParam>): CategoryService {
  return getService(req, categoryServices);
}

function getVideogameService(req: Request<CollectionParam>): VideogameService {
  return getService(req, videogamesServices);
}

function getReviewService(req: Request<CollectionParam>): ReviewService {
  return getService(req, reviewsService);
}

function getService<T>(
  req: Request<CollectionParam>,
  serviceMap: ServiceMap<T>
) {
  const col = req.params.col;
  const service = serviceMap[col];
  return service;
}

function makeService<T>(fn: (collectionName: string) => T): ServiceMap<T> {
  const service = {} as any;

  for (let coll of Collections) {
    service[coll] = fn(coll);
  }

  return service as ServiceMap<T>;
}

export {
  getNewsService,
  getCategoryService,
  getVideogameService,
  getReviewService,
  ServiceMap,
};
