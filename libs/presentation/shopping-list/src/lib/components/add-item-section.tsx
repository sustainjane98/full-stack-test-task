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
    <div className="grid grid-cols-[1fr_5rem] grid-rows-2 gap-2">
      <TextInput placeholder="Add item" className="w-full" />
      <Button color="red">
        <TrashIcon className="size-6 text-white" />
      </Button>
      <Button size="lg" className="col-span-2 flex gap-2">
        <PlusIcon className="size-8 text-white" />
        <span className="text-2xl font-medium">Hinzufügen</span>
      </Button>
    </div>
  );
};
