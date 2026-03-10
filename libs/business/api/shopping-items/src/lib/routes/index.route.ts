import { Router } from 'express';
import { getAllShoppingItems } from './get-all-shopping-items.route';
import { createShoppingItem } from './create-shopping-items.route';
import { deleteShoppingItem } from './delete-shopping-item.route';
import { toggleBoughtShoppingItem } from './toggle-bought-shopping-item.route';
const router = Router();

router.get('/items', getAllShoppingItems);
router.post('/items', createShoppingItem);
router.delete('/items/:id', deleteShoppingItem);
router.put('/items/:id', toggleBoughtShoppingItem);

export default router;
