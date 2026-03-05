import { connectToDatabase } from '@full-stack-test-task/database';
import express from 'express';

const host = process.env.BACKEND_HOST ?? 'localhost';
const port = process.env.BACKEND_PORT ? Number(process.env.PORT) : 3000;

(async () => {
  const app = express();
  const db = await connectToDatabase();
  app.listen(port, host, () => {
    console.info(`Server is running at http://${host}:${port}`);
  });
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
