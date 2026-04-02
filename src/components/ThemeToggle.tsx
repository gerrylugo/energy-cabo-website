import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-center gap-1">
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'techno' ? 'Fun' : 'Luxury'} mode`}
        className="group animate-toggle-glow"
      >
        <div className="px-3.5 py-1.5 rounded-lg bg-theme-toggle-bg/80 backdrop-blur-sm border border-theme-toggle-border/50 hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center">
          <span className="text-[11px] font-semibold tracking-wide text-theme-toggle-text/70 group-hover:text-theme-toggle-text transition-colors leading-none">
            {theme === 'techno' ? 'Fun' : 'Luxury'}
          </span>
        </div>
      </button>
      <span className="text-[8px] font-medium tracking-widest uppercase opacity-40" style={{ color: 'var(--color-accent)' }}>
        We Adapt
      </span>
    </div>
  );
}
