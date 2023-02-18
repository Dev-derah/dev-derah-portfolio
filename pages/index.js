import { Footer, Navbar } from '../components';
import { About, Projects, Hero, Skills } from '../sections';

const Home = ({ skills }) => (
  <div className="bg-primary-black overflow-x-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About className="overflow-hidden" />
      <Skills skills={skills} />
      <Projects />
    </div>
    <Footer />
  </div>
);

export default Home;
