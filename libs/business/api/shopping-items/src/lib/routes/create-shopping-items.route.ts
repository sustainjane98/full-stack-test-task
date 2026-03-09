import { ShoppingItemService } from '@full-stack-test-task/database';
import { Router } from 'express';
import { Db } from 'mongodb';

const router = Router();

router.post('/items', async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: 'Name is required' });
  }

  const db: Db = req.app.get('db');
  const shoppingItemsCollection = new ShoppingItemService(db);
  const id = await shoppingItemsCollection.addItem(name);
  res.json(id);
});

export default router;
