import { Request, Response } from 'express';
import { CollectionParam } from '../../utils/collections';
import log from '../../utils/logger';
import { Ingredient } from '../model/ingredient.model';
import { PostIngredientInput } from '../schema/ingredient.schema';
import { getIngredientService } from '../service/services';

export async function getIngredientsHandler(
  req: Request<CollectionParam>,
  res: Response<Ingredient[]>
) {
  const service = getIngredientService(req);
  const categories = await service.getAllIngredients();
  res.send(categories);
}

export async function addIngredientHandler(
  req: Request<CollectionParam, {}, PostIngredientInput>,
  res: Response<Ingredient[] | string>
) {
  const body = req.body;
  const service = getIngredientService(req);

  try {
    await service.insertIngredient(body);
    return res.send(await service.getAllIngredients());
  } catch (error: any) {
    log.error(error);
    if (error.code === 11000) {
      return res.status(409).send('Ingredient already exists');
    }
    return res.status(500).send(error);
  }
}

export async function updateIngredientHandler(
  req: Request<{ id: string } & CollectionParam, {}, PostIngredientInput>,
  res: Response<Ingredient[] | string>
) {
  const id = req.params.id;
  const body = req.body;
  const service = getIngredientService(req);
  try {
    await service.updateIngredient(id, body);
    return res.send(await service.getAllIngredients());
  } catch (error: any) {
    log.error(error);
    if (error.code === 11000) {
      return res.status(409).send('Ingredient already exists');
    }
    return res.status(500).send(error);
  }
}

export async function deleteIngredientHandler(
  req: Request<{ id: string } & CollectionParam, {}, {}>,
  res: Response
) {
  const id = req.params.id;
  const service = getIngredientService(req);
  log.info(`Deleting Ingredient with id ${id}`);
  try {
    await service.deleteIngredient(id);
    log.info(`Deleted Ingredient with id ${id}`);
    return res.send(await service.getAllIngredients());
  } catch (e) {
    log.error(e);
    res.status(500).send(e);
  }
}
