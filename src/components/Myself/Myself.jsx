// import React from "react";
// import { motion } from "framer-motion";
// // import Image1 from "../../assets/portfolio-1.jpg";
// import Image2 from "../../assets/portfolio-2.jpg";
// import Image3 from "../../assets/portfolio-3.jpg";
// import Image4 from "../../assets/portfolio-4.jpg";
// import Image5 from "../../assets/portfolio-5.jpg";
// // import Image6 from "../../assets/portfolio-6.jpg";

// const Myself = () => {
//   const images = [Image2, Image3, Image4, Image5];

//   return (
//     <section id="portfolio" className="relative py-20 bg-white overflow-hidden">
//       {/* Floating background circles */}
//       {[...Array(3)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute bg-yellow-200/20 rounded-full"
//           style={{
//             width: `${100 + i * 60}px`,
//             height: `${100 + i * 60}px`,
//             top: `${Math.random() * 80}%`,
//             left: `${Math.random() * 80}%`,
//           }}
//           animate={{
//             y: [0, 20, 0],
//             x: [0, 15, 0],
//           }}
//           transition={{
//             duration: 8 + i * 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       <div className="mx-auto px-6 relative z-10">
//         {/* Section Title */}
//         <motion.h2
//           className="text-4xl font-extrabold text-center mb-12"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           My Self
//         </motion.h2>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {images.map((img, index) => (
//             <motion.div
//               key={index}
//               className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.05, rotate: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <img
//                 src={img}
//                 alt={`Project ${index + 1}`}
//                 className="w-full h-64 object-cover"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Myself;

// optimised code
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image2 from "../../assets/portfolio-2.jpg";
import Image3 from "../../assets/portfolio-3.jpg";
import Image4 from "../../assets/portfolio-4.jpg";
import Image5 from "../../assets/portfolio-5.jpg";

const Myself = () => {
  const images = useMemo(() => [Image2, Image3, Image4, Image5], []);

  // Precompute floating circles positions and sizes
  const floatingCircles = useMemo(() => {
    return [...Array(3)].map((_, i) => ({
      size: 100 + i * 60,
      top: Math.random() * 80,
      left: Math.random() * 80,
      duration: 8 + i * 2,
    }));
  }, []);

  return (
    <section id="portfolio" className="relative py-20 bg-white overflow-hidden">
      {/* Floating background circles */}
      {floatingCircles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute bg-yellow-200/20 rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            top: `${circle.top}%`,
            left: `${circle.left}%`,
          }}
          animate={{
            y: [0, 20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Self
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={img}
                alt={`Project ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Myself);
