import backendClient from '../configs/backend-client';
import { ShoppingItemFrontend } from '@full-stack-test-task/database';

export const useAddItem = () => async (name: string) => {
  const result = await backendClient('/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });

  if (!result.ok) {
    throw new Error('Failed to add item');
  }

  return (await result.json()) as ShoppingItemFrontend;
};
