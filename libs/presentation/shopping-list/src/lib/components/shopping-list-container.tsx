import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type Props = PropsWithChildren & { isLoading: boolean };

/**
 * An ShoppingListContainer React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ShoppingListContainer: React.FC<Props> = ({
  children,
  isLoading,
}) => {
  return (
    <div
      className={classNames('flex-1 flex flex-col gap-2', {
        'items-center justify-center': isLoading,
      })}
    >
      {children}
    </div>
  );
};
