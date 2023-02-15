/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

// import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import styles from '../styles';
import { ProjectCard, TitleText, TypingText } from '../components';
import demowebsite from '../public/demowebsite.png';
import demowebsite2 from '../public/placeholder.jpg';

const data = [
  {
    id: 1,
    title: 'Banky',
    imgage: { demowebsite },
    techStack: ['React', 'sanity', 'scss', 'framer motion'],
  },
  {
    id: 2,
    title: 'Banky web app',
    imgage: { demowebsite2 },
    techStack: ['React', 'sanity', 'scss', 'framer motion'],
  },
  {
    id: 3,
    title: 'lender sqr',
    imgage: { demowebsite },
    techStack: ['Typescript', 'scss', 'framer motion'],
  },
];

const Projects = () => (
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
        {data.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </motion.div>
  </section>
);
export default Projects;
