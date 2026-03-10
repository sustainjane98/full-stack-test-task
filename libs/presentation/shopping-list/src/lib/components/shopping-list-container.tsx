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
      className={classNames(
        'flex-1 flex flex-col gap-2 relative overflow-y-auto overflow-x-hidden',
        {
          'items-center justify-center': isLoading,
        },
      )}
    >
      <div className="absolute top-0 left-0 right-0 flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
};
