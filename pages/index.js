import { Footer, Navbar } from '../components';
import { About, Projects, Hero, Skills } from '../sections';
import { fetchSkills } from '../utils/fetchSkill';

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

export const getStaticProps = async () => {
  const skills = await fetchSkills();
  return {
    props: {
      skills,
    },
    revalidate: 10,
  };
};
