
import { motion } from 'framer-motion';

interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  technologies: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
  inView: boolean;
}

const ExperienceTimeline = ({ experiences, inView }: ExperienceTimelineProps) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-primary to-portfolio-secondary"></div>
      
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative flex items-start ml-16"
          >
            {/* Timeline dot */}
            <div className="absolute -left-10 w-4 h-4 bg-portfolio-primary rounded-full border-4 border-white shadow-lg"></div>
            
            {/* Content card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2 md:mb-0">
                  {experience.role}
                </h3>
                <span className="text-portfolio-primary font-semibold">
                  {experience.period}
                </span>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-700 mb-3">
                {experience.company}
              </h4>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {experience.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
