import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Clock, Users } from "lucide-react";

const courses = [
  {
    title: "Algebra Masterclass",
    description: "Master algebraic expressions, equations, and problem-solving techniques.",
    students: "45K+",
    duration: "12 hours",
    level: "Beginner",
    gradient: "from-secondary to-primary",
  },
  {
    title: "Geometry Basics",
    description: "Learn shapes, angles, theorems, and geometric proofs with ease.",
    students: "38K+",
    duration: "10 hours",
    level: "Beginner",
    gradient: "from-accent to-secondary",
  },
  {
    title: "Trigonometry Explained",
    description: "Understand sin, cos, tan, and their applications in real problems.",
    students: "32K+",
    duration: "8 hours",
    level: "Intermediate",
    gradient: "from-primary to-secondary",
  },
  {
    title: "SSC Math Crash Course",
    description: "Complete SSC Mathematics preparation with shortcuts and tricks.",
    students: "120K+",
    duration: "25 hours",
    level: "All Levels",
    gradient: "from-secondary to-accent",
  },
  {
    title: "HSC Math Problem Solving",
    description: "Advanced problem-solving techniques for HSC board exams.",
    students: "85K+",
    duration: "20 hours",
    level: "Advanced",
    gradient: "from-accent to-primary",
  },
  {
    title: "Calculus Fundamentals",
    description: "Introduction to differentiation, integration, and limits.",
    students: "28K+",
    duration: "15 hours",
    level: "Advanced",
    gradient: "from-primary to-accent",
  },
];

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            My Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Featured <span className="text-secondary">Courses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive mathematics courses designed to help you excel in your academic journey
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card overflow-hidden hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                {/* Course Thumbnail */}
                <div className={`relative h-48 bg-gradient-to-br ${course.gradient} p-6`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 text-6xl font-poppins font-bold text-white/20">
                      ∑
                    </div>
                    <div className="absolute bottom-4 left-4 text-4xl font-poppins font-bold text-white/20">
                      π
                    </div>
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <span className="inline-block self-start px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium">
                      {course.level}
                    </span>
                    
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <h3 className="text-lg font-poppins font-bold text-foreground mb-2">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <button className="w-full mt-4 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors">
                    Watch Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
