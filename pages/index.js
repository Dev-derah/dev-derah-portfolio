import { Footer, Navbar } from '../components';
import { About, Projects, Hero } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-x-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About className="overflow-hidden" />
      <div className="" />
      <Projects />
    </div>
    <Footer />
  </div>
);

export default Home;
