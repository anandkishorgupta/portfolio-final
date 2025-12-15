// // professional journey page
// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import updatePageSEO from "../utils/seo";

// const experiences = [
//   {
//     role: "Chairman",
//     company: "Devshree Ventures Pvt Ltd",
//     period: "Current",
//     description: "Leading strategic initiatives and business growth.",
//     link: "#",
//   },
//   {
//     role: "Chairman",
//     company: "Devshree Multipurpose Cooperative",
//     period: "Current",
//     description: "Overseeing cooperative operations and stakeholder relations.",
//     link: "https://devashree.com.np/",
//   },
//   {
//     role: "Director",
//     company: "Niko Energy Limited",
//     period: "Current",
//     description: "Guiding energy projects and corporate strategy.",
//     link: "https://nikoenergyltd.com/team/nara-prasad-sitaula-narayan/",
//   },
//   {
//     role: "Managing Director",
//     company: "Waleng Tumhok Hydropower Pvt Ltd",
//     period: "Current",
//     description: "Managing hydropower operations and development projects.",
//     link: "#",
//   },
//   {
//     role: "Former Director",
//     company: "Kohinoor Wires and Steel",
//     period: "Former",
//     description: "Contributed to company growth and strategic decisions.",
//     link: "#",
//   },
//   {
//     role: "Agency Manager",
//     company: "LIC Nepal",
//     period: "current (22 years Experience)",
//     description:
//       "Extensive experience in managing insurance agency operations.",
//     link: "https://www.licnepal.com.np/",
//   },
//   {
//     role: "Teacher",
//     company: "Rosebud School",
//     period: "7 years",
//     description: "Guided and taught students across multiple subjects.",
//     link: "Rosebud School",
//   },
// ];

// const ExperienceTimeline = () => {
//   // // SEO
//   useEffect(() => {
//     updatePageSEO({
//       title: "Nara Prasad Sitaula",
//       description:
//         "Explore the extensive 22+ year career of Nara Prasad Sitaula across LIC Nepal, Devshree Ventures, hydropower projects, and multiple directorships in Nepal business sector.",
//       keywords:
//         "Professional Experience, Career Journey, LIC Nepal, Directorships, Business Portfolio",
//     });
//   }, []);

//   return (
//     <section className=" overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-24 relative"
//         >
//           Professional Journey
//           <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-28 h-1.5 bg-linear-to-r from-yellow-500 to-amber-500 rounded-full"></span>
//         </motion.h2>

//         <div className="relative">
//           {/* Vertical Timeline */}
//           <div className="absolute left-10 top-0 bottom-0 w-1 bg-linear-to-b from-yellow-500 via-amber-300 to-amber-200 rounded-full"></div>

//           {experiences.map((exp, index) => {
//             const isValidLink =
//               exp.link && exp.link !== "#" && exp.link.startsWith("http");

//             const CardContent = (
//               <motion.div
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="relative mb-20 flex items-start"
//               >
//                 {/* Golden Dot */}
//                 <div className="absolute left-7 top-4 w-5 h-5 rounded-full bg-white border-4 border-yellow-500 z-10 shadow-lg shadow-amber-200"></div>

//                 {/* Card */}
//                 <motion.div
//                   whileHover={{
//                     y: -6,
//                     boxShadow: "0 24px 38px -12px rgba(200,150,0,0.25)",
//                   }}
//                   className="bg-white/90 backdrop-blur-sm border border-amber-200 rounded-2xl p-8 w-full ml-16 shadow-md transition-all duration-300"
//                 >
//                   {/* Yellow Badge */}
//                   <span className="text-sm font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded-full mb-3 inline-block">
//                     {exp.period}
//                   </span>

//                   {/* Role */}
//                   <h3 className="text-2xl font-bold text-gray-900">
//                     {exp.role}
//                   </h3>

//                   {/* Company */}
//                   <p className="text-base font-medium text-gray-700 mt-1">
//                     {exp.company}
//                   </p>

//                   {/* Description */}
//                   <p className="text-gray-600 mt-4 text-base leading-relaxed">
//                     {exp.description}
//                   </p>
//                 </motion.div>
//               </motion.div>
//             );

//             return isValidLink ? (
//               <a
//                 key={index}
//                 href={exp.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {CardContent}
//               </a>
//             ) : (
//               <div key={index}>{CardContent}</div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceTimeline;

