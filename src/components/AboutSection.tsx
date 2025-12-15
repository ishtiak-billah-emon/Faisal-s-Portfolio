import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Target, Heart, Lightbulb } from "lucide-react";

const highlights = [
  { icon: BookOpen, text: "Simplified Learning" },
  { icon: Target, text: "Goal-Oriented Teaching" },
  { icon: Heart, text: "Student-Centric" },
  { icon: Lightbulb, text: "Innovative Methods" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-3xl blur-2xl" />

              {/* Main image placeholder */}
              <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-card">
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <span className="text-8xl font-poppins font-bold opacity-20">
                      ∑
                    </span>
                    <p className="mt-4 text-white/80">Making Math Simple</p>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-accent/30 rounded-full"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              About Meeeeeeeeee!!!!
            </span>

            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
              Passionate About Making{" "}
              <span className="text-secondary">Mathematics</span>{" "}
              <span className="text-accent">Accessible</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              With over 5 years of experience in education, I've dedicated my
              career to transforming the way students perceive mathematics. My
              mission is simple: make math enjoyable and accessible for
              everyone.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              At <span className="gold-highlight">10 Minute School</span>, I've
              had the privilege of reaching hundreds of thousands of students
              across Bangladesh, helping them overcome their fear of mathematics
              and excel in their academic journey.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-muted/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
