import React from 'react';
import { ShoppingListContainer } from './shopping-list-container';
import { AddItemSection } from './add-item-section';

/**
 * An ShoppingList React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ShoppingList: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-(4rem+2.5rem))] px-4 pb-8">
      <ShoppingListContainer></ShoppingListContainer>
      <AddItemSection />
    </div>
  );
};
