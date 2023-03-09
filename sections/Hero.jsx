'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section
    className={`${styles.yPaddings} h-[90vh] md:py-6 hero-section overflow-auto`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=""
    >
      <div className="z-40 flex justify-center items-center flex-col">
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
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className={`${styles.heroImage} absolute h-[90vh] w-screen md:-mt-[100px] -mt-[12px] bottom-4 lg:mx-auto`}
      >
        <div className="absolute w-11/12 h-[17em] hero-gradient rounded-tl-[140px]  z-[10] bottom-[1rem] right-0 2xl:bottom-20 " />
        <Image
          height={100}
          width={400}
          src="/dev-derah.png"
          alt="dev-derah"
          className=" absolute bottom-[1rem] h-[55%] z-10 right-1/2 translate-x-1/2 object-cover her0-image 2xl:bottom-20"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
