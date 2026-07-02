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
          <div className="w-16 h-16 rounded-2xl neuo-inset-sm flex items-center justify-center text-portfolio-primary mb-4">
            {skill.icon}
          </div>
          <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight">
            {skill.category}
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skill.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium text-muted-foreground neuo-inset-sm"
              >
                {tech}
              </span>
            ))}
            {skill.technologies.length > 3 && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-portfolio-secondary neuo-inset-sm">
                +{skill.technologies.length - 3}
              </span>
            )}
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-5">
            Hover to explore
          </p>
        </div>

        {/* Back */}
        <div className="skill-card-back">
          <h3 className="text-lg font-bold mb-3 text-portfolio-primary">
            {skill.category}
          </h3>
          <p className="text-xs mb-4 text-foreground/80 leading-relaxed line-clamp-3">
            {skill.description}
          </p>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {skill.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-full text-[10px] font-medium text-foreground neuo-flat-sm"
              >
                {tech}
              </span>
            ))}
            {skill.technologies.length > 6 && (
              <span className="px-2 py-1 rounded-full text-[10px] font-semibold text-portfolio-secondary neuo-flat-sm">
                +{skill.technologies.length - 6}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
