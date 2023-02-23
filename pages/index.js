import { useState, useEffect } from 'react';
import { Footer, Navbar } from '../components';
import { About, Projects, Hero, Skills } from '../sections';
import { fetchProjecsts } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import Loading from '../utils/Loading';

const Home = ({ skills, projects }) => {
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisloading(false);
    }, 2500);
  });

  return (
    <div>
      {isloading ? <Loading /> : (
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
      )}
    </div>
  );
};

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
