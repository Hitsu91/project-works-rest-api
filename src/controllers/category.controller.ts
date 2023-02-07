import { Request, Response } from 'express';
import { CollectionParam } from '../../utils/collections';
import log from '../../utils/logger';
import { Category } from '../model/category.model';
import { PostCategoryInput } from '../schema/category.schema';
import { getCategoryService } from '../service/services';

export async function getCategoriesHandler(
  req: Request<CollectionParam>,
  res: Response<Category[]>
) {
  const service = getCategoryService(req);
  const categories = await service.getAll();
  res.send(categories);
}

export async function getCategoryByIdHandler(
  req: Request<{ id: string } & CollectionParam>,
  res: Response<Category | null>
) {
  const service = getCategoryService(req);
  const id = req.params.id;
  const category = await service.getById(id);
  res.send(category);
}

export async function addCategoryHandler(
  req: Request<CollectionParam, {}, PostCategoryInput>,
  res: Response<Category[] | string>
) {
  const body = req.body;
  const service = getCategoryService(req);

  try {
    await service.insert(body);
    return res.send(await service.getAll());
  } catch (error: any) {
    log.error(error);
    if (error.code === 11000) {
      return res.status(409).send('Category already exists');
    }
    return res.status(500).send(error);
  }
}

export async function updateCategoryHandler(
  req: Request<{ id: string } & CollectionParam, {}, PostCategoryInput>,
  res: Response<Category[] | string>
) {
  const id = req.params.id;
  const body = req.body;
  const service = getCategoryService(req);
  try {
    await service.update(id, body);
    return res.send(await service.getAll());
  } catch (error: any) {
    log.error(error);
    if (error.code === 11000) {
      return res.status(409).send('Category already exists');
    }
    return res.status(500).send(error);
  }
}

export async function deleteCategoryHandler(
  req: Request<{ id: string } & CollectionParam, {}, {}>,
  res: Response
) {
  const id = req.params.id;
  const service = getCategoryService(req);
  log.info(`Deleting Category with id ${id}`);
  try {
    await service.deleteById(id);
    log.info(`Deleted Category with id ${id}`);
    return res.send(await service.getAll());
  } catch (e) {
    log.error(e);
    res.status(500).send(e);
  }
}
