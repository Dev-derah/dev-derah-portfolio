'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlFor } from '../lib/sanity.client';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = ({ socials }) => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} flex flex-col gap-8 `}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[40px] text-[25px] text-white">
          Need a frontend enginner?
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] cursor-pointer"
        >
          <Image
            src="/chat.svg"
            alt="chat"
            width={24}
            height={24}
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">Lets talk</span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Contact Me</h4>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a href={social.link}>
                <Image
                  key={social._id}
                  height={24}
                  width={24}
                  src={urlFor(social.logo).url()}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
