import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const services = [
  {
    name: "Web App Development",
    description:
      "Developing web applications with frameworks such as React.js, implementing robust state management for complex applications, and seamlessly integrating with backend services and APIs.",
    link: "Learn more",
  },
  {
    name: "User Interface (UI) Design",
    description:
      "Specialize in designing visually appealing and user-friendly interfaces, creating wireframes and prototypes, and implementing design principles to enhance the overall user experience.",
    link: "Learn more",
  },
  {
    name: "Website Development",
    description:
      "Create the structure and layout of web pages, implement responsive design for mobile and tablet devices, and build interactive and dynamic user interfaces",
    link: "Learn more",
  },
  {
    name: "Frontend Frameworks",
    description:
      "Working with popular frontend frameworks and libraries while also utilizing component-based architecture for modular development.",
    link: "Learn more",
  },
];
const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom  bg-no-repeat h-[640px]
        mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-warning/80 mb-6'>what i want</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I am Front-end React Developer with over 2 years of experience
            </h3>
            <a
              href='https://github.com/yhujae'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='btn btn-sm'>See my work</button>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[140px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='#'
                        className=' btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
