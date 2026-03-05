import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const url = process.env.MONGODB_URL || 'mongodb://localhost:27017';
  const dbName = process.env.MONGODB_DB_NAME || 'full-stack-test-task';
  const client = new MongoClient(url);
  await client.connect();
  console.info('Connected successfully to database');
  return client.db(dbName);
}
