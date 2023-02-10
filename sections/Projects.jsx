'use client';

// import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
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

      {/* <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ProjectCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div> */}
      <div className="feedback-gradient" />
      <div className="flex flex-col gap-y-16 items-center justify-center">
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="glassmorphism flex-[0.5] items-center md:h-60 lg:h-80 lg:max-h-[900px] lg:w-80  flex flex-col justify-center gap-4 h-40 md:flex-row sm:p-8 p-4 rounded-[32px] relative"
        >
          <div className="uppercase justify-center [writing-mode:tb-rl] gap-2 text-gray-400 hidden text-xs md:flex h-[400px]">
            <p>Typescript</p>
            <p>Tailwind css</p>
            <p>Sanity io</p>
            <p>Framer motion</p>
          </div>
          <div className="h-4/5 md:h-[400px] max-w-[500px]">
            <img
              src="/samplePhoto.jpg"
              className="h-full rounded-[32px] w-full lg:max-h-[500px]"
            />
            {/* <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Samantha
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Founder Metaverus
            </p> */}
          </div>
          <div className="h-full flex flex-col  items-center text-start ">
            <h3 className="text-3xl text-white font-black">Banky Web app</h3>
            {/* <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
              “With the development of today's technology, metaverse is very”
            </p> */}
            <p>View website</p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="glassmorphism flex-[0.5] items-center md:h-60 lg:h-80 lg:max-h-[900px] lg:w-60  flex flex-col justify-center gap-4 h-40 md:flex-row sm:p-8 p-4 rounded-[32px] relative"
        >
          <div className="uppercase justify-center [writing-mode:tb-rl] gap-2 text-gray-400 hidden text-xs md:flex h-[400px]">
            <p>Typescript</p>
            <p>Tailwind css</p>
            <p>Sanity io</p>
            <p>Framer motion</p>
          </div>
          <div className="h-4/5 md:h-[400px] max-w-[500px]">
            <img
              src="/samplePhoto.jpg"
              className="h-full rounded-[32px] w-full lg:max-h-[500px]"
            />
            {/* <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Samantha
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Founder Metaverus
            </p> */}
          </div>
          <div className="h-full flex flex-col items-center text-start ">
            <h3 className="text-3xl text-white font-black">Banky Web</h3>
            {/* <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
              “With the development of today's technology, metaverse is very”
            </p> */}
            <p>View website</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);
export default Projects;
