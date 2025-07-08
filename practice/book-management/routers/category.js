import { Router } from 'express';
import {
	createCategory,
	deleteCategory,
	getCategoryById,
	getCategories,
	updateCategory,
} from '../handlers/categories.js';
import { validateBodySchema, validateParamsSchema } from '../middlewares/validations.js';
import { categorySchema } from '../validation/categories.js';
import { idParamsSchema } from '../validation/utils.js';
import { CheckAuth } from '../middlewares/auth.js';

const categoriesRouter = Router();

categoriesRouter
	.route('/')
	.get(getCategories)
	.post(CheckAuth, validateBodySchema(categorySchema), createCategory);

categoriesRouter
	.route('/:id')
	.all(CheckAuth, validateParamsSchema(idParamsSchema))
	.get(getCategoryById)
	.put(validateBodySchema(categorySchema.partial()), updateCategory)
	.delete(deleteCategory);

export default categoriesRouter;
