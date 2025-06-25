import { Router } from 'express';
import {
	getMyOrders,
	orderBooks,
	getOrders,
	getOrderById,
	updateOrder,
	deleteOrder,
} from '../handlers/orders.js';
import { isAdmin } from '../middlewares/auth.js';
import {
	validateBodySchema,
	validateParamsSchema,
} from '../middlewares/validations.js';
import { idParamsSchema } from '../validation/utils.js';
import { cartSchema, orderSchema } from '../validation/order.js';

const ordersRouter = Router();

ordersRouter
	.route('/')
	.get(getMyOrders)
	.post(validateBodySchema(cartSchema), orderBooks);

ordersRouter.route('/admin').all(isAdmin).get(getOrders);
ordersRouter
	.route('/admin/:id')
	.all(validateParamsSchema(idParamsSchema))
	.get(getOrderById)
	.put(isAdmin, validateBodySchema(orderSchema.partial()), updateOrder)
	.delete(isAdmin, deleteOrder);

export default ordersRouter;
