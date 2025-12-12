import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const stakeholders = [
  {
    name: "Puwa Khola Hydropower",
    type: "Hydropower Project",
    description: "Key stakeholder in renewable energy projects.",
    color: "#4ade80", // green
  },
  {
    name: "Mahasakti Cement",
    type: "Cement Industry",
    logo: "https://mahashakticement.com/website/images/logo_english1.jpg",
    description: "Invested in industrial development and growth.",
    color: "#f97316", // orange
  },
  {
    name: "Him River Power Limited",
    type: "Hydropower Project",
    logo: "https://mir-s3-cdn-cf.behance.net/projects/max_808/9ec22626710369.556c1a250d5c9.png",
    description: "Promoting sustainable energy solutions.",
    color: "#3b82f6", // blue
  },
  {
    name: "Spark Hydro",
    type: "Hydropower Project",
    logo: "https://tse1.mm.bing.net/th/id/OIP.Tfdm7zoGuRwxHxyS8JOVfAHaHa?rs=1&pid=ImgDetMain",
    description: "Hydropower investment and advisory.",
    color: "#8b5cf6", // violet
  },
  {
    name: "Empire Hydro",
    type: "Hydropower Project",
    logo: "https://hydroempirenepal.com/assets/images/Hydro%20Empire%20Logo_Lorizental.jpg",
    description: "Key stakeholder in energy sector.",
    color: "#ec4899", // pink
  },

  {
    name: "Hulas Infra",
    type: "Infrastructure & Steel Solutions",
    logo: "https://hulasinfra.com/wp-content/uploads/2025/08/1648710952.Hulas-Infra-e1754035040845.png",
    description:
      "Provides pre-engineered steel structures and infrastructure solutions.",
    color: "#14b8a6", // teal
  },
  {
    name: "Hulas Iron Industries",
    type: "Steel Manufacturer",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQE1DoUKKLVCAw/company-logo_200_200/company-logo_200_200/0/1649067372931/hulasiron_logo?e=2147483647&v=beta&t=EyXxE2cQ9wNbl3YlN_Lglq_wJJ8dhXd0mmjZ8C0VCgE",
    description:
      "Produces high-quality steel products for construction and industry.",
    color: "#f59e0b", // amber
  },
];

// Advanced stagger and animation controls
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.85,
    rotateX: -15,
    boxShadow: "0px 4px 8px rgba(0,0,0,0)",
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    boxShadow: "0px 10px 30px rgba(0,0,0,0.12)",
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      mass: 0.8,
      delay: custom * 0.12,
    },
  }),
  hover: {
    scale: 1.04,
    y: -8,
    rotateX: 5,
    boxShadow: "0px 16px 40px rgba(0,0,0,0.18)",
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
    y: 2,
    transition: { duration: 0.1 },
  },
};

const StakeholderCard = ({ stakeholder, index }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center cursor-pointer group"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true, margin: "-100px" }}
      style={{
        background: `linear-gradient(145deg, #ffffff 0%, #f9fafb 100%)`,
        border: `1px solid ${stakeholder.color + "20" || "#e5e7eb"}`,
      }}
    >
      {/* Decorative accent bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: stakeholder.color || "#6b7280" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.12 + 0.3,
          duration: 0.6,
          ease: "easeOut",
        }}
      />

      {/* Logo with entrance animation */}
      <AnimatePresence>
        {stakeholder.logo && (
          <motion.div
            className="w-32 h-20 mb-5 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.12 + 0.5, duration: 0.5 }}
          >
            <img
              src={stakeholder.logo}
              alt={stakeholder.name}
              className="max-w-full max-h-full object-contain filter transition-all duration-300 group-hover:brightness-110"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <motion.h3
        className="text-lg sm:text-xl font-bold text-gray-800 mb-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 + 0.6 }}
      >
        {stakeholder.name}
      </motion.h3>

      <motion.p
        className="text-xs sm:text-sm text-gray-500 mb-3 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 + 0.7 }}
      >
        {stakeholder.type}
      </motion.p>

      <motion.p
        className="text-gray-600 text-sm leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 + 0.8 }}
      >
        {stakeholder.description}
      </motion.p>

      {/* Subtle glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-15 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${
            stakeholder.color || "#6b7280"
          } 0%, transparent 70%)`,
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

const Stakeholders = () => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Stakeholders & Investments
          </h2>
          <motion.div
            className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        >
          {stakeholders.map((stakeholder, index) => (
            <StakeholderCard
              key={`${stakeholder.name}-${index}`}
              stakeholder={stakeholder}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stakeholders;
