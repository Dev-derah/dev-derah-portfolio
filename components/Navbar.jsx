'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import MenuButton from './MenuButton';
import styles from '../styles';
import { navContainer, navVariants } from '../utils/motion';

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
        <MenuButton
          isOpen={menuOpen}
          onClick={toggleMenu}
          strokeWidth="3"
          color="#ffff"
          lineProps={{ strokeLinecap: 'round' }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          width="24"
          height="16"
          className=" cursor-pointer z-50"
        />
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={navContainer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit="exit"
            className="nav-container text-white h-screen w-screen backdrop-blur-[300px] z-40 absolute top-0 left-0 overflow-hidden "
          >
            <nav className="flex justify-center items-center h-full w-full flex-col">
              <motion.a
                href="#about"
                onClick={toggleMenu}
                className={`${styles.navItems}`}
              >
                About
              </motion.a>
              <motion.a
                href="#skills"
                onClick={toggleMenu}
                className={`${styles.navItems}`}
              >
                Skills
              </motion.a>
              <motion.a
                href="#projects"
                onClick={toggleMenu}
                className={`${styles.navItems}`}
              >
                Projects
              </motion.a>
              <motion.a
                href="#contact"
                onClick={toggleMenu}
                className={`${styles.navItems}`}
              >
                Contact
              </motion.a>
              {/* <button
                type="button"
                className="flex items-center bg-gradient-to-r from-[#34acc7] to-[#a134c7] px-6 py-4 rounded-full font-bold"
              >
                <img src="/download.png" className="h-8 w-8 mr-2" />
                Resume
              </button> */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

// initial={{ y: 90, opacity: 0 }}
// animate={{ y: 0, opacity: 1 }}
// transition={{ duration: 0.4 }}
// exit={{
//   opacity: 0,
//   y: 90,
//   transition: {
//     ease: 'easeInOut',
//     delay: 0.5,
//   },
// }}
