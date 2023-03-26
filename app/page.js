import Footer from '../components';
import { About, Projects, Hero } from '../sections';

const Page = () => (
  <div className="bg-primary-black">
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
