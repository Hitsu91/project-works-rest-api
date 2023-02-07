import { Request, Response } from 'express';
import { CollectionParam } from '../../utils/collections';
import log from '../../utils/logger';
import { Videogame } from '../model/videogame.model';
import { PostVideogameInput } from '../schema/videogame.schema';
import { getVideogameService } from '../service/services';

export async function getVideogameHandler(
  req: Request<CollectionParam>,
  res: Response<Videogame[]>
) {
  const service = getVideogameService(req);
  const categories = await service.getAllVideogame();
  res.send(categories);
}

export async function getVideogameByIdHandler(
  req: Request<{ id: string } & CollectionParam>,
  res: Response<Videogame | null>
) {
  const service = getVideogameService(req);
  const id = req.params.id;
  const categories = await service.getVideogameById(id);
  res.send(categories);
}

export async function addVideogameHandler(
  req: Request<CollectionParam, {}, PostVideogameInput>,
  res: Response<Videogame[] | string>
) {
  const body = req.body;
  const service = getVideogameService(req);

  try {
    await service.insertVideogame(body);
    return res.send(await service.getAllVideogame());
  } catch (error: any) {
    log.error(error);
    if (error.code === 11000) {
      return res.status(409).send('Videogame already exists');
    }
    return res.status(500).send(error);
  }
}

export async function updateVideogameHandler(
  req: Request<{ id: string } & CollectionParam, {}, PostVideogameInput>,
  res: Response<Videogame[] | string>
) {
  const id = req.params.id;
  const body = req.body;
  const service = getVideogameService(req);
  try {
    await service.updateVideogame(id, body);
    return res.send(await service.getAllVideogame());
  } catch (error: any) {
    log.error(error);
    if (error.code === 11000) {
      return res.status(409).send('Videogame already exists');
    }
    return res.status(500).send(error);
  }
}

export async function deleteVideogameHandler(
  req: Request<{ id: string } & CollectionParam, {}, {}>,
  res: Response
) {
  const id = req.params.id;
  const service = getVideogameService(req);
  log.info(`Deleting Videogame with id ${id}`);
  try {
    await service.deleteVideogame(id);
    log.info(`Deleted Videogame with id ${id}`);
    return res.send(await service.getAllVideogame());
  } catch (e) {
    log.error(e);
    res.status(500).send(e);
  }
}
