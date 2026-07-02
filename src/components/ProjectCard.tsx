import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const hasLink = project.link && project.link !== '#';
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="neuo-flat rounded-3xl p-4 h-full flex flex-col"
    >
      <div className="relative rounded-2xl overflow-hidden neuo-inset-sm p-2">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-44 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-3 pt-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-portfolio-secondary neuo-inset-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-muted-foreground neuo-inset-sm">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={hasLink ? project.link : undefined}
            target={hasLink ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-disabled={!hasLink}
            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold ${
              hasLink
                ? 'neuo-pressable text-portfolio-primary'
                : 'neuo-inset-sm text-muted-foreground cursor-not-allowed'
            }`}
          >
            <ExternalLink size={14} />
            {hasLink ? 'Ver Preview' : 'Em breve'}
          </a>
          <a
            href="https://github.com/reinaldobarreto"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl neuo-pressable text-foreground"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
