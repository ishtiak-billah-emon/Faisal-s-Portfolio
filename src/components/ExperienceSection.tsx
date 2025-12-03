import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users, BookOpen, Award } from "lucide-react";

const experiences = [
  {
    title: "Math Instructor",
    company: "10 Minute School",
    period: "2021 - Present",
    description: "Creating engaging video lessons and course content for SSC Mathematics.",
    highlights: ["300+ lessons created", "200K+ students reached", "4.76★ rating"],
    icon: BookOpen,
    color: "secondary",
  },
  {
    title: "Private Tutor",
    // company: "10 Minute School",
    period: "2020 - Present",
    description: "Providing personalized one-on-one tutoring for students preparing for exams.",
    highlights: ["5+ years experience", "SSC specialization"],
    icon: Users,
    color: "accent",
  },
  {
    title: "Content Creator",
    company: "YouTube & Social Media",
    period: "2024 - Present",
    description: "Sharing free educational content and math tips across social platforms.",
    highlights: ["Educational videos", "Problem-solving sessions", "Study tips"],
    icon: Award,
    color: "primary",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground">
            Professional <span className="text-secondary">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background md:-translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass-card p-6 hover:shadow-hover transition-shadow duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      exp.color === "secondary" ? "bg-secondary/10" :
                      exp.color === "accent" ? "bg-accent/10" : "bg-primary/10"
                    }`}>
                      <exp.icon className={`w-6 h-6 ${
                        exp.color === "secondary" ? "text-secondary" :
                        exp.color === "accent" ? "text-accent" : "text-primary"
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-poppins font-bold text-foreground">{exp.title}</h3>
                      <p className="text-secondary font-medium">{exp.company}</p>
                      <p className="text-muted-foreground text-sm">{exp.period}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
