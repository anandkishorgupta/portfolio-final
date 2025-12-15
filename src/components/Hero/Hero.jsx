// import React, { useEffect, useState, useRef } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import heroImage from "../../assets/hero.jpg";
// import updatePageSEO from "../utils/seo";

// const HeroSection = () => {
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const imageRef = useRef(null);
//   const isInView = useInView(imageRef, { once: true, margin: "-100px" });

//   useEffect(() => {
//     updatePageSEO({
//       title: "Chairman & Business Leader - Nara Prasad Sitaula",
//       description:
//         "Official website of Nara Prasad Sitaula, Chairman of Devshree Ventures.",
//       image: "/hero-og.jpg",
//       keywords: "Chairman Nepal, Devshree Ventures, Business Leader",
//       canonical: "https://naraprasadsitaula.com/",
//     });
//   }, []);

//   const roles = [
//     "Chairman of Devshree Ventures Pvt Ltd",
//     "Chairman of Devshree Multipurpose Cooperative",
//     "Director of Niko Energy Limited",
//     "Managing Director of Waling Khurkhola Hydropower Ltd",
//     "Former Director of Kohinoor Wires and Steel",
//   ];

//   // Animation variants for the magical role list
//   const magicDustVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.3,
//       rotate: -5,
//       filter: "blur(20px) brightness(2)",
//     },
//     visible: (i) => ({
//       opacity: [0, 1, 1],
//       scale: [0.3, 1.1, 1],
//       rotate: [-5, 2, 0],
//       filter: [
//         "blur(20px) brightness(2)",
//         "blur(0px) brightness(1)",
//         "blur(0px) brightness(1)",
//       ],
//       transition: {
//         delay: i * 0.2,
//         duration: 1,
//         times: [0, 0.7, 1],
//         ease: "easeOut",
//       },
//     }),
//   };

//   // NEW: Advanced image reveal animation variants
//   const imageRevealVariants = {
//     hidden: {
//       clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
//       filter: "brightness(0) contrast(0.8) blur(20px)",
//       scale: 0.9,
//       rotateY: 30,
//     },
//     visible: {
//       clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
//       filter: "brightness(1) contrast(1) blur(0px)",
//       scale: 1,
//       rotateY: 0,
//       transition: {
//         duration: 1.2,
//         ease: [0.77, 0, 0.175, 1],
//         clipPath: {
//           duration: 1.5,
//           ease: "circOut",
//         },
//         filter: {
//           duration: 1.8,
//           ease: "easeOut",
//         },
//       },
//     },
//   };

//   // NEW: Particle burst effect
//   const particleVariants = {
//     hidden: { opacity: 0, scale: 0 },
//     visible: (i) => ({
//       opacity: [0, 1, 0],
//       scale: [0, 1.5, 0],
//       x: i % 2 === 0 ? [-50, 50] : [50, -50],
//       y: i % 2 === 0 ? [-30, 30] : [30, -30],
//       transition: {
//         duration: 1.5,
//         delay: i * 0.05,
//         ease: "easeOut",
//       },
//     }),
//   };

//   // NEW: Image shine overlay animation
//   const shineVariants = {
//     hidden: { x: "-100%", opacity: 0 },
//     visible: {
//       x: "200%",
//       opacity: [0, 0.8, 0],
//       transition: {
//         duration: 2,
//         delay: 1,
//         ease: "easeInOut",
//         repeat: Infinity,
//         repeatDelay: 3,
//       },
//     },
//   };

