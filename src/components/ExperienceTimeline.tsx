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
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-8 top-4 bottom-4 w-1 rounded-full neuo-inset-sm" aria-hidden />

      <div className="space-y-10">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="relative flex items-start pl-24"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-16 h-16 rounded-2xl neuo-flat flex items-center justify-center">
              <div className="w-9 h-9 rounded-xl neuo-inset-sm flex items-center justify-center text-portfolio-primary">
                <Briefcase size={16} />
              </div>
            </div>

            {/* Card */}
            <div className="neuo-flat rounded-3xl p-6 w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                <h3 className="text-lg font-bold text-foreground">{experience.role}</h3>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-portfolio-secondary neuo-inset-sm w-fit">
                  <Calendar size={12} /> {experience.period}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-portfolio-primary mb-3 uppercase tracking-wider">
                {experience.company}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium text-foreground neuo-inset-sm"
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
