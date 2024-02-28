import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "emailjs-com";

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // State variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_urois7r",
        "template_0ensmhw",
        formRef.current,
        "1Of26gmcelKOE3kvC"
      )
      .then(
        (result) => {
          setSuccess(true);

          // Clear form inputs after successful submission
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setError(true);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-start'
          >
            <div>
              <h4 className='text-xl uppercase text-warning/80 font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together
              </h2>
            </div>
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-secondary transition-all'
              type='text'
              placeholder='Your name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete='name'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-secondary transition-all'
              type='email'
              required
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='email'
            />
            <textarea
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-secondary transition-all resize-none mb-12'
              type='text'
              placeholder='Your Message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoComplete='off'
            ></textarea>
            {/* <button className='btn btn-lg'>Send Message</button> */}
            <button className='btn btn-lg' type='submit' disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
            {error && <div className='error'>Error: Something went wrong!</div>}
            {success && <div className='success'>Success: Message sent!</div>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