//   // NEW: Floating frame animation
//   const frameFloatVariants = {
//     initial: { y: 0 },
//     animate: {
//       y: [0, -10, 0],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   // NEW: Glow pulse animation
//   const glowPulseVariants = {
//     initial: { opacity: 0.5, scale: 1 },
//     animate: {
//       opacity: [0.3, 0.7, 0.3],
//       scale: [1, 1.05, 1],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <section
//       className="
//         w-full min-h-screen flex flex-col-reverse md:flex-row items-center
//         px-6 md:px-24 pt-32 pb-10 relative overflow-hidden
//         bg-gradient-to-br from-[#FFF9DE]/70 via-[#FFEFAF]/50 to-[#F7D96E]/60
//         backdrop-blur-2xl
//       "
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute w-[450px] h-[450px] bg-[#FFE89F]/70 blur-[160px] top-10 left-10 rounded-full"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#FFF5C7]/60 blur-[200px] bottom-0 right-0 rounded-full"></div>
//         <div className="absolute w-[300px] h-[300px] bg-[#FFD970]/40 blur-[140px] bottom-20 left-1/3 rounded-full"></div>

//         {/* Magical particles background */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(15)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
//               initial={{
//                 x: Math.random() * window.innerWidth,
//                 y: Math.random() * window.innerHeight,
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: [0, 0.5, 0],
//                 scale: [0, 1.5, 0],
//               }}
//               transition={{
//                 duration: 2 + Math.random(),
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//                 ease: "easeInOut",
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Left Text Section */}
//       <motion.div
//         className="flex-1 lg:mb-[50px] flex flex-col justify-center space-y-3 md:space-y-4
//                  text-black text-center md:text-left relative z-10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.div
//           className="space-y-2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             className="flex flex-col"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.6 }}
//           >
//             <span className="text-2xl sm:text-3xl">I'm</span>
//             <motion.h1
//               className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
//             >
//               Nara Prasad Sitaula
//             </motion.h1>
//           </motion.div>

//           <motion.div
//             className="flex items-center gap-2 text-xl sm:text-2xl text-gray-700"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//           >
//             <span className="text-gray-600">also known as</span>
//             <motion.span
//               className="text-amber-800 font-semibold px-3 py-1 bg-amber-50/50 rounded-lg"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.5, duration: 0.4 }}
//             >
//               Narayan Sitaula
//             </motion.span>
//           </motion.div>
//         </motion.div>

//         {/* Magically Animated Role List */}
//         <div className="mt-6 md:mt-8 space-y-4 relative">
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100/10 to-transparent"
//             initial={{ x: "-100%" }}
//             animate={{ x: "100%" }}
//             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//           />

//           <motion.ul className="space-y-3 md:space-y-4 relative z-10">
//             <AnimatePresence>
//               {roles.map((role, index) => (
//                 <motion.li
//                   key={index}
//                   className="text-xl sm:text-2xl font-light leading-tight relative"
//                   custom={index}
//                   variants={magicDustVariants}
//                   initial="hidden"
//                   animate="visible"
//                 >
//                   <motion.span
//                     className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-yellow-500"
//                     initial={{ scale: 0, rotate: 0 }}
//                     animate={{
//                       scale: [0, 1, 0],
//                       rotate: 360,
//                     }}
//                     transition={{
//                       delay: index * 0.2 + 0.5,
//                       duration: 0.8,
//                       ease: "easeOut",
//                     }}
//                   >
//                     ✨
//                   </motion.span>
//                   {role}
//                   <motion.span
//                     className="absolute inset-0 bg-gradient-to-r from-yellow-200/0 via-yellow-200/20 to-yellow-200/0"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: [0, 0.3, 0] }}
//                     transition={{
//                       delay: index * 0.2 + 1,
//                       duration: 2,
//                       repeat: Infinity,
//                       repeatDelay: 2,
//                     }}
//                   />
//                 </motion.li>
//               ))}
//             </AnimatePresence>
//           </motion.ul>
//         </div>
//       </motion.div>

