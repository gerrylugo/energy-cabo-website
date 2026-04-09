import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'techno' ? 'Fun' : 'Luxury'} mode`}
        className="group"
      >
        <video
          src="/images/bobo-animated.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-14 h-14 object-contain drop-shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer rounded-full"
        />
      </button>
    </div>
  );
}
