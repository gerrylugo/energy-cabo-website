import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 group"
      aria-label={`Switch to ${theme === 'techno' ? 'Funky' : 'Techno'} mode`}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-theme-toggle-bg backdrop-blur-md border border-theme-toggle-border shadow-lg hover:scale-105 transition-all duration-300">
        {/* Icon */}
        <span className="text-lg leading-none">
          {theme === 'techno' ? '🏄' : '⚡'}
        </span>
        {/* Label */}
        <span className="text-sm font-semibold text-theme-toggle-text">
          {theme === 'techno' ? 'Funky' : 'Techno'}
        </span>
      </div>
    </button>
  );
}