//       {/* Right Image with ADVANCED Animation */}
//       <motion.div
//         ref={imageRef}
//         className="flex-1 flex justify-center mb-8 md:mb-0 relative z-10"
//         initial={{ opacity: 0 }}
//         animate={isInView ? { opacity: 1 } : {}}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Main image container */}
//         {/* <div className="relative w-full max-w-md md:max-w-lg"> */}
//         <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg">
//           {/* 1. OUTER GLOW PULSE */}
//           <motion.div
//             className="absolute -inset-6 bg-gradient-to-r from-yellow-400/40 via-amber-500/40 to-yellow-400/40 rounded-3xl blur-2xl"
//             variants={glowPulseVariants}
//             initial="initial"
//             animate="animate"
//           />

//           {/* 2. FLOATING FRAME */}
//           <motion.div
//             className="absolute -inset-4 rounded-2xl border-2 border-yellow-300/30"
//             variants={frameFloatVariants}
//             initial="initial"
//             animate="animate"
//           />

//           {/* 3. PARTICLE BURST EFFECT */}
//           <div className="absolute inset-0 overflow-hidden rounded-2xl">
//             {[...Array(20)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-1 h-1 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                 }}
//                 variants={particleVariants}
//                 initial="hidden"
//                 animate={isInView ? "visible" : "hidden"}
//                 custom={i}
//               />
//             ))}
//           </div>

//           {/* 4. IMAGE REVEAL CONTAINER */}
//           <motion.div
//             className="relative overflow-hidden rounded-2xl shadow-2xl"
//             variants={imageRevealVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//           >
//             {/* 5. IMAGE SHINE OVERLAY */}
//             <motion.div
//               className="absolute inset-0 z-20 pointer-events-none"
//               variants={shineVariants}
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//             >
//               <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
//             </motion.div>

//             {/* 6. IMAGE WITH LOADING STATE */}
//             <div className="relative">
//               {/* Loading skeleton */}
//               <AnimatePresence>
//                 {!imageLoaded && (
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-yellow-200/50 z-10"
//                     initial={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//                       animate={{
//                         x: ["-100%", "100%"],
//                       }}
//                       transition={{
//                         duration: 1.5,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                     />
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* 7. MAIN IMAGE WITH FILTER ANIMATION */}
//               <motion.img
//                 src={heroImage}
//                 alt="Narayan Sitaula"
//                 className="w-full h-auto rounded-2xl relative z-10"
//                 onLoad={() => setImageLoaded(true)}
//                 initial={{
//                   filter: "grayscale(0.5) brightness(1.1)",
//                   scale: 1.02,
//                 }}
//                 animate={
//                   imageLoaded && isInView
//                     ? {
//                         filter: [
//                           "grayscale(0.5) brightness(1.1)",
//                           "grayscale(0) brightness(1)",
//                         ],
//                         scale: [1.02, 1],
//                       }
//                     : {}
//                 }
//                 transition={{
//                   duration: 1.5,
//                   ease: "easeOut",
//                   filter: {
//                     duration: 2,
//                     ease: "circOut",
//                   },
//                 }}
//                 style={{
//                   transformStyle: "preserve-3d",
//                   transform: "translateZ(0)",
//                 }}
//               />
//             </div>

//             {/* 8. CORNER ACCENTS */}
//             <motion.div
//               className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-yellow-500/60"
//               initial={{ opacity: 0, scale: 0 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ delay: 0.8, duration: 0.5 }}
//             />
//             <motion.div
//               className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-yellow-500/60"
//               initial={{ opacity: 0, scale: 0 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ delay: 0.9, duration: 0.5 }}
//             />
//             <motion.div
//               className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-yellow-500/60"
//               initial={{ opacity: 0, scale: 0 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ delay: 1, duration: 0.5 }}
//             />
//             <motion.div
//               className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-yellow-500/60"
//               initial={{ opacity: 0, scale: 0 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ delay: 1.1, duration: 0.5 }}
//             />

