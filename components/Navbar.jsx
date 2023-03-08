'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import React, { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01 z-50" />
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
          onClick={toggleMenu}
        />
      </div>
      {menuOpen && (
        <div className="h-screen w-screen backdrop-blur-2xl z-40 absolute top-0 left-0" />
      )}
    </motion.nav>
  );
};

export default Navbar;
