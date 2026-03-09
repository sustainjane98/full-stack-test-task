import { Router } from 'express';
import getAllShoppingItemsRoute from './get-all-shopping-items.route';
import createShoppingItemRoute from './create-shopping-items.route';
const router = Router();

router.use(getAllShoppingItemsRoute);
router.use(createShoppingItemRoute);

export default router;