//             {/* 9. FLOATING SPARKLES */}
//             {imageLoaded && (
//               <>
//                 {[...Array(8)].map((_, i) => (
//                   <motion.div
//                     key={`sparkle-${i}`}
//                     className="absolute text-yellow-300/70 text-xl"
//                     style={{
//                       left: `${10 + i * 10}%`,
//                       top: `${15 + i * 8}%`,
//                     }}
//                     initial={{ opacity: 0, scale: 0 }}
//                     animate={{
//                       opacity: [0, 1, 0],
//                       scale: [0, 1.5, 0],
//                       rotate: 360,
//                     }}
//                     transition={{
//                       duration: 2,
//                       delay: i * 0.2 + 1,
//                       repeat: Infinity,
//                       repeatDelay: Math.random() * 3,
//                       ease: "easeInOut",
//                     }}
//                   >
//                     ✨
//                   </motion.div>
//                 ))}
//               </>
//             )}
//           </motion.div>

//           {/* 10. SUBTLE SHADOW ANIMATION */}
//           <motion.div
//             className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-gradient-to-r from-amber-900/20 to-yellow-900/20 blur-xl"
//             animate={{
//               opacity: [0.3, 0.5, 0.3],
//               width: ["70%", "75%", "70%"],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;
// ----------------------------------------------------------------------------------------

// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import heroImage from "../../assets/hero.jpg";
// import updatePageSEO from "../utils/seo";

// const HeroSection = () => {
//   useEffect(() => {
//     updatePageSEO({
//       title: "Chairman & Business Leader - Nara Prasad Sitaula",
//       description:
//         "Official website of Nara Prasad Sitaula, Chairman of Devshree Ventures.",
//       image: "/hero-og.jpg",
//       keywords: "Chairman Nepal, Devshree Ventures, Business Leader",
//       canonical: "https://naraprasadsitaula.com/",
//     });
//   }, []);

//   const roles = [
//     "Chairman of Devshree Ventures Pvt Ltd",
//     "Chairman of Devshree Multipurpose Cooperative",
//     "Director of Niko Energy Limited",
//     "Managing Director of Waling Khurkhola Hydropower Ltd",
//     "Former Director of Kohinoor Wires and Steel",
//   ];

//   // Simple fade up animation for text
//   const fadeUpVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   // Simple fade in for image
//   const fadeInVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   return (
//     <section className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center px-6 md:px-24 pt-32 pb-10 bg-gradient-to-br from-[#FFF9DE]/70 via-[#FFEFAF]/50 to-[#F7D96E]/60 ">
//       {/* Left Text Section */}
//       <motion.div
//         className="flex-1 flex flex-col justify-center space-y-6 md:space-y-8 text-gray-900 text-center md:text-left"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="space-y-4">
//           <motion.div
//             className="space-y-2"
//             variants={fadeUpVariants}
//             initial="hidden"
//             animate="visible"
//             transition={{ duration: 0.5 }}
//           >
//             <span className="text-xl text-gray-600">I'm</span>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
//               Nara Prasad Sitaula
//             </h1>
//           </motion.div>

//           <motion.div
//             className="flex items-center justify-center md:justify-start gap-2 text-lg"
//             variants={fadeUpVariants}
//             initial="hidden"
//             animate="visible"
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <span className="text-gray-600">also known as</span>
//             <span className="text-amber-700 font-medium px-3 py-1 bg-amber-50 rounded-lg">
//               Narayan Sitaula
//             </span>
//           </motion.div>
//         </div>

//         {/* Role List */}
//         <motion.div
//           className="mt-8 space-y-4"
//           variants={fadeUpVariants}
//           initial="hidden"
//           animate="visible"
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <ul className="space-y-3">
//             {roles.map((role, index) => (
//               <motion.li
//                 key={index}
//                 className="text-lg sm:text-xl text-gray-700 font-light flex items-start"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
//               >
//                 <span className="text-amber-500 mr-3 flex items-center h-full">
//                   •
//                 </span>
//                 <span className="flex items-center text-start">{role}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </motion.div>
//       </motion.div>

