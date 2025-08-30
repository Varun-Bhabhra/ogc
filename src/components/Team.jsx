import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import TeamData from "../Config/teamData.config.json";

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 initially

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, TeamData.length));
  };

  const handleShowLess = () => {
    setVisibleCount(6);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-orange-50 py-24 sm:py-36 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-orange-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div
        className="mx-auto max-w-screen-xl px-4 md:px-8 relative z-10"
        ref={ref}
      >
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm mb-6 shadow-lg">
            👥 Our Dedicated Team
          </div>

          <h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>

          <p className="mx-auto max-w-screen-md text-gray-600 md:text-lg">
            Devoted hearts working together to create magical celebrations and
            preserve our sacred traditions
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {TeamData.slice(0, visibleCount).map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Image Container */}
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 scale-110"></div>

                  {/* Image */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28 overflow-hidden rounded-full bg-white shadow-xl border-4 border-white group-hover:border-orange-200 transition-colors duration-300">
                    <img
                      src={member.image}
                      loading="lazy"
                      alt={`Photo of ${member.name}`}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Online indicator */}
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-400 border-2 border-white rounded-full shadow-lg animate-pulse"></div>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <h3 className="font-bold text-gray-800 text-sm md:text-base group-hover:text-orange-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  {member.role && (
                    <p className="text-xs text-gray-500 font-medium">
                      {member.role}
                    </p>
                  )}
                </div>

                {/* Hover effect overlay */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs text-orange-500 font-semibold">
                    ✨ Team Member
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More/Less Buttons */}
        {TeamData.length > 6 && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex gap-4 justify-center">
              {visibleCount < TeamData.length && (
                <motion.button
                  onClick={handleShowMore}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show More Team ({TeamData.length - visibleCount} more)
                </motion.button>
              )}

              {visibleCount > 6 && (
                <motion.button
                  onClick={handleShowLess}
                  className="px-8 py-3 border-2 border-orange-500 text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show Less
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Team;
