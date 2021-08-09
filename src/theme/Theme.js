import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Theme = () => {
  const { theme } = useTheme();

  const styles = {
    light: {
      backgroundColor: 'white',
      color: 'black',
    },
    dark: {
      backgroundColor: 'black',
      color: 'white',
    },
  };

  return (
    <div data-testid='theme-container' style={styles[theme]}>
      theme {theme}
    </div>
  );
};

export default Theme;
