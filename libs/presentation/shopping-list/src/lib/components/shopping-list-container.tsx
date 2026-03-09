import React, { PropsWithChildren } from 'react';

/**
 * An ShoppingListContainer React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ShoppingListContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <div className="flex-1 flex flex-col gap-2">{children}</div>;
};
