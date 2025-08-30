import { motion } from "framer-motion";
import mahotsav from "../assets/mahotsav.jpeg";
import visarjan from "../assets/visarjan.jpg";
import gannu from "../assets/gannubappa.jpeg";

const Events = () => {
  const eventsData = [
    {
      date: "30 Aug",
      title: "Prasad Distribution",
      subtitle: "Papdi Chat & Besan Barfi",
      type: "prasad",
      gradient: "from-orange-500 to-red-500",
      image: gannu,
    },
    {
      date: "31 Aug",
      title: "Prasad Distribution",
      subtitle: "Club Kachori & Jalebi",
      type: "prasad",
      gradient: "from-yellow-500 to-orange-500",
      image: mahotsav,
    },
    {
      date: "1 Sep",
      title: "Prasad Distribution",
      subtitle: "Cutlet & Gulab Jamun",
      type: "prasad",
      gradient: "from-pink-500 to-red-500",
      image: visarjan,
    },
    {
      date: "2 Sep",
      title: "Cultural Festival",
      subtitle: "Maha Bhog - Dalma, Chawal & Khatta",
      type: "event",
      gradient: "from-purple-500 to-indigo-500",
      image: gannu,
    },
    {
      date: "3 Sep",
      title: "Pre Procession",
      subtitle: "Balushahi Prasad",
      type: "event",
      gradient: "from-blue-500 to-purple-500",
      image: mahotsav,
    },
    {
      date: "4 Sep",
      title: "Bhavya Procession",
      subtitle: "Grand Celebration",
      type: "event",
      gradient: "from-green-500 to-blue-500",
      image: visarjan,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="upcoming-events" className="bg-primary py-24 sm:py-36">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-zinc-50 md:text-4xl lg:text-5xl">
            Upcoming Events & Prasad
          </h2>
          <p className="mx-auto max-w-screen-md text-gray-50 md:text-lg">
            Join us in our sacred celebrations and blessed prasad distributions
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {eventsData.map((event, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative h-64 overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              {/* Background with Ganesh Chaturthi Images */}
              <div className="absolute inset-0">
                <img
                  src={event.image}
                  alt="Ganesh Chaturthi"
                  className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-75 group-hover:opacity-65 transition-opacity duration-300`}
                />
              </div>

              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 text-white z-10">
                {/* Badge */}
                <div className="self-start">
                  <span
                    className={`px-4 py-2 text-sm font-bold rounded-full backdrop-blur-sm ${
                      event.type === "prasad"
                        ? "bg-orange-300/30 text-orange-100 border border-orange-200/20"
                        : "bg-blue-300/30 text-blue-100 border border-blue-200/20"
                    }`}
                  >
                    {event.type === "prasad" ? "🍯 PRASAD" : "🎉 EVENT"}
                  </span>
                </div>

                {/* Main content */}
                <div>
                  <span className="text-sm opacity-90 mb-2 block">
                    {event.date}
                  </span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-lg opacity-90">{event.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