//       {/* Right Image Section */}
//       <motion.div
//         className="flex-1 flex justify-center mb-10 md:mb-0"
//         variants={fadeInVariants}
//         initial="hidden"
//         animate="visible"
//         transition={{ duration: 0.8, delay: 0.4 }}
//       >
//         <div className="relative w-full max-w-sm md:max-w-md">
//           {/* Subtle shadow */}
//           <div className="absolute -inset-4 bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl blur-lg opacity-50" />

//           {/* Image container */}
//           <div className="relative overflow-hidden rounded-xl shadow-lg">
//             <motion.img
//               src={heroImage}
//               alt="Narayan Sitaula"
//               className="w-full h-auto rounded-xl"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//             />

//             {/* Subtle border effect */}
//             <div className="absolute inset-0 border border-amber-200/30 rounded-xl pointer-events-none" />
//           </div>

//           {/* Corner accents */}
//           <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-amber-400 rounded-tl-lg" />
//           <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-amber-400 rounded-tr-lg" />
//           <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-amber-400 rounded-bl-lg" />
//           <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-amber-400 rounded-br-lg" />
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

// optimised code
import React, { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/hero.jpg";
import updatePageSEO from "../utils/seo";

const HeroSection = () => {
  // SEO update once
  useEffect(() => {
    updatePageSEO({
      title: "Chairman & Business Leader - Nara Prasad Sitaula",
      description:
        "Official website of Nara Prasad Sitaula, Chairman of Devshree Ventures.",
      image: "/hero-og.jpg",
      keywords: "Chairman Nepal, Devshree Ventures, Business Leader",
      canonical: "https://naraprasadsitaula.com/",
    });
  }, []);

  // Memoized roles array
  const roles = useMemo(
    () => [
      "Chairman of Devshree Ventures Pvt Ltd",
      "Chairman of Devshree Multipurpose Cooperative",
      "Director of Niko Energy Limited",
      "Managing Director of Waling Khurkhola Hydropower Ltd",
      "Former Director of Kohinoor Wires and Steel",
    ],
    []
  );

  // Memoized motion variants
  const fadeUpVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }),
    []
  );

  const fadeInVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    }),
    []
  );

  return (
    <section className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center px-6 md:px-24 pt-32 pb-10 bg-gradient-to-br from-[#FFF9DE]/70 via-[#FFEFAF]/50 to-[#F7D96E]/60">
      {/* Left Text Section */}
      <motion.div
        className="flex-1 flex flex-col justify-center space-y-6 md:space-y-8 text-gray-900 text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4">
          <motion.div
            className="space-y-2"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl text-gray-600">I'm</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Nara Prasad Sitaula
            </h1>
          </motion.div>

          <motion.div
            className="flex items-center justify-center md:justify-start gap-2 text-lg"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-gray-600">also known as</span>
            <span className="text-amber-700 font-medium px-3 py-1 bg-amber-50 rounded-lg">
              Narayan Sitaula
            </span>
          </motion.div>
        </div>

        {/* Role List with staggerChildren */}
        <motion.ul
          className="mt-8 space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {roles.map((role, index) => (
            <motion.li
              key={index}
              className="text-lg sm:text-xl text-gray-700 font-light flex items-start"
              variants={fadeUpVariants}
            >
              <span className="text-amber-500 mr-3 flex items-center h-full">
                •
              </span>
              <span className="flex items-center text-start">{role}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="flex-1 flex justify-center mb-10 md:mb-0"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative w-full max-w-sm md:max-w-md">
          {/* Subtle shadow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl blur-lg opacity-50" />

          {/* Image container */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <motion.img
              src={heroImage}
              alt="Narayan Sitaula"
              loading="lazy"
              className="w-full h-auto rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
            <div className="absolute inset-0 border border-amber-200/30 rounded-xl pointer-events-none" />
          </div>

          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-amber-400 rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-amber-400 rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-amber-400 rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-amber-400 rounded-br-lg" />
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(HeroSection);
