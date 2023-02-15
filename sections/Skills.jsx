'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import styles from '../styles';
import { TypingText } from '../components/CustomTexts';
import Skill from '../components/Skill';
import { urlFor } from '../sanity';

const Skills = ({ skills }) => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.paddings} ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| My Skill Set" textStyles="text-center" />

      <div className="uppercase text-white grid grid-cols-2 justify-items-center gap-5 md:grid-cols-3 lg:grid-cols-4 mt-8 w-full text-center">
        {skills.map((skill) => (
          <Skill key={skill._id} title={skill.title} logo={urlFor(skill.logo)} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;