import { Card, Button, Checkbox } from 'flowbite-react';
import React from 'react';
import classNames from 'classnames';
import { TrashIcon } from '@heroicons/react/24/solid';

export interface Props {
  name: string;
  bought: boolean;
}

/**
 * An ShoppingListItem React Component.
 * @author Jane Will
 * @version 0.1
 */
export const ShoppingListItem: React.FC<Props> = ({ name, bought }) => {
  return (
    <Card className="flex gap-2">
      <Checkbox />
      <span
        className={classNames('text-base font-normal', {
          'line-through': bought,
        })}
      >
        {name}
      </span>
      <Button>
        <TrashIcon className="size-6 text-black" />
      </Button>
    </Card>
  );
};
