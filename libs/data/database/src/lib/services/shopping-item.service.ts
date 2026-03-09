import { Collection, Db } from 'mongodb';
import { ShoppingItem } from '../types/shopping-item.type';

export class ShoppingItemService {
  private collection: Collection<ShoppingItem>;

  constructor(db: Db) {
    this.collection = db.collection<ShoppingItem>('shopping-items');
  }

  public async getAllItems() {
    return this.collection.find().toArray();
  }

  public async addItem(name: string) {
    const result = await this.collection.insertOne({
      name,
      bought: false,
      createdAt: new Date(),
    });
    return result.insertedId;
  }

  public async deleteItem(id: string) {
    await this.collection.deleteOne({ _id: id });
  }

  public async toggleItemBought(id: string) {
    const item = await this.collection.findOne({ _id: id });
    if (item) {
      await this.collection.updateOne(
        { _id: id },
        { $set: { bought: !item.bought } },
      );
    }
  }
}
