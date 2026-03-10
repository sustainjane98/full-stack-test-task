import { ObjectId } from 'mongodb';

export interface ShoppingItem {
  _id?: ObjectId;
  name: string;
  bought: boolean;
  createdAt: Date;
}

export type ShoppingItemFrontend = Omit<ShoppingItem, '_id'> & { id: string };
