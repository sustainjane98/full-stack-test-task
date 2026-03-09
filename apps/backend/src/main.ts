import { connectToDatabase } from '@full-stack-test-task/database';
import { router } from '@full-stack-test-task/shopping-items';
import express from 'express';
import cors from 'cors';

const host = process.env.BACKEND_HOST ?? 'localhost';
const port = process.env.BACKEND_PORT ? Number(process.env.PORT) : 3000;

(async () => {
  const app = express();
  const db = await connectToDatabase();
  app.set('db', db);

  const corsOptions = {
    origin: process.env.FRONTEND_URL ?? 'http://localhost:4200',
    credentials: true,
  };

  app.use(cors(corsOptions));

  app.use(router);

  app.listen(port, host, () => {
    console.info(`Server is running at http://${host}:${port}`);
  });
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
