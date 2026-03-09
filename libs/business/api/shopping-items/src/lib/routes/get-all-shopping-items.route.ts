import { ShoppingItemService } from '@full-stack-test-task/database';
import { Router } from 'express';
import { Db } from 'mongodb';

const router = Router();

router.get('/items', async (req, res) => {
  const db: Db = req.app.get('db');
  const shoppingItemsCollection = new ShoppingItemService(db);
  const items = await shoppingItemsCollection.getAllItems();
  res.json(items);
});

export default router;
