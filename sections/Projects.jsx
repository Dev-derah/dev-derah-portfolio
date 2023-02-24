/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

// import { useState } from 'react';
import hoverEffect from 'hover-effect';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import styles from '../styles';
import { ProjectCard, TitleText, TypingText } from '../components';

const Projects = ({ projects }) => {
  Array.from(document.querySelectorAll('.diss ')).forEach((el) => {
    console.log(el);
    // eslint-disable-next-line no-new, new-cap
    // eslint-disable-next-line no-unused-vars, camelcase, new-cap, no-undef
    const image_animate = new hoverEffect({
      parent: el,
      intensity: 0.3,
      image1: el.dataset.img1,
      image2: el.dataset.img2,
      displacementImage: './smoke.png',
    });
  });
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col`}
      >
        <TypingText title="| Projects" textStyles="text-center" />
        <TitleText
          title={<>A collection of my most recent Projects</>}
          textStyles="text-center"
        />
        <div className="feedback-gradient" />
        <div className="project-card__middle flex flex-col gap-y-16 items-center justify-center">
          {projects.map((project) => <ProjectCard key={project._id} project={project} />)}

        </div>
      </motion.div>
    </section>
  );
};
export default Projects;
