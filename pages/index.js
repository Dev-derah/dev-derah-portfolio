import { Footer, Navbar } from '../components';
import { About, Projects, Hero, Skills } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-x-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About className="overflow-hidden" />
      <Skills />
      <Projects />
    </div>
    <Footer />
  </div>
);

export default Home;
