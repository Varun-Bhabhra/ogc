import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ctaVideo from "../assets/webmGannu2.webm"; // Replace with your video path

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const slideInLeft = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-white via-orange-50 to-white py-24 sm:py-36 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-orange-300 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-orange-400 rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      <div
        className="mx-auto max-w-screen-2xl px-4 md:px-8 relative z-10"
        ref={ref}
      >
        <motion.div
          className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {/* Main container with video background */}
          <div className="relative flex flex-col lg:flex-row min-h-[500px] md:min-h-[400px] lg:h-[28rem] overflow-hidden">
            {/* Video Background Section */}
            <motion.div
              className="relative order-first h-64 w-full lg:order-none lg:h-auto lg:w-3/5"
              variants={slideInRight}
            >
              {/* Video Element */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                onLoadedData={(e) => {
                  e.target.playbackRate = 0.7; // Slightly slower for cinematic effect
                }}
              >
                <source src={ctaVideo} type="video/mp4" />
                {/* Fallback for unsupported browsers */}
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600"></div>
              </video>

              {/* Video overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-900/40 via-transparent to-orange-900/20"></div>

              {/* Floating elements on video */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-6 right-6 w-4 h-4 bg-orange-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-white rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-bounce opacity-80"></div>
              </div>

              {/* Corner badge */}
              <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/20">
                <span className="text-white font-bold text-sm flex items-center gap-2">
                  🎬 <span>Live from Celebrations</span>
                </span>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="flex w-full flex-col justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 sm:p-8 lg:w-2/5 lg:p-12"
              variants={slideInLeft}
            >
              <motion.div variants={fadeInUp}>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    🤝
                  </span>
                  <span className="text-orange-400 font-semibold text-sm">
                    JOIN OUR MISSION
                  </span>
                </div>

                <h2 className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Your <span className="text-orange-400">involvement</span>{" "}
                  makes our celebrations possible.
                </h2>

                <p className="mb-6 text-sm sm:text-base text-gray-300 leading-relaxed lg:text-lg">
                  Whether you wish to volunteer your time or contribute
                  financially, every bit of support helps us create a more
                  enriching experience for all devotees.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <motion.a
                  href="#"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 lg:px-8 lg:py-4 text-center text-sm lg:text-base font-bold text-white shadow-lg transition-all duration-300 hover:shadow-2xl"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>🙋‍♂️</span>
                  <span>Volunteer</span>
                  <motion.span
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    →
                  </motion.span>
                </motion.a>

                <motion.a
                  href="#"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border-2 border-orange-400 bg-transparent px-6 py-3 lg:px-8 lg:py-4 text-center text-sm lg:text-base font-bold text-orange-400 transition-all duration-300 hover:bg-orange-400 hover:text-white"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgb(251, 146, 60)",
                    color: "white",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>💰</span>
                  <span>Donate</span>
                  <motion.span
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>

              {/* Stats or additional info */}
              <motion.div
                className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-700"
                variants={fadeInUp}
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-400">
                      20+
                    </div>
                    <div className="text-xs text-gray-400">Volunteers</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-400">
                      11
                    </div>
                    <div className="text-xs text-gray-400">Years</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-400">
                      50+
                    </div>
                    <div className="text-xs text-gray-400">Devotees</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-180deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CTA;
