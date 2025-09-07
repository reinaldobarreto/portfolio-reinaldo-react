
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
    <div className="skill-card">
      <div className="skill-card-inner">
        {/* Front */}
        <div className="skill-card-front">
          <div className="text-portfolio-primary mb-4 icon-glitch">
            {skill.icon}
          </div>
          <h3 className="text-xl font-bold text-card-foreground mb-3 neon-glow">
            {skill.category}
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skill.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary rounded-full text-sm font-medium border border-portfolio-primary/20"
              >
                {tech}
              </span>
            ))}
            {skill.technologies.length > 3 && (
              <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                +{skill.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Back */}
        <div className="skill-card-back text-white">
          <h3 className="text-xl font-bold mb-3">
            {skill.category}
          </h3>
          <p className="text-xs mb-4 opacity-90 leading-relaxed line-clamp-3">
            {skill.description}
          </p>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {skill.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm border border-white/10 text-center"
              >
                {tech}
              </span>
            ))}
            {skill.technologies.length > 6 && (
              <span className="px-2 py-1 bg-white/30 rounded-full text-xs font-semibold">
                +{skill.technologies.length - 6} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
