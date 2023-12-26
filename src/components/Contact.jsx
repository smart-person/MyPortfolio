import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { skype, email, github, discord } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_otpyaln", // service_id
        "template_jyzolum", // template_id
        {
          // object with some options
          from_name: form.name,
          to_name: "Alie",
          from_email: form.email,
          to_email: "aliekutter0827@gmail.com",
          message: form.message,
        },
        "A5gY2Ny_0Axz-Tw5F" // public_key in emailjs
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong!");
        }
      );
  };

  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
        alert("Contact Info is copied to clipboard!");
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="my-10">
          <p className="text-white text-2xl font-bold mb-4 mb-2">By Email</p>
          <div className="flex flex-row items-center space-x-5 text-lg text-gray-300">
            <img src={email} className="w-1/6" />
            <div>
              <p className="text-2xl">smart-person</p>
              <a
                onClick={() => copyToClipboard("smart09051025@gmail.com")}
                className="underline cursor-pointer"
              >
                smart09051025@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="my-10">
          <p className="text-white text-2xl font-bold mb-4 mb-2">By Skype</p>
          <div className="flex flex-row items-center space-x-5 text-lg text-gray-300">
            <img src={skype} className="w-1/6" />
            <div>
              <p className="text-2xl">smart-person</p>
              <a
                onClick={() => copyToClipboard("live:.cid.a42da663aacfa628")}
                className="underline cursor-pointer"
              >
                live:.cid.a42da663aacfa628
              </a>
            </div>
          </div>
        </div>

        <div className="my-10">
          <p className="text-white text-2xl font-bold mb-4 mb-2">By Discord</p>
          <div className="flex flex-row items-center space-x-5 text-lg text-gray-300">
            <img src={discord} className="w-1/6" />
            <div>
              <p className="text-2xl">smart</p>
              <a
                onClick={() => copyToClipboard("smart_person09051025")}
                className="underline cursor-pointer"
              >
                smart_person09051025
              </a>
            </div>
          </div>
        </div>

        <div className="my-10">
          <p className="text-white text-2xl font-bold mb-4 mb-2">GitHub</p>
          <div className="flex flex-row items-center space-x-5 text-lg text-gray-300">
            <img src={github} className="w-1/6" />
            <div>
              <p className="text-2xl">smart-person</p>
              <a
                href="https://github.com/smart-person"
                target="_blank"
                className="underline cursor-pointer"
              >
                https://github.com/smart-person
              </a>
            </div>
          </div>
        </div>
        {/* <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            ></textarea>
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
              {loading ? 'Sending...' : 'Send'}
          </button>
        </form> */}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
