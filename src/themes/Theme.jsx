import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from './global.style';
import { darkTheme, lightTheme } from './default';

const Theme = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme }>
      <GlobalStyles />
      {children}
      <button  style={{position: 'fixed', bottom: '30px', left: '20px'}} onClick={() => themeToggler()}>Switch Theme</button>
    </ThemeProvider>
  );
}

export default Theme;