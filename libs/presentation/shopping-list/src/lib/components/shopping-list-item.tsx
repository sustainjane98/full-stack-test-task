import { Card, Button, Checkbox } from 'flowbite-react';
import React from 'react';
import classNames from 'classnames';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useDeleteItem } from '../hooks/use-delete-item.hook';
import { useToggleBought } from '../hooks/use-toggle-bought';

export interface Props {
  id: string;
  name: string;
  bought: boolean;
}

/**
 * An ShoppingListItem React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ShoppingListItem: React.FC<Props> = ({ name, bought, id }) => {
  const { mutate: deleteItem } = useDeleteItem();
  const { mutate: toggleBought } = useToggleBought();

  return (
    <Card>
      <div className="flex flex-row gap-4 w-full items-center">
        <Checkbox
          onClick={() => toggleBought(id)}
          color="blue"
          checked={bought}
        />
        <span
          className={classNames('font-normal flex-1 text-2xl', {
            'line-through': bought,
          })}
        >
          {name}
        </span>
        <Button onClick={() => deleteItem(id)} color="red">
          <TrashIcon className="size-6 text-white" />
        </Button>
      </div>
    </Card>
  );
};
