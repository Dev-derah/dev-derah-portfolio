import { Footer, Navbar } from '../components';
import { About, Projects, Hero, Skills } from '../sections';
// import { fetchSkills } from '../utils/fetchSkill';

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

// export const getStaticProps = async () => {
//   const skills = await fetchSkills();
//   console.log(skills);
//   return {
//     props: {
//       skills,
//     },
//     revalidate: 10,
//   };
// };
