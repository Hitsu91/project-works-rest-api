import { Request, Response } from 'express';
import { CollectionParam } from '../../utils/collections';
import log from '../../utils/logger';
import { News } from '../model/news.model';
import { PostNewsInput } from '../schema/news.schema';
import { getNewsService } from '../service/services';

export async function getNewsHandler(
  req: Request<CollectionParam>,
  res: Response<News[]>
) {
  const service = getNewsService(req);
  const categories = await service.getAllNews();
  res.send(categories);
}

export async function addNewsHandler(
  req: Request<CollectionParam, {}, PostNewsInput>,
  res: Response<News[] | string>
) {
  const body = req.body;
  const service = getNewsService(req);

  try {
    await service.insertNews(body);
    return res.send(await service.getAllNews());
  } catch (error: any) {
    log.error(error);
    if (error.code === 11000) {
      return res.status(409).send('News already exists');
    }
    return res.status(500).send(error);
  }
}

export async function updateNewsHandler(
  req: Request<{ id: string } & CollectionParam, {}, PostNewsInput>,
  res: Response<News[] | string>
) {
  const id = req.params.id;
  const body = req.body;
  const service = getNewsService(req);
  try {
    await service.updateNews(id, body);
    return res.send(await service.getAllNews());
  } catch (error: any) {
    log.error(error);
    if (error.code === 11000) {
      return res.status(409).send('News already exists');
    }
    return res.status(500).send(error);
  }
}

export async function deleteNewsHandler(
  req: Request<{ id: string } & CollectionParam, {}, {}>,
  res: Response
) {
  const id = req.params.id;
  const service = getNewsService(req);
  log.info(`Deleting News with id ${id}`);
  try {
    await service.deleteNews(id);
    log.info(`Deleted News with id ${id}`);
    return res.send(await service.getAllNews());
  } catch (e) {
    log.error(e);
    res.status(500).send(e);
  }
}
