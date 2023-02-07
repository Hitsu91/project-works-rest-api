import express from 'express';
import ingredient from './ingredient.routes';
const router = express.Router();

router.get('/healthcheck', (_, res) => {
  res.sendStatus(200);
});

router.use(ingredient);

export default router;
