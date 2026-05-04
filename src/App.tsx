import { gameData } from './data/gameData';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AboutGame from './components/sections/AboutGame';
import Features from './components/sections/Features';
import Gallery from './components/sections/Gallery';
import Team from './components/sections/Team';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      {/* Navigation */}
      <Navbar navItems={gameData.nav} />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutGame />

      {/* Features Section */}
      <Features />

      {/* Gallery Section */}
      <Gallery />

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer
        socialLinks={gameData.socials}
        tagline={gameData.hero.tagline}
      />
    </div>
  );
}

export default App;