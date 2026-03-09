const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const flowbiteReact = require('flowbite-react/plugin/tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
    '../../.flowbite-react/class-list.json',
    ".flowbite-react/class-list.json"
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbiteReact],
};
