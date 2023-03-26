import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { About, Projects, Hero, Skills } from '../sections';
import { fetchProjecsts } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';
import Loading from '../utils/Loading';

const Home = ({ skills, projects, socials }) => {
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisloading(false);
    }, 2700);
  });

  return (
    <div>
      {isloading ? (
        <Loading />
      ) : (
        <div className="bg-primary-black w-screen scroll-smooth">
          <div>
            <Hero />
          </div>
          <div className="relative overflow-x-hidden">
            <About />
            <Skills skills={skills} />
            <Projects projects={projects} />
          </div>
          <Footer socials={socials} />
        </div>
      )}
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const projects = await fetchProjecsts();
  const skills = await fetchSkills();
  const socials = await fetchSocials();
  return {
    props: {
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
