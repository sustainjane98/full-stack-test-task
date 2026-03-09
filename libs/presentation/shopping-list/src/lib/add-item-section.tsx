import { Button, TextInput } from 'flowbite-react';
import React from 'react';
import { TrashIcon, PlusIcon } from '@heroicons/react/24/solid';

/**
 * An AddItemSection React Component.
 * @author Jane Will
 * @version 0.1
 */
export const AddItemSection: React.FC = () => {
  return (
    <div className="grid grid-col-[1fr_auto] gap-2">
      <TextInput placeholder="Add item" className="w-full" />
      <Button>
        <TrashIcon className="size-6 text-black" />
      </Button>
      <Button className="col-span-2 flex gap-1">
        <PlusIcon className="size-6 text-black" />
        Hinzufügen
      </Button>
    </div>
  );
};
