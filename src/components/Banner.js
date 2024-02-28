import React from "react";
import Image from "../assets/profile5.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
const Banner = () => {
  return (
    <section
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center '
      id='home'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[550px] mx-auto  bg-top'
          >
            {" "}
            <img src={Image} alt='' />
          </motion.div>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[70px]'
            >
              <span> PRECIOUS ROBERTS</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Dreamer",
                  2000,
                ]}
                speed={50}
                className='text-warning/60'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=' mb-8 max-w-lg mx-auto lg:mx-0'
            >
              Elevating Digital Experiences with Precision and Passion. Fusing
              creativity and code to build extraordinary digital experiences
              that captivate and engage. Crafting the future of user interfaces,
              one line of code at a time.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <Link to='contact'>
                <button className='btn btn-lg'>Contact me</button>
              </Link>
              <Link to='work' className='text-gradient btn-link cursor-pointer'>
                <a>My Portfolio</a>
              </Link>
            </motion.div>
            <div>
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
              >
                <a
                  href='https://github.com/yhujae'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub />
                </a>
                <a
                  href='https://www.linkedin.com/in/precious-roberts-404a37254'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLinkedinIn />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
