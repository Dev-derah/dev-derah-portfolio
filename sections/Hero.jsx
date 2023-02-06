'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section
    className={`${styles.yPaddings} h-screen md:py-6 hero-section`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.div
          variants={textVariant(1.1)}
          className="flex flex-row justify-center items-center"
        >
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>ev</h1>
        </motion.div>
        <motion.h1 variants={textVariant(1.2)} className={styles.heroHeading}>
          Derah
        </motion.h1>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className={`${styles.heroImage}absolute h-[70vh] w-screen md:-mt-[100px] -mt-[12px] bottom-4`}
      >
        <div className="absolute w-11/12 h-[300px] hero-gradient rounded-tl-[140px]  z-[10] bottom-[1rem] right-0" />
        <img
          src="/dev-derah.png"
          className=" absolute bottom-[1rem] h-4/5 z-40 right-1/2 translate-x-1/2 object-cover"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
