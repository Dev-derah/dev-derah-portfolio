/* eslint-disable jsx-a11y/anchor-is-valid */

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
          variants={fadeIn('right', 'tween', 0.2, 0.5)}
          className="glassmorphism w-4/5 flex-[0.5] items-center md:h-60 md:w-[40rem]  lg:h-80 lg:max-h-[900px]  flex flex-col gap-4 h-40 md:flex-row sm:p-8 p-4 rounded-[32px] relative"
        >
          <div className="uppercase justify-center [writing-mode:tb-rl] gap-2 text-gray-400 hidden text-xs md:flex h-[400px]">
            <p>Typescript</p>
            <p>Tailwind css</p>
            <p>Sanity io</p>
            <p>Framer motion</p>
          </div>
          <div className="basis-2/4 md:h-[400px] md:w-[300px] max-w-[500px]">
            <img
              src="/samplePhoto.jpg"
              className="h-[300px] w-[200px] rounded-[32px] md:h-[400px] md:w-300px lg:w-full lg:max-h-[500px]"
            />
          </div>
          <div className=" flex flex-wrap md:gap-y-6 flex-col md:w-60 lg:h-[300px] text-left items-center md:items-start justify-center ">
            <h3 className="project-title text-3xl text-white font-black">
              Banky WEB SITE
            </h3>
            <div className="md:gap-y-4">
              <a href="#">
                <h4 className="website_link relative text-gray-400 my-1">
                  View website
                </h4>
              </a>
              <a href="#">
                <h4 className="website_link relative text-gray-400 ">
                  Source Code
                </h4>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);
export default Projects;
