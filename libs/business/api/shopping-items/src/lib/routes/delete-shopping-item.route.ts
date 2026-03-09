import { ShoppingItemService } from '@full-stack-test-task/database';
import { Router } from 'express';
import { Db } from 'mongodb';

const router = Router();

router.delete('/items', async (req, res) => {
  const { id } = req.body;
  if (!id) {
    res.status(400).json({ error: 'Id is required' });
  }

  const db: Db = req.app.get('db');
  const shoppingItemsCollection = new ShoppingItemService(db);
  await shoppingItemsCollection.deleteItem(id);
  res.sendStatus(204);
});

export default router;
