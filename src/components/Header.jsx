import { Link } from 'react-router-dom';
import useThemeStore from '../store/themeStore';
import styles from './Header.module.css';

const Header = () => {
  const { currentTheme, themes } = useThemeStore();
  const theme = themes[currentTheme];

  return (
    <header 
      className={styles.header}
      style={{ backgroundColor: theme.colors.menu }}
    >
      <Link 
        to="/" 
        className={styles.logo}
        style={{ color: theme.colors.primary }}
      >
        GoGetWell.ai
      </Link>
      <nav className={styles.nav}>
        <Link 
          to="/" 
          className={styles.navLink}
          style={{ color: theme.colors.text }}
        >
          Home
        </Link>
        <Link 
          to="/themes" 
          className={styles.navLink}
          style={{ color: theme.colors.text }}
        >
          Themes
        </Link>
      </nav>
    </header>
  );
};

export default Header;