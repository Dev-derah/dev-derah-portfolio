import { Footer, Navbar } from '../components';
import { About, Projects, Hero } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-x-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Projects />
    </div>
    <div className="gradient-04 z-0" />
    <Footer />
  </div>
);

export default Page;
