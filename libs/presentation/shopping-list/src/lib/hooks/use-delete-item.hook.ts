import { useMutation } from '@tanstack/react-query';
import backendClient from '../configs/backend-client';

export const useDeleteItem = () =>
  useMutation({
    mutationFn: async (id: string) => {
      const result = await backendClient(`/items/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!result.ok) {
        throw new Error('Failed to delete item');
      }
    },
  });
