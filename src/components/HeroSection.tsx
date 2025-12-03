import { motion } from "framer-motion";
import { Play, Calendar } from "lucide-react";
import instructorImage from "@/assets/instructor-portrait.jpg";

const mathSymbols = ["π", "√", "∑", "Δ", "∫", "∞", "θ", "λ"];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background:
          "linear-gradient(135deg, hsl(213 62% 26%) 0%, hsl(213 82% 59%) 100%)",
      }}
    >
      {/* Floating Math Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mathSymbols.map((symbol, index) => (
          <motion.span
            key={index}
            className="absolute text-4xl md:text-6xl math-icon"
            style={{
              left: `${10 + ((index * 12) % 80)}%`,
              top: `${15 + ((index * 15) % 70)}%`,
              color: "rgba(255, 255, 255, 0.1)",
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            {symbol}
          </motion.span>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <span className="text-white/90 text-sm font-medium">
                🎓 Math Instructor at 10 Minute School
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-4"
            >
              MD <span className="text-accent">FAISAL AHMED</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-4"
            >
              Math Instructor | Content Creator | Educator
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-white/70 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Transforming complex mathematical concepts into simple,
              understandable lessons. Helping 200,000+ students excel in
              mathematics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Play size={20} />
                Watch My Lessons
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent/90 transition-all duration-200 hover:scale-105 shadow-gold"
              >
                <Calendar size={20} />
                Book a Session
              </a>
            </motion.div>
          </motion.div>

          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/30 to-white/10 blur-xl" />

              {/* Image container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src={instructorImage}
                  alt="MD FAISAL AHMED - Math Instructor"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-xl">★</span>
                  </div>
                  <div>
                    <p className="text-primary font-bold text-lg">4.76</p>
                    <p className="text-muted-foreground text-xs">Rating</p>
                  </div>
                </div>
              </motion.div>

              {/* Students count badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg"
              >
                <div className="text-center">
                  <p className="text-secondary font-bold text-lg">200K+</p>
                  <p className="text-muted-foreground text-xs">Students</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
