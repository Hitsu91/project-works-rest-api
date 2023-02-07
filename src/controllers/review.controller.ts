import { Request, Response } from 'express';
import { CollectionParam } from '../../utils/collections';
import log from '../../utils/logger';
import { Review } from '../model/review.model';
import { PostReviewInput } from '../schema/review.schema';
import { getReviewService } from '../service/services';

export async function getReviewHandler(
  req: Request<CollectionParam>,
  res: Response<Review[]>
) {
  const service = getReviewService(req);
  const categories = await service.getAllReview();
  res.send(categories);
}
export async function getReviewByIdHandler(
  req: Request<{ id: string } & CollectionParam>,
  res: Response<Review | null>
) {
  const service = getReviewService(req);
  const id = req.params.id;
  res.send(await service.getReviewById(id));
}

export async function addReviewHandler(
  req: Request<CollectionParam, {}, PostReviewInput>,
  res: Response<Review[] | string>
) {
  const body = req.body;
  const service = getReviewService(req);

  try {
    await service.insertReview(body);
    return res.send(await service.getAllReview());
  } catch (error: any) {
    log.error(error);
    if (error.code === 11000) {
      return res.status(409).send('Review already exists');
    }
    return res.status(500).send(error);
  }
}

export async function updateReviewHandler(
  req: Request<{ id: string } & CollectionParam, {}, PostReviewInput>,
  res: Response<Review[] | string>
) {
  const id = req.params.id;
  const body = req.body;
  const service = getReviewService(req);
  try {
    await service.updateReview(id, body);
    return res.send(await service.getAllReview());
  } catch (error: any) {
    log.error(error);
    if (error.code === 11000) {
      return res.status(409).send('Review already exists');
    }
    return res.status(500).send(error);
  }
}

export async function deleteReviewHandler(
  req: Request<{ id: string } & CollectionParam, {}, {}>,
  res: Response
) {
  const id = req.params.id;
  const service = getReviewService(req);
  log.info(`Deleting Review with id ${id}`);
  try {
    await service.deleteReview(id);
    log.info(`Deleted Review with id ${id}`);
    return res.send(await service.getAllReview());
  } catch (e) {
    log.error(e);
    res.status(500).send(e);
  }
}
