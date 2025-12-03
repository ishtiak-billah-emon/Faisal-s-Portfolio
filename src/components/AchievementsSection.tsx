import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, BookOpen, Star, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 200000,
    suffix: "+",
    label: "Students Taught",
    color: "secondary",
  },
  {
    icon: BookOpen,
    value: 300,
    suffix: "+",
    label: "Lessons Created",
    color: "accent",
  },
  {
    icon: Star,
    value: 4.76,
    suffix: "★",
    label: "Instructor Rating",
    color: "accent",
    isDecimal: true,
  },
  // {
  //   icon: Award,
  //   value: 1,
  //   suffix: "",
  //   label: "Top Educator Award",
  //   prefix: "#",
  //   color: "secondary",
  // },
];

const CountUpAnimation = ({ 
  value, 
  isDecimal = false, 
  prefix = "", 
  suffix = "",
  isInView 
}: { 
  value: number; 
  isDecimal?: boolean; 
  prefix?: string; 
  suffix?: string;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, isInView]);

  const displayValue = isDecimal 
    ? count.toFixed(1) 
    : Math.floor(count).toLocaleString();

  return (
    <span>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(213 62% 26%) 0%, hsl(213 82% 59%) 100%)",
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-white/5"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4">
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Impact & <span className="text-accent">Statistics</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Numbers that reflect my dedication to transforming mathematics education
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  stat.color === "accent" ? "bg-accent/20" : "bg-white/20"
                }`}>
                  <stat.icon className={`w-7 h-7 ${
                    stat.color === "accent" ? "text-accent" : "text-white"
                  }`} />
                </div>

                {/* Counter */}
                <div className="text-3xl md:text-4xl font-poppins font-bold text-white mb-2">
                  <CountUpAnimation
                    value={stat.value}
                    isDecimal={stat.isDecimal}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </div>

                {/* Label */}
                <p className="text-white/70 text-sm">{stat.label}</p>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-gold pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
