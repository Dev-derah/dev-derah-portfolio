'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { urlFor } from '../lib/sanity.client';
import { useHoverEffect } from '../utils/useHoverEffect';

const ProjectCard = ({ project }) => {
  const projectImage = useRef(null);
  const currentImage = urlFor(project.image).url();
  const hoverImage = urlFor(project.hoverImage).url();
  useHoverEffect(projectImage, currentImage, hoverImage);
  return (
    <motion.div
      variants={fadeIn('right', 'tween', 0.5, 1)}
      className="glassmorphism w-4/5 flex-[0.5] items-center md:h-60 md:w-[40rem]  lg:h-80 lg:max-h-[900px]  flex flex-col gap-4 h-40 md:flex-row sm:p-8 p-4 rounded-[32px] relative"
    >
      <div className="uppercase justify-center gap-2 [writing-mode:tb-rl]  text-gray-400 hidden text-xs md:flex h-[400px]">
        {project.techstack.map((tech) => (
          <p className="tracking-widest" key={tech._id}>
            {tech.title}
          </p>
        ))}
      </div>
      <div
        className="w-full diss basis-2/4  md:h-[400px] md:w-[300px] max-w-[500px] sm:w-full"
        ref={projectImage}
      >
        {/* <Image
          src={urlFor(project.image).url()}
          height={300}
          width={200}
          alt="project"
          className="h-[300px] w-[200px] rounded-[32px] md:h-[400px] md:w-300px lg:w-full lg:max-h-[500px]"
        /> */}
      </div>
      <div className=" flex flex-wrap md:gap-y-6 flex-col md:w-60 lg:h-[300px] text-left items-center md:items-start justify-center ">
        <h3 className="project-title text-3xl text-white font-black">
          {project.name}
        </h3>
        <div className="md:gap-y-4">
          <a href={project.websiteLink} target="_blank" rel="noreferrer">
            <h4 className="website_link relative text-gray-400 my-1">
              View website
            </h4>
          </a>
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <h4 className="website_link relative text-gray-400 ">
              Source Code
            </h4>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
