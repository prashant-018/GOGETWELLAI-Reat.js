import useThemeStore from '../store/themeStore';
import styles from './Home.module.css';

const Home = () => {
  const { currentTheme, themes } = useThemeStore();
  const theme = themes[currentTheme];

  return (
    <div className={styles.home}>
      <div 
        className={styles.hero}
        style={{ 
          backgroundColor: theme.colors.primary,
          color: 'white'
        }}
      >
        <h1>Welcome to GoGetWell.ai</h1>
        <p>{theme.name} Theme</p>
      </div>
      
      <div 
        className={styles.card}
        style={{ 
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.primary
        }}
      >
        
      </div>
    </div>
  );
};

export default Home;