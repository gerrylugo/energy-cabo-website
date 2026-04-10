import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-theme-bg">
        <Navigation />
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <MissionVision />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppButton />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
