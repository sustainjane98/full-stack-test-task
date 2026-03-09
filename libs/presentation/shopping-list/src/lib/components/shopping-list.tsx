import React from 'react';
import { ShoppingListContainer } from './shopping-list-container';
import { AddItemSection } from './add-item-section';
import { useItems } from '../hooks/use-items.hook';
import { ShoppingListItem } from './shopping-list-item';
import { Spinner } from 'flowbite-react';

/**
 * An ShoppingList React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ShoppingList: React.FC = () => {
  const { data: items, isLoading } = useItems();

  return (
    <div className="flex flex-col min-h-[calc(100dvh-(4rem+2.5rem))] px-4 pb-8">
      <ShoppingListContainer isLoading={isLoading}>
        {isLoading ? (
          <Spinner color="info" className="size-16" />
        ) : (
          items?.map(({ name, bought }) => (
            <ShoppingListItem name={name} bought={bought} />
          ))
        )}
      </ShoppingListContainer>
      <AddItemSection />
    </div>
  );
};
