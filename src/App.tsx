import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Impact } from './components/Impact';
import { Portfolio } from './components/Portfolio';
import { Education } from './components/Education';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
export default function App() {
  return (
    <div className="wf-root">
      <Navbar />
      <Hero />
      <About />
      <Impact />
      <Portfolio />
      <Education />
      <CTA />
      <Footer />
    </div>
  );
}
