import { HeroSection } from './components/sections/HeroSection';
import { SarcasmOfTheMomentSection } from './components/sections/SarcasmOfTheMomentSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FooterSection } from './components/sections/FooterSection';
import { TopNav } from './components/nav/TopNav';

function App() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <main>
        <HeroSection />
        <SarcasmOfTheMomentSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
