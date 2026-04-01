import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Theme = 'techno' | 'funky';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'techno',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('ec-theme');
    return (saved === 'funky' ? 'funky' : 'techno') as Theme;
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ec-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    // Add transition class for smooth crossfade
    document.documentElement.classList.add('theme-transitioning');

    setTimeout(() => {
      setTheme((prev) => (prev === 'techno' ? 'funky' : 'techno'));
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning');
        setIsTransitioning(false);
      }, 600);
    }, 50);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
