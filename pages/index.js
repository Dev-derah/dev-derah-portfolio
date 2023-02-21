import { Footer, Navbar } from '../components';
import { About, Projects, Hero, Skills } from '../sections';
import { fetchProjecsts } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';

const Home = ({ skills, projects }) => (
  <div className="bg-primary-black overflow-x-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About className="overflow-hidden" />
      <Skills skills={skills} />
      <Projects projects={projects} />
    </div>
    <Footer />
  </div>
);

export default Home;

export const getStaticProps = async () => {
  const projects = await fetchProjecsts();
  const skills = await fetchSkills();
  return {
    props: {
      skills,
      projects,
    },
    revalidate: 10,
  };
};
