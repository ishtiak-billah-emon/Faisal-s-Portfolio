import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Algebra", percentage: 95, icon: "x²" },
  { name: "Geometry", percentage: 92, icon: "△" },
  { name: "Trigonometry", percentage: 90, icon: "sin" },
  { name: "Calculus", percentage: 88, icon: "∫" },
  { name: "Problem Solving", percentage: 95, icon: "?" },
  { name: "Curriculum Design", percentage: 85, icon: "📋" },
  { name: "Content Creation", percentage: 90, icon: "🎬" },
  { name: "Student Engagement", percentage: 98, icon: "💡" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Skills & <span className="text-secondary">Proficiency</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Areas of expertise developed through years of teaching and learning
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <span className="text-secondary font-semibold">{skill.icon}</span>
                  </div>
                  <span className="font-medium text-foreground">{skill.name}</span>
                </div>
                <span className="text-secondary font-bold">{skill.percentage}%</span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-secondary to-primary"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.percentage}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
