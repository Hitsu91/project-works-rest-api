import express from 'express';
import {
  addIngredientHandler,
  deleteIngredientHandler,
  getIngredientsHandler,
  updateIngredientHandler,
} from '../controllers/ingredient.controller';
import validateResourse from '../middleware/validateResourse';
import { IngredientSchema } from '../schema/ingredient.schema';

const router = express.Router();
const validateIngredients = validateResourse(IngredientSchema);

router.get('/:col/ingredient', getIngredientsHandler);

router.post('/:col/ingredient', validateIngredients, addIngredientHandler);

router.put('/:col/ingredient/:id', updateIngredientHandler);

router.delete('/:col/ingredient/:id', deleteIngredientHandler);

export default router;
