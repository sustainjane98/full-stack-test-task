import { createTheme } from 'flowbite-react';

export const customTheme = createTheme({
  button: {
    color: {
      default: 'bg-cyan-700 hover:bg-cyan-800 text-white',
    },
  },
  textInput: {
    field: {
      input: {
        sizes: {
          sm: 'text-lg placeholder:text-lg',
          md: 'text-xl placeholder:text-xl',
          lg: 'text-2xl placeholder:text-2xl',
        },
      },
    },
  },
  checkbox: {
    base: 'border-2 size-5 bg-transparent',
  },
});
