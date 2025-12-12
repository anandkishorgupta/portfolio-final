import React, { useEffect } from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/about.jpg";
import "./About.css";
import updatePageSEO from "../utils/seo";

const About = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const textVariants = {
    hidden: { x: 50, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 20 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // SEO*
  useEffect(() => {
    updatePageSEO({
      title: "Nara Prasad Sitaula",
      description:
        "Learn about the background, leadership, and achievements of Nara Prasad Sitaula.",
    });
  }, []);

  return (
    <motion.div
      className="p-10 min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50"
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-6xl md:text-5xl font-bold mb-6 text-black">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Image */}
          <motion.div className="flex-1" variants={imageVariants}>
            <img
              src={aboutImg}
              alt="About"
              className="w-full h-[366px] object-cover rounded-xl shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex-[2] text-sm md:text-base leading-relaxed text-left space-y-6"
            variants={textVariants}
          >
            <motion.p className="about-paragraph ">
              Nara Prasad Sitaula, born in Taplejung and 46 years old, is a
              distinguished business leader and entrepreneur with a Bachelor’s
              degree in Business Administration and extensive experience in
              management, energy, and cooperative sectors. He currently serves
              as the Chairman of Devshree Ventures Pvt. Ltd. and Devshree
              Multipurpose Cooperative, and as the Director of Niko Energy
              Limited. Additionally, he is the Managing Director of Waling
              Khurkhola Hydropower Ltd. and has previously served as a Director
              at Kohinoor Wires & Steel. With over 22 years of experience at LIC
              Nepal as an AM Agency Manager and 7 years of teaching experience
              at Roseboard School, he brings a strong combination of leadership
              and professional expertise. He is also an investor in prominent
              companies across hydropower, cement, equity funds, and hospitality
              sectors. Beyond his business ventures, Nara Prasad Sitaula is
              actively engaged in community service. He serves as the Chairman
              of Sitaula Sewa Samaj, Bhaktapur, and has previously held position
              as Director and currently serves as Advisor at Bhaktapur Jilla
              Baideshya Sahakari Sangh.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
