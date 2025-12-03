import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Sc in Computer Science and Engineering",
    institution: "American International University Bangladesh",
    year: "2022 - 2025",
    description: "Specialized in mathematical modeling and computational methods.",
  },
  {
    degree: "Higher Secondary School Certificate",
    institution: "Government Science College",
    year: "2020",
    description: "GPA: 5.0/5.0",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground">
            Academic <span className="text-secondary">Background</span>
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-16 md:pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 w-12 md:w-16 h-12 md:h-16 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-card">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>

                {/* Content Card */}
                <div className="glass-card p-6 hover:shadow-hover transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h3 className="text-xl font-poppins font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.year}</span>
                    </div>
                  </div>

                  <p className="text-secondary font-medium mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
