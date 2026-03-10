import React from 'react';
import { ShoppingListContainer } from './shopping-list-container';
import { AddItemSection } from './add-item-section';
import { useSetItemsInGlobalStore } from '../hooks/use-set-items-in-global-store.hook';
import { ShoppingListItem } from './shopping-list-item';
import { Spinner } from 'flowbite-react';
import { EmptyCart } from './empty-cart';
import { useShoppingListStore } from '@full-stack-test-task/state';

/**
 * An ShoppingList React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ShoppingList: React.FC = () => {
  const isLoading = useSetItemsInGlobalStore();
  const { items } = useShoppingListStore();

  return (
    <div className="flex flex-col min-h-[calc(100dvh-(4rem+2.5rem))] px-4 pb-8 max-w-2xl mx-auto gap-8">
      <ShoppingListContainer isLoading={isLoading}>
        {isLoading ? (
          <Spinner color="info" className="size-16" />
        ) : items?.length === 0 ? (
          <EmptyCart />
        ) : (
          items?.map(({ name, bought, _id }) => (
            <ShoppingListItem
              key={name}
              name={name}
              bought={bought}
              id={_id ?? ''}
            />
          ))
        )}
      </ShoppingListContainer>
      <AddItemSection />
    </div>
  );
};
