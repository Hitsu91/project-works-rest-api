import express from 'express';
import category from './category.routes';
import news from './news.routes';
import review from './review.routes';
import videogame from './videogame.routes';
const router = express.Router();

router.get('/healthcheck', (_, res) => {
  res.sendStatus(200);
});

router.use(category);
router.use(news);
router.use(videogame);
router.use(review);

export default router;
