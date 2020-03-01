import React from 'react'
import { css, jsx } from '@emotion/core'

// Components
import Header from './components/Header'
import Main from './components/Main'
import useDarkMode from './userDarkMode';

function App() {
  const { theme, toggleTheme } = useDarkMode();
  const themeStyles = theme === 'light'? {
    backgroundColor: '#eee',
    color: '#000'
  }: {
    backgroundColor: '#171616',
    color: '#fff'
  }
  return (
    <div 
      className="App"
      style={themeStyles}
      >
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Main theme={theme}/>
    </div>
  );
}

export default App;
