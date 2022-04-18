import React, { createContext, useContext, useState } from 'react';

export const SelectedProjectContext = createContext();

export function SelectedProjectProvider({ children }) {
  const [selectedProject, setSelectedProject] = useState('INBOX');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SelectedProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </SelectedProjectContext.Provider>
  );
}

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
