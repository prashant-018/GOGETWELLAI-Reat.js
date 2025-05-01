import useThemeStore from '../store/themeStore';
import styles from './Themes.module.css';

const Themes = () => {
  const { currentTheme, themes, changeTheme } = useThemeStore();

  return (
    <div className={styles.themes}>
      <h1>Select Your Theme</h1>
      <div className={styles.grid}>
        {Object.entries(themes).map(([key, theme]) => (
          <div
            key={key}
            className={`${styles.themeCard} ${currentTheme === key ? styles.active : ''}`}
            onClick={() => changeTheme(key)}
          >
            <div 
              className={styles.preview}
              style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.text,
                borderColor: theme.colors.primary
              }}
            >
              <div 
                className={styles.previewHeader}
                style={{ backgroundColor: theme.colors.primary }}
              >
                Header
              </div>
              <div className={styles.previewContent}>
                <button
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: 'white'
                  }}
                >
                  Button
                </button>
                <p>Sample Content</p>
              </div>
            </div>
            <h3>{theme.name}</h3>
            {currentTheme === key && <span>Current Theme</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Themes;