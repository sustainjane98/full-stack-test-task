import { Router } from 'express';
import getAllShoppingItemsRoute from './get-all-shopping-items.route.js';
import createShoppingItemRoute from './create-shopping-items.route.js';
import deleteShoppingItemRoute from './delete-shopping-item.route.js';
const router = Router();

router.use(getAllShoppingItemsRoute);
router.use(createShoppingItemRoute);
router.use(deleteShoppingItemRoute);

export default router;
