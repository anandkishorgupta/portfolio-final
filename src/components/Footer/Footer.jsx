import { useEffect, useState, useRef } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
  FaRegPaperPlane,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { trackEvent } from "../utils/analytics";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const footerRef = useRef(null);

  // Show back-to-top button on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(footerTop < windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email) {
      // Track the event in Google Analytics
      trackEvent({
        category: "Newsletter",
        action: "Clicked Subscribe",
        label: "Footer Newsletter",
      });

      // Existing subscription logic
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  // Floating particles for soft background
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full bg-amber-300/20";
      const size = Math.random() * 4 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animation = `float ${
        Math.random() * 10 + 5
      }s linear infinite`;
      footerRef.current?.appendChild(particle);
    };

    for (let i = 0; i < 30; i++) {
      createParticle();
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-linear-to-br from-yellow-100 via-yellow-50 to-yellow-200 text-black overflow-hidden"
    >
      {/* Soft floating background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-amber-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-10 left-1/4 w-8 h-8 border-2 border-amber-400/30 rotate-45 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-1/3 w-6 h-6 border-2 border-amber-400/30 rotate-45 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Top section: Name and tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <div className="inline-block px-6 py-3 bg-black text-yellow-400 rounded-full mb-4 transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <h2 className="text-2xl font-bold tracking-wider">
                NARA PRASAD SITAULA
              </h2>
            </div>
            <p className="text-lg italic text-gray-800 mt-4 max-w-md relative">
              <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-yellow-600">
                "
              </span>
              Innovation with integrity — empowering change through purpose.
              <span className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-yellow-600">
                "
              </span>
            </p>
          </div>

          {/* Newsletter subscription */}
          {/* <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <FaRegPaperPlane className="text-amber-500" />
              Stay Updated
            </h3>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-lg bg-white/90 border border-amber-300/50 focus:outline-none focus:ring-2 focus:ring-amber-500 min-w-60"
                required
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-amber-500 text-white hover:bg-black hover:text-yellow-400"
                }`}
              >
                {isSubmitted ? "✓" : "Join"}
              </button>
            </form>
          </div> */}
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="h-px bg-linear-to-r from-transparent via-amber-400/50 to-transparent"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-amber-400 rotate-45"></div>
          </div>
        </div>

        {/* Middle section: Info & Socials */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWG_-9NLjoh20f_-HienVantSb_-wIRHo8mQ&s"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Devshree Ventures</h3>
                <p className="text-sm text-gray-700">Pvt. Ltd</p>
              </div>
            </div>
            <p className="text-gray-800 leading-relaxed">
              Leading innovative ventures with a focus on sustainable
              development and community empowerment.
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 border-l-4 border-amber-500 pl-3">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@naraprasadsitaula.com"
                className="flex items-center gap-3 group hover:text-amber-600 transition-colors"
              >
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                  <MdEmail className="text-amber-500 group-hover:text-white" />
                </div>
                <span className="font-medium">mail@example.com</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <MdLocationOn className="text-amber-500" />
                </div>
                <span className="font-medium">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 border-l-4 border-amber-500 pl-3">
              Connect
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                // {
                //   icon: <FaLinkedin />,
                //   label: "LinkedIn",
                //   color: "hover:bg-[#0077B5]",
                //   href: "#",
                // },
                // {
                //   icon: <FaGithub />,
                //   label: "GitHub",
                //   color: "hover:bg-gray-900",
                //   href: "#",
                // },
                {
                  icon: <FaInstagram />,
                  label: "Instagram",
                  color: "hover:bg-gradient-to-r from-purple-500 to-pink-500",
                  href: "#",
                },
                {
                  icon: <FaFacebook />,
                  label: "Facebook",
                  color: "hover:bg-[#1877F2]",
                  href: "https://www.facebook.com/Npsitaula/",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-amber-300 transition-all duration-300 group ${social.color} hover:text-white hover:shadow-lg hover:-translate-y-1`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-2xl transition-transform group-hover:scale-110">
                    {social.icon}
                  </div>
                  <span className="font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-amber-300/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-800 font-medium">
                Chairman, Devshree Ventures Pvt. Ltd & Devshree Multipurpose
                Cooperative
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-sm text-gray-700">
                © {new Date().getFullYear()} Nara Prasad Sitaula
              </div>
              {/* <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                >
                  Contact
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`cursor-pointer fixed right-8 group transition-all duration-500 ${
          isVisible ? "bottom-8 opacity-100" : "-bottom-20 opacity-0"
        }`}
        title="Back to Top"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-amber-500 rounded-full blur group-hover:blur-lg transition-all duration-300"></div>
          <div className="relative w-14 h-14 bg-black text-amber-400 rounded-full flex items-center justify-center text-xl font-bold group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1">
            <FaArrowUp className="transition-transform group-hover:-translate-y-1" />
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-amber-500/50 rounded-full blur-sm"></div>
        </div>
      </button>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