// optimised code -----------
import React, { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import updatePageSEO from "../utils/seo";

// Experience Card as memoized component
const ExperienceCard = React.memo(({ exp, index }) => {
  const isValidLink = useMemo(
    () => exp.link && exp.link !== "#" && exp.link.startsWith("http"),
    [exp.link]
  );

  const cardMotion = useMemo(
    () => ({
      initial: { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.6, delay: index * 0.1 },
    }),
    [index]
  );

  const hoverEffect = useMemo(
    () => ({
      y: -6,
      boxShadow: "0 24px 38px -12px rgba(200,150,0,0.25)",
    }),
    []
  );

  const CardContent = (
    <motion.div {...cardMotion} className="relative mb-20 flex items-start">
      {/* Golden Dot */}
      <div className="absolute left-7 top-4 w-5 h-5 rounded-full bg-white border-4 border-yellow-500 z-10 shadow-lg shadow-amber-200"></div>

      {/* Card */}
      <motion.div
        whileHover={hoverEffect}
        className="bg-white/90 backdrop-blur-sm border border-amber-200 rounded-2xl p-8 w-full ml-16 shadow-md transition-all duration-300"
      >
        <span className="text-sm font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded-full mb-3 inline-block">
          {exp.period}
        </span>
        <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
        <p className="text-base font-medium text-gray-700 mt-1">
          {exp.company}
        </p>
        <p className="text-gray-600 mt-4 text-base leading-relaxed">
          {exp.description}
        </p>
      </motion.div>
    </motion.div>
  );

  return isValidLink ? (
    <a key={index} href={exp.link} target="_blank" rel="noopener noreferrer">
      {CardContent}
    </a>
  ) : (
    <div key={index}>{CardContent}</div>
  );
});

const ExperienceTimeline = () => {
  // Memoized experiences array
  const experiences = useMemo(
    () => [
      {
        role: "Chairman",
        company: "Devshree Ventures Pvt Ltd",
        period: "Current",
        description: "Leading strategic initiatives and business growth.",
        link: "#",
      },
      {
        role: "Chairman",
        company: "Devshree Multipurpose Cooperative",
        period: "Current",
        description:
          "Overseeing cooperative operations and stakeholder relations.",
        link: "https://devashree.com.np/",
      },
      {
        role: "Director",
        company: "Niko Energy Limited",
        period: "Current",
        description: "Guiding energy projects and corporate strategy.",
        link: "https://nikoenergyltd.com/team/nara-prasad-sitaula-narayan/",
      },
      {
        role: "Managing Director",
        company: "Waleng Tumhok Hydropower Pvt Ltd",
        period: "Current",
        description: "Managing hydropower operations and development projects.",
        link: "#",
      },
      {
        role: "Former Director",
        company: "Kohinoor Wires and Steel",
        period: "Former",
        description: "Contributed to company growth and strategic decisions.",
        link: "#",
      },
      {
        role: "Agency Manager",
        company: "LIC Nepal",
        period: "current (22 years Experience)",
        description:
          "Extensive experience in managing insurance agency operations.",
        link: "https://www.licnepal.com.np/",
      },
      {
        role: "Teacher",
        company: "Rosebud School",
        period: "7 years",
        description: "Guided and taught students across multiple subjects.",
        link: "Rosebud School",
      },
    ],
    []
  );

  // SEO update once
  useEffect(() => {
    updatePageSEO({
      title: "Nara Prasad Sitaula",
      description:
        "Explore the extensive 22+ year career of Nara Prasad Sitaula across LIC Nepal, Devshree Ventures, hydropower projects, and multiple directorships in Nepal business sector.",
      keywords:
        "Professional Experience, Career Journey, LIC Nepal, Directorships, Business Portfolio",
    });
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-24 relative"
        >
          Professional Journey
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-28 h-1.5 bg-linear-to-r from-yellow-500 to-amber-500 rounded-full"></span>
        </motion.h2>

        <div className="relative">
          {/* Vertical Timeline */}
          <div className="absolute left-10 top-0 bottom-0 w-1 bg-linear-to-b from-yellow-500 via-amber-300 to-amber-200 rounded-full"></div>

          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ExperienceTimeline);
