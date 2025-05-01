import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';

import Themes from './components/Themes';
import useThemeStore from './store/themeStore';
import styles from './App.module.css';

// Default fallback theme in case of errors
const defaultTheme = {
  colors: {
    background: '#ffffff',
    text: '#000000',
    primary: '#3182ce'
  },
  typography: {
    fontFamily: 'sans-serif'
  }
};

function App() {
  const { currentTheme, themes, changeTheme } = useThemeStore();
  
  // Safely get theme data with fallbacks
  const theme = themes[currentTheme] || defaultTheme;

  // Set CSS variables for theme colors
  useEffect(() => {
    document.documentElement.style.setProperty('--primary', theme.colors.primary);
    document.documentElement.style.setProperty('--background', theme.colors.background);
    document.documentElement.style.setProperty('--text', theme.colors.text);
  }, [theme]);

  return (
    <div 
      className={styles.app}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.typography?.fontFamily || 'sans-serif',
        minHeight: '100vh'
      }}
    >
      <BrowserRouter>
        <Header />
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/themes" element={<Themes />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;