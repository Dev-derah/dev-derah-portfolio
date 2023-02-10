'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
      <img src="/my_logo.png" className="h-16 " />
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-16 object-contain cursor-pointer"
      />
    </div>
  </motion.nav>
);

export default Navbar;
