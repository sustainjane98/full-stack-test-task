import React from 'react';

/**
 * An Header React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Header: React.FC = () => {
  return (
    <header className="flex px-4 py-8 justify-center">
      <h1 className="text-4xl font-semibold">Einkaufsliste</h1>
    </header>
  );
};
