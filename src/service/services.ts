import { Request } from 'express';
import {
  CollectionParam,
  Collections,
  CollectionType,
} from '../../utils/collections';
import { IngredientService, makeIngredientService } from './ingredient.service';

type ServiceMap<ServiceT> = { [key in CollectionType]: ServiceT };

const ingredientServices: ServiceMap<IngredientService> = makeService(
  makeIngredientService
);

function getIngredientService(
  req: Request<CollectionParam>
): IngredientService {
  return getService(req, ingredientServices);
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

export { getIngredientService, ServiceMap };
