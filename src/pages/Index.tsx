import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Scene3D from '../components/Scene3D';
import SkillCard from '../components/SkillCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ProjectCard from '../components/ProjectCard';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Shield
} from 'lucide-react';

const Index = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const skills = [
    {
      category: 'Frontend',
      icon: <Code className="w-8 h-8" />,
      technologies: ['Angular', 'React.js', 'Vue.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)'],
      description: 'Desenvolvimento de interfaces modernas e responsivas com foco em UX/UI'
    },
    {
      category: 'Backend',
      icon: <Server className="w-8 h-8" />,
      technologies: ['Node.js', 'Spring Boot', 'Java EE', 'PHP', 'Python'],
      description: 'APIs RESTful robustas e arquiteturas escaláveis para sistemas empresariais'
    },
    {
      category: 'Database',
      icon: <Database className="w-8 h-8" />,
      technologies: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB'],
      description: 'Modelagem e otimização de bancos de dados relacionais e NoSQL'
    },
    {
      category: 'DevOps & Tools',
      icon: <Globe className="w-8 h-8" />,
      technologies: ['Git', 'Docker', 'CI/CD', 'Swagger', 'AWS'],
      description: 'Automação de deploy e infraestrutura como código'
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ['React Native', 'JavaScript', 'Responsive Design'],
      description: 'Desenvolvimento mobile híbrido e aplicações web responsivas'
    },
    {
      category: 'Security',
      icon: <Shield className="w-8 h-8" />,
      technologies: ['OAuth2', 'JWT', 'Spring Security', 'Authentication'],
      description: 'Implementação de segurança robusta em aplicações web'
    }
  ];

  const experiences = [
    {
      company: 'PRODEB - Companhia de Processamento de Dados da Bahia',
      period: 'Mar/2024 – Set/2024',
      role: 'Desenvolvedor Full Stack',
      description: 'Desenvolvimento e manutenção de sistemas web utilizando Vue.js e Spring Boot. Construção de APIs RESTful seguras, versionamento com Git e práticas DevOps.',
      technologies: ['Vue.js', 'Spring Boot', 'Git', 'DevOps', 'APIs RESTful']
    },
    {
      company: 'LAMPP IT Solutions',
      period: 'Mar/2022 – Mai/2022',
      role: 'Desenvolvedor Full Stack',
      description: 'Participação em projetos de segurança pública com uso de Node.js no back-end e Angular 2+ no front. Integração de APIs REST com bancos relacionais.',
      technologies: ['Node.js', 'Angular', 'APIs REST', 'Bancos Relacionais']
    },
    {
      company: 'EDZA Planejamento Consultoria e Informática LTDA',
      period: 'Nov/2019 – Mar/2022',
      role: 'Desenvolvedor Full Stack',
      description: 'Desenvolvimento de sistemas administrativos para prefeituras (RH, Tributário, Contábil). Atuação com Java EE, JSP, JavaScript puro e jQuery.',
      technologies: ['Java EE', 'JSP', 'JavaScript', 'jQuery', 'Angular', 'Vue.js']
    }
  ];

  const projects = [
    {
      title: 'Sistema de Gestão Pública',
      description: 'Plataforma completa para gestão de recursos humanos, tributário e contábil para prefeituras.',
      technologies: ['Vue.js', 'Spring Boot', 'PostgreSQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      link: '#'
    },
    {
      title: 'API de Segurança Pública',
      description: 'Sistema robusto de APIs para integração de dados de segurança pública.',
      technologies: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
      link: '#'
    },
    {
      title: 'Portal Administrativo',
      description: 'Interface moderna para gestão de sistemas administrativos municipais.',
      technologies: ['Angular', 'TypeScript', 'Material UI', 'Spring Boot'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Scene3D />
        </div>
        <div className="container mx-auto px-6 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={heroInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex justify-center mb-8"
            >
              <Avatar className="w-32 h-32 border-4 border-white dark:border-gray-700 shadow-xl">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face" 
                  alt="Reinaldo Barreto" 
                />
                <AvatarFallback className="text-2xl font-bold bg-portfolio-primary text-white">RB</AvatarFallback>
              </Avatar>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 portfolio-text-gradient"
              initial={{ scale: 0.5 }}
              animate={heroInView ? { scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Reinaldo Barreto
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Desenvolvedor Full Stack | Especialista em JavaScript & Java
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              className="flex justify-center space-x-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="https://github.com/reinaldobarreto" className="text-gray-600 dark:text-gray-400 hover:text-portfolio-primary transition-colors">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/reinaldo-barreto-840896253" className="text-gray-600 dark:text-gray-400 hover:text-portfolio-primary transition-colors">
                <Linkedin size={32} />
              </a>
              <a href="mailto:reinaldo3178@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-portfolio-primary transition-colors">
                <Mail size={32} />
              </a>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="glass-effect rounded-2xl p-6 max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  Navegantes, SC
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-1" />
                  +55 (47) 98830-2308
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-text-gradient">
              Habilidades Técnicas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experiência sólida em desenvolvimento full stack com foco em tecnologias modernas
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-text-gradient">
              Experiência Profissional
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trajetória no desenvolvimento de sistemas para o setor público
            </p>
          </motion.div>
          
          <ExperienceTimeline experiences={experiences} inView={experienceInView} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-text-gradient">
              Projetos em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções desenvolvidas para órgãos públicos e empresas
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
