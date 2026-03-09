import { Router } from 'express';
import createShoppingItemRoute from './create-shopping-item.route';
const router = Router();

router.use('/items', createShoppingItemRoute);

export default router;
