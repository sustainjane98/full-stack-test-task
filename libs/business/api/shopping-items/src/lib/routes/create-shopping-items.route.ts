import { ShoppingItemService } from '@full-stack-test-task/database';
import { RequestHandler } from 'express';
import { Db } from 'mongodb';

export const createShoppingItem: RequestHandler = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: 'Name is required' });
    return;
  }

  const db: Db = req.app.get('db');
  const shoppingItemsCollection = new ShoppingItemService(db);
  const result = await shoppingItemsCollection.addItem(name);
  res.json(result);
};
