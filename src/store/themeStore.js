import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
  persist(
    (set) => ({
      currentTheme: 'default',
      themes: {
        default: {
          name: 'Default',
          colors: {
            primary: '#3182ce',
            background: '#ffffff',
            text: '#2d3748',
            card: '#edf2f7',
            menu: '#ebf8ff'
          }
        },
        organ: {
          name: 'Organ Transplant',
          colors: {
            primary: '#38b2ac',
            background: '#e6fffa',
            text: '#234e52',
            card: '#b2f5ea',
            menu: '#e6fffa'
          }
        },
        cosmetic: {
          name: 'Cosmetic Surgery',
          colors: {
            primary: '#d53f8c',
            background: '#fff5f7',
            text: '#97266d',
            card: '#fed7e2',
            menu: '#fff5f7'
          }
        }
      },
      changeTheme: (themeKey) => set({ currentTheme: themeKey })
    }),
    {
      name: 'medical-theme',
    }
  )
);

export default useThemeStore;