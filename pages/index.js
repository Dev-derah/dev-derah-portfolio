import { Footer, Navbar } from '../components';
import { About, Projects, Hero } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Projects />
    </div>
    <div className="relative overflow-hidden">
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
);

export default Home;
