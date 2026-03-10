import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../configs/query-client';
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
    onSuccess: () => {
      // Invalidate the items query to refetch the updated list
      queryClient.invalidateQueries({ queryKey: ['all-items'] });
    },
  });
