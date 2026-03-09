import { useMutation } from '@tanstack/react-query';
import backendClient from '../configs/backend-client';
import { queryClient } from '../configs/query-client';

export const useAddItem = () =>
  useMutation({
    mutationFn: async (name: string) => {
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

      return result.json() as Promise<string>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-items'] });
    },
  });
