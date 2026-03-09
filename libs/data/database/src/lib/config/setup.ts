import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const dbName = process.env.MONGODB_DB_NAME || 'full-stack-test-task';
  const username = process.env.MONGODB_USERNAME || 'root';
  const password = process.env.MONGODB_PASSWORD || 'example';
  const host = process.env.MONGODB_HOST || 'localhost';
  const port = process.env.MONGODB_PORT || '27017';
  const authSource = process.env.MONGODB_AUTH_SOURCE || 'admin';

  const url =
    process.env.MONGODB_URL ||
    `mongodb://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${host}:${port}/${dbName}?authSource=${encodeURIComponent(authSource)}`;

  const client = new MongoClient(url);
  await client.connect();
  console.info('Connected successfully to database');
  return client.db(dbName);
}
