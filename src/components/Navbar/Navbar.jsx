// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Detect scroll to add shadow
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const name = "Nara Prasad Sitaula";

//   return (
//     <div
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-linear-to-r from-[#FFF7D1]/80 via-[#FFE38E]/80 to-[#F7C948]/80 shadow-2xl backdrop-blur-xl"
//           : "bg-linear-to-r from-[#FFF8E1]/50 via-[#FFEAB6]/50 to-[#F9D56E]/50 backdrop-blur-lg shadow-md"
//       }`}
//     >
//       <div className="mx-auto flex justify-between items-center py-5 px-6 md:px-24">
//         {/* Logo with animated letters */}
//         <div className="cursor-pointer" onClick={scrollToTop}>
//           {/* <h1 className="logo-text font-logo text-3xl md:text-4xl flex">
//             {name.split("").map((letter, index) => (
//               <span
//                 key={index}
//                 className="logo-letter inline-block"
//                 style={{
//                   animationDelay: `${index * 0.05}s`,
//                   transition: "all 0.3s",
//                 }}
//               >
//                 {letter === " " ? "\u00A0" : letter}
//               </span>
//             ))}
//           </h1> */}
//           <h1 className="logo-text font-montserrat-bold text-3xl md:text-4xl flex">
//             {name.split("").map((letter, index) => (
//               <span
//                 key={index}
//                 className="logo-letter inline-block"
//                 style={{
//                   animationDelay: `${index * 0.05}s`,
//                   transition: "all 0.3s",
//                 }}
//               >
//                 {letter === " " ? "\u00A0" : letter}
//               </span>
//             ))}
//           </h1>
//         </div>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex items-center space-x-10 text-lg md:text-xl tracking-wider font-medium">
//           {["Home", "About", "Portfolio"].map((item, index) => (
//             <li key={index} className="relative cursor-pointer group">
//               {item === "Home" ? (
//                 <a
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToTop();
//                   }}
//                   className="transition-colors duration-300 hover:text-gray-700"
//                 >
//                   {item}
//                 </a>
//               ) : (
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   className="transition-colors duration-300 hover:text-gray-700"
//                 >
//                   {item}
//                 </a>
//               )}
//               <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></span>
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger Menu (Mobile) */}
//         <div
//           className="md:hidden text-2xl cursor-pointer z-50"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? (
//             <FaTimes className="transition-transform duration-500 transform rotate-180" />
//           ) : (
//             <FaBars />
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-[#FFD700] w-full overflow-hidden transition-max-height duration-500 ${
//           isOpen ? "max-h-screen py-6" : "max-h-0"
//         }`}
//       >
//         <ul className="flex flex-col items-center space-y-6 text-lg font-medium">
//           {["Home", "About", "Portfolio"].map((item, index) => (
//             <li key={index} className="cursor-pointer">
//               {item === "Home" ? (
//                 <a
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToTop();
//                     setIsOpen(false);
//                   }}
//                   className="transition-transform duration-300 hover:scale-105 hover:text-gray-700"
//                 >
//                   {item}
//                 </a>
//               ) : (
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   onClick={() => setIsOpen(false)}
//                   className="transition-transform duration-300 hover:scale-105 hover:text-gray-700"
//                 >
//                   {item}
//                 </a>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// --------------------optimised code
import { useState, useEffect, useMemo, useCallback, memo } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = useMemo(() => ["Home", "About", "Portfolio"], []);

  useEffect(() => {
    const handleScroll = () => {
      const shouldScroll = window.scrollY > 20;
      setScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const name = "Nara Prasad Sitaula";

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-linear-to-r from-[#FFF7D1]/80 via-[#FFE38E]/80 to-[#F7C948]/80 shadow-2xl backdrop-blur-xl"
          : "bg-linear-to-r from-[#FFF8E1]/50 via-[#FFEAB6]/50 to-[#F9D56E]/50 backdrop-blur-lg shadow-md"
      }`}
    >
      <div className="mx-auto flex justify-between items-center py-5 px-6 md:px-24">
        {/* Logo */}
        <div className="cursor-pointer" onClick={scrollToTop}>
          <h1 className="logo-text font-montserrat-bold text-3xl md:text-4xl flex">
            {name.split("").map((letter, index) => (
              <span
                key={index}
                className="logo-letter inline-block"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-lg md:text-xl tracking-wider font-medium">
          {menuItems.map((item) => (
            <li key={item} className="relative cursor-pointer group">
              <a
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                onClick={
                  item === "Home"
                    ? (e) => {
                        e.preventDefault();
                        scrollToTop();
                      }
                    : undefined
                }
                className="transition-colors duration-300 hover:text-gray-700"
              >
                {item}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer z-50"
          onClick={() => setIsOpen((o) => !o)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#FFD700] w-full overflow-hidden transition-max-height duration-500 ${
          isOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                onClick={() => {
                  if (item === "Home") scrollToTop();
                  setIsOpen(false);
                }}
                className="transition-transform duration-300 hover:scale-105 hover:text-gray-700"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(Navbar);
