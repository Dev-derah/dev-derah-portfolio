"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Hello!</span> my name is Derah,I
        am a{" "}
        <span className="font-extrabold text-white">frontend engineer</span>{" "}
        who is passionate about turning ideas into{" "}
        <span className="font-extrabold text-white">
          high perfoming,user centric applications.
        </span>{" "}
        When I am not {" "}
        {/* <span className="font-extrabold text-white">VR</span> */}
        tinkering with new technologies,{" "}
        {/* <span className="font-extrabold text-white">explore</span>  */}
        You are most likely going to find me listening to my favourite songs.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
