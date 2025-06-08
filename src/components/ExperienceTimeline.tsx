
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

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
    <div className="max-w-4xl mx-auto relative">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-portfolio-primary to-portfolio-secondary"></div>
      
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-portfolio-primary rounded-full border-4 border-white shadow-lg z-10">
              <div className="absolute inset-0 bg-portfolio-primary rounded-full animate-ping opacity-20"></div>
            </div>
            
            {/* Content */}
            <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
              index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
            }`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-3 text-portfolio-primary">
                  <Briefcase size={20} className="mr-2" />
                  <span className="font-semibold">{experience.role}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {experience.company}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{experience.period}</span>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
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
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
