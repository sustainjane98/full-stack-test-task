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
      <Button color="alternative" className="px-0">
        <TrashIcon className="size-6 text-black" />
      </Button>
      <Button className="col-span-2 py-6">
        <div className="flex gap-2 items-center justify-center">
          <PlusIcon className="size-8 text-white" />
          <span className="text-2xl font-medium">Hinzufügen</span>
        </div>
      </Button>
    </div>
  );
};
