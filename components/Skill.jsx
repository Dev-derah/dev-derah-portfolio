'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn } from '../utils/motion';

const Skill = ({ title, logo }) => (
  <motion.div variants={fadeIn('up', 'tween', 0.2, 0.8)} className="badge silver">
    <div className="circle">
      <Image src={logo} alt={title} height={100} width={100} className="fa fa-bicycle" />
    </div>
    <div className="ribbon">{title}</div>
  </motion.div>
);

export default Skill;
