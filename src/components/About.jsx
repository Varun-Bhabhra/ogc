import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import President from "../assets/presedent2.webp";
import Qrcode from "../assets/qrcode.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: {
      opacity: 0,
      x: -100,
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
      x: 100,
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
      y: 50,
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

  const scaleIn = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  return (
    <div
      id="about"
      className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-24 sm:py-36 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div
        className="mx-auto max-w-screen-xl px-4 md:px-8 relative z-10"
        ref={ref}
      >
        {/* Mobile Contribution Section */}
        <motion.div
          className="pb-20 md:hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-center text-3xl font-bold text-gray-800"
          >
            🙏 Contribute to Our Sacred Mission
          </motion.h1>

          <motion.div variants={scaleIn} className="relative mx-auto w-fit">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur opacity-75"></div>
            <img
              src={Qrcode}
              className="relative w-48 h-48 mx-auto rounded-2xl shadow-2xl border-4 border-white"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-100 to-orange-50 p-4 max-w-xs mx-auto mt-6 shadow-lg border border-orange-200"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-3 py-1 text-sm font-bold text-white shadow-lg">
                UPI ID
              </span>
            </div>
            <span className="text-lg font-bold text-orange-600 tracking-wide">
              9438528509@ybl
            </span>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid gap-12 md:grid-cols-2 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Image Section */}
          <motion.div variants={slideInLeft} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent z-10"></div>
              <img
                src={President}
                loading="lazy"
                alt="President Ganesh Agarwal"
                className="h-full w-full object-cover object-center"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg z-20">
                <span className="text-orange-600 font-bold text-sm">
                  🏆 President & Visionary
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={slideInRight} className="space-y-8">
            {/* Header */}
            <div className="text-center md:text-left">
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full font-bold text-sm mb-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ✨ President's Vision
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-orange-600 bg-clip-text text-transparent mb-4"
                variants={fadeInUp}
              >
                Ganesh Agarwal
              </motion.h1>

              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto md:mx-0 rounded-full"
                variants={fadeInUp}
              ></motion.div>
            </div>

            {/* Philosophy Quote */}
            <motion.div
              className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-400 p-6 rounded-2xl shadow-lg"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl text-orange-500">💭</span>
                <div>
                  <p className="text-xl font-bold text-orange-700 mb-2">
                    "Jo Lagega, Lagega"
                  </p>
                  <p className="text-gray-600 italic">
                    When it comes to devotion, no expense should stand in the
                    way of our collective worship.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Main Description */}
            <motion.div className="space-y-6" variants={fadeInUp}>
              <p className="text-gray-600 text-lg leading-relaxed">
                At the heart of our Ganesh Puja Committee is the unwavering
                belief that devotion should never be hindered by financial
                concerns. Our esteemed president,{" "}
                <span className="font-semibold text-orange-600">
                  Ganesh Agarwal
                </span>
                , embodies this principle with his progressive and inclusive
                vision.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                His guiding philosophy reflects his commitment to ensuring that
                every aspect of our Puja is conducted with the utmost devotion,
                regardless of the cost. The true value lies not in money spent
                but in the{" "}
                <span className="font-semibold text-orange-600">
                  sincerity of our hearts
                </span>
                .
              </p>
            </motion.div>

            {/* About Us Section */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-orange-500">🏛️</span>
                About Our Committee
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                With this vision, Ganesh Agarwal inspires us all to focus on the
                spiritual essence of our celebrations, reminding us that in
                devotion, it's the{" "}
                <span className="font-semibold text-orange-600">
                  intention and faith that matter most
                </span>
                .
              </p>
            </motion.div>

            {/* Desktop Contribution CTA */}
            <motion.div className="hidden md:block" variants={fadeInUp}>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-2xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>🤝</span>
                  Support Our Sacred Mission
                </h3>
                <div className="flex items-center gap-6">
                  <img
                    src={Qrcode}
                    className="w-20 h-20 rounded-xl border-2 border-white/20"
                  />
                  <div>
                    <p className="text-orange-100 mb-2">
                      Scan QR Code or use UPI ID:
                    </p>
                    <p className="text-xl font-bold tracking-wide">
                      9438528509@ybl
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
