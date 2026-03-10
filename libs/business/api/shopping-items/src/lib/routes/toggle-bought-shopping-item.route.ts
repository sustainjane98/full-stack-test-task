import { ShoppingItemService } from '@full-stack-test-task/database';
import { RequestHandler } from 'express';
import { Db } from 'mongodb';

export const toggleBoughtShoppingItem: RequestHandler = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ error: 'Id is required' });
    return;
  }

  const db: Db = req.app.get('db');
  const shoppingItemsCollection = new ShoppingItemService(db);
  await shoppingItemsCollection.toggleItemBought(id);
  res.sendStatus(204);
};
