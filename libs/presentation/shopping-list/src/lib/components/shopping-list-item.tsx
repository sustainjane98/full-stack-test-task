import { Card, Button, Checkbox } from 'flowbite-react';
import React from 'react';
import classNames from 'classnames';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useDeleteItem } from '../hooks/use-delete-item.hook';
import { useToggleBought } from '../hooks/use-toggle-bought';
import { useShoppingListStore } from '@full-stack-test-task/state';

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
  const deleteItem = useDeleteItem();
  const toggleBought = useToggleBought();
  const { deleteItem: deleteItemStore, toggleBought: toggleBoughtStore } =
    useShoppingListStore();

  return (
    <Card>
      <div className="flex flex-row gap-4 w-full items-center -m-2">
        <Checkbox
          onChange={async () => {
            toggleBoughtStore(id);
            await toggleBought(id);
          }}
          color="cyan"
          defaultChecked={bought}
        />
        <span
          className={classNames('font-normal flex-1 text-xl', {
            'line-through': bought,
          })}
        >
          {name}
        </span>
        <Button
          onClick={async () => {
            deleteItemStore(id);
            await deleteItem(id);
          }}
          color="red"
        >
          <TrashIcon className="size-6 text-white" />
        </Button>
      </div>
    </Card>
  );
};
