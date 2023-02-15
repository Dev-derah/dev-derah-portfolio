'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Skill = ({ title, logo }) => (
  <motion.div variants={fadeIn('up', 'tween', 0.2, 0.8)} className="badge silver">
    <div className="circle">
      <img src={logo} className="fa fa-bicycle" />
    </div>
    <div className="ribbon">{title}</div>
  </motion.div>
);

export default Skill;
