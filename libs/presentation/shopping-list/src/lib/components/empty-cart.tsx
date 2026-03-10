import React from 'react';
import { EmptyCartIcon } from './empty-cart-icon';

/**
 * An EmptyCart React Component.
 * @author Jane Will
 * @version 0.1
 */
export const EmptyCart: React.FC = () => {
  return (
    <div className="flex flex-1 justify-center items-center w-full h-full">
      <EmptyCartIcon className="w-52 lg:w-72" />
    </div>
  );
};
