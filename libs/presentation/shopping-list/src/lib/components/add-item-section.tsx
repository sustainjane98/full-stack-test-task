import { Button, TextInput } from 'flowbite-react';
import React from 'react';
import { TrashIcon, PlusIcon } from '@heroicons/react/24/solid';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAddItem } from '../hooks/use-add-item.hook';

type Inputs = {
  name: string;
};

/**
 * An AddItemSection React Component.
 * @author Jane Will
 * @version 0.1
 */
export const AddItemSection: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const { mutate: addItem } = useAddItem();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addItem(data.name, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-[1fr_5rem] grid-rows-2 items-stretch gap-2"
    >
      <TextInput
        placeholder="Füge ein neues Element hinzu..."
        className="w-full"
        {...register('name')}
      />
      <Button
        onClick={() => reset()}
        type="button"
        color="red"
        className="h-full"
      >
        <TrashIcon className="size-6 text-white" />
      </Button>
      <Button type="submit" size="lg" className="col-span-2 flex gap-2">
        <PlusIcon className="size-8 text-white" />
        <span className="text-2xl font-medium">Hinzufügen</span>
      </Button>
    </form>
  );
};
