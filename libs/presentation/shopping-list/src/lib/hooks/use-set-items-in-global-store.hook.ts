import { ShoppingItemFrontend } from '@full-stack-test-task/database';
import backendClient from '../configs/backend-client';
import { useShoppingListStore } from '@full-stack-test-task/state';
import { useEffect, useState } from 'react';

export const useSetItemsInGlobalStore = () => {
  const [loading, setLoading] = useState(true);

  const { setItems } = useShoppingListStore();

  useEffect(() => {
    backendClient('/items').then(async (res) => {
      setItems((await res.json()) as ShoppingItemFrontend[]);
      setLoading(false);
    });
  }, [setItems]);

  return loading;
};
