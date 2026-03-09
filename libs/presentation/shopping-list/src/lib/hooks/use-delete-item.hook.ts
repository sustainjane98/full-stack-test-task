import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../configs/query-client';

export const useDeleteItem = () =>
  useMutation({
    mutationFn: async (id: string) => {
      const result = await fetch('/items', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
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
