/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

// import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';

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
      <div className="project-card__middle flex flex-col gap-y-16 items-center justify-center" />
    </motion.div>
  </section>
);
export default Projects;
