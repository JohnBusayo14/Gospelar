// ColorContext.js
import React, { createContext, useState, useContext } from 'react';
const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState({
    light: {
      background: 'white',
      text: 'black',
      text2: '#000000',
      statusBar: 'dark-content',
      icon: 'white',
      boxcolor: '#f5f3f4',
      boxcolor2: '#fff'
    },
    dark: {
      background: 'black',
      text: 'white',
      text2: '#adb5bd',
      statusBar: 'light-content',
      boxcolor: '#343a40',
      boxcolor2: '#022b3a'

    },
  });

  return (
    <ColorContext.Provider value={colors}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColors = () => useContext(ColorContext);
