import { Request } from 'express';
import { CollectionParam, ServiceMap } from '../../utils/collections';
import { IngredientService, makeIngredientService } from './ingredient.service';
import { makeService } from './services-factory';

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

export { getIngredientService };
