import React, { createContext, useState } from 'react';

// Create the context with a default value that matches your actual value structure
export const URLContext = createContext({
  url: 'home',
  setURL: () => {},
});

// Provider component
const URLProvider = ({ children }) => {
  const [url, setURL] = useState('home');


  const value = {
    url,
    setURL
  };

  return (
    <URLContext.Provider value={value}>
      {children}
    </URLContext.Provider>
  );
};

export default URLProvider;