import { ShoppingItemService } from '@full-stack-test-task/database';
import { RequestHandler, Router } from 'express';
import { Db } from 'mongodb';

const router = Router();

export const deleteShoppingItem: RequestHandler = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ error: 'Id is required' });
    return;
  }

  const db: Db = req.app.get('db');
  const shoppingItemsCollection = new ShoppingItemService(db);
  await shoppingItemsCollection.deleteItem(id);
  res.sendStatus(204);
};

export default router;
