import { useMutation } from '@tanstack/react-query';
import backendClient from '../configs/backend-client';

export const useToggleBought = () =>
  useMutation({
    mutationFn: async (id: string) => {
      const result = await backendClient(`/items/${id}`, {
        method: 'PUT',
      });

      if (!result.ok) {
        throw new Error('Failed to toggle item');
      }
    },
  });
