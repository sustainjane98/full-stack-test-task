import { ShoppingItemService } from '@full-stack-test-task/database';
import { RequestHandler } from 'express';
import { Db } from 'mongodb';

export const getAllShoppingItems: RequestHandler = async (req, res) => {
  const db: Db = req.app.get('db');
  const shoppingItemsCollection = new ShoppingItemService(db);
  const items = await shoppingItemsCollection.getAllItems();
  res.json(items);
};
