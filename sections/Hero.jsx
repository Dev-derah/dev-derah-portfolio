'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  // <section className={`${styles.yPaddings} sm:pl-16 pl-6 h-screen`}>
  //   <motion.div
  //     variants={staggerContainer}
  //     initial="hidden"
  //     whileInView="show"
  //     viewport={{ once: false, amount: 0.25 }}
  //     className={`${styles.innerWidth} mx-auto flex flex-col`}
  //   >
  //     <div className="flex justify-center flex-col relative z-10">
  //       <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
  //         Dev
  //       </motion.h1>
  //       <motion.div
  //         variants={textVariant(1.2)}
  //         className="flex flex-row justify-center items-center"
  //       >
  //         <div className={styles.heroDText} />
  //         <h1 className={styles.heroHeading}>Ness</h1>
  //       </motion.div>
  //     </div>

  //     <motion.div
  //       variants={slideIn('right', 'tween', 0.2, 1)}
  //       className="relative w-full md:-mt-[20px] -mt-[12px]"
  //     >
  //       <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[-1] -top-[30px]" />

  //       <img
  //         src="/dev-derah.png"
  //         alt="hero_cover"
  //         className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 absolute"
  //       />

  //       <a href="#explore">
  //         <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] absolute z-10">
  //           <img
  //             src="/stamp.png"
  //             alt="stamp"
  //             className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
  //           />
  //         </div>
  //       </a>
  //     </motion.div>
  //   </motion.div>
  // </section>
  <section
    className="py-2 sm:pl-16 pl-6 h-screen w-screen overflow-hidden relative"
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.05 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div className="flex justify-center items-center flex-col relative z-10">
        {/* <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Dev
        </motion.h1> */}
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>ev</h1>
        </motion.div>
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Derah
        </motion.h1>
      </motion.div>
    </motion.div>
    <motion.div className="h-[90vh] w-screen">
      <div>
        <div className="absolute w-11/12 h-[300px] hero-gradient rounded-tl-[140px]  z-[10] bottom-[10%] right-0" />
        <img
          src="/dev-derah.png"
          className=" absolute bottom-[10%] z-40 right-1/2 translate-x-1/2 h-3/5 object-cover"
        />

        <motion.div
          className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] absolute z-0 lg:mr-2"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
