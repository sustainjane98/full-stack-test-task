import { ShoppingItemFrontend } from '@full-stack-test-task/database';
import backendClient from '../configs/backend-client';
import { useQuery } from '@tanstack/react-query';

export const useItems = () =>
  useQuery({
    queryKey: ['all-items'],
    queryFn: async () => {
      const result = await backendClient('/items');

      if (!result.ok) {
        throw new Error('Failed to fetch items');
      }

      return (await result.json()) as ShoppingItemFrontend[];
    },
  });
