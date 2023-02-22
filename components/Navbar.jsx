'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
    >
      <Image
        src="/my_logo.png"
        height={64}
        width={64}
        className="h-16"
        alt="Dev-Derah"
      />
      <Image
        src="/menu.svg"
        alt="menu"
        height={16}
        width={24}
        className="w-[24px] h-16 object-contain cursor-pointer"
      />
    </div>
  </motion.nav>
);

export default Navbar;
