
import { motion } from 'framer-motion';

interface Skill {
  category: string;
  icon: React.ReactNode;
  technologies: string[];
  description: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="skill-card h-64 relative">
      <div className="skill-card-inner w-full h-full absolute">
        {/* Front */}
        <motion.div 
          className="skill-card-front absolute w-full h-full bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center border border-gray-100"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-portfolio-primary mb-4">
            {skill.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            {skill.category}
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skill.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
            {skill.technologies.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                +{skill.technologies.length - 3}
              </span>
            )}
          </div>
        </motion.div>

        {/* Back */}
        <div className="skill-card-back absolute w-full h-full bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-xl shadow-lg p-6 flex flex-col justify-center text-center text-white">
          <h3 className="text-xl font-bold mb-4">
            {skill.category}
          </h3>
          <p className="text-sm mb-4 opacity-90">
            {skill.description}
          </p>
          <div className="space-y-2">
            {skill.technologies.map((tech) => (
              <div
                key={tech}
                className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
