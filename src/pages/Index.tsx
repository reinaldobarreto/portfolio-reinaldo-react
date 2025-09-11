import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Scene3D from '../components/Scene3D';
import SkillCard from '../components/SkillCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ProjectCard from '../components/ProjectCard';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import profilePhoto from '../assets/reinaldo-photo.jpg';
import curriculumImage from '../assets/curriculo-reinaldo.png';
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
  Shield,
  Zap,
  Layers,
  Terminal,
  CloudLightning,
  Brain,
  Rocket,
  Star,
  Download,
  ExternalLink,
  ArrowDown,
  Coffee,
  Heart,
  Award,
  Target,
  Briefcase
} from 'lucide-react';

const Index = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Função para download do currículo como imagem
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = curriculumImage;
    link.download = 'Curriculo_Reinaldo_Barreto.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    {
      category: 'Frontend Development',
      icon: <Code className="w-8 h-8" />,
      technologies: ['Angular', 'React.js', 'Vue.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Sass'],
      description: 'Criação de interfaces modernas e responsivas com foco em UX/UI utilizando as mais recentes tecnologias frontend'
    },
    {
      category: 'Backend Development',
      icon: <Server className="w-8 h-8" />,
      technologies: ['Node.js', 'Spring Boot', 'Java EE', 'PHP', 'Python', 'Express.js', 'NestJS'],
      description: 'Desenvolvimento de APIs RESTful robustas e arquiteturas escaláveis para sistemas empresariais de alta performance'
    },
    {
      category: 'Database Management',
      icon: <Database className="w-8 h-8" />,
      technologies: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Redis', 'Elasticsearch'],
      description: 'Modelagem, otimização e administração de bancos de dados relacionais e NoSQL para máxima eficiência'
    },
    {
      category: 'DevOps & Cloud',
      icon: <CloudLightning className="w-8 h-8" />,
      technologies: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Jenkins', 'Terraform', 'Nginx'],
      description: 'Automação completa de deploy, infraestrutura como código e orquestração de containers'
    },
    {
      category: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ['React Native', 'Flutter', 'Progressive Web Apps', 'Ionic', 'Cordova'],
      description: 'Desenvolvimento de aplicações mobile nativas e híbridas para iOS e Android com performance otimizada'
    },
    {
      category: 'Security & Authentication',
      icon: <Shield className="w-8 h-8" />,
      technologies: ['OAuth2', 'JWT', 'Spring Security', 'HTTPS', 'Encryption', 'Firewall', 'Penetration Testing'],
      description: 'Implementação de segurança multicamadas e autenticação robusta para proteção total de dados'
    },
    {
      category: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      technologies: ['TensorFlow', 'Python ML', 'Natural Language Processing', 'Computer Vision', 'Data Analytics'],
      description: 'Integração de inteligência artificial e machine learning para soluções inovadoras e preditivas'
    },
    {
      category: 'Performance & Optimization',
      icon: <Zap className="w-8 h-8" />,
      technologies: ['Performance Monitoring', 'Code Optimization', 'Caching', 'CDN', 'Load Balancing'],
      description: 'Otimização avançada de performance e escalabilidade para aplicações de alto tráfego'
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
      title: 'Sistema de Gestão Pública Integrada',
      description: 'Plataforma completa para gestão de recursos humanos, tributário e contábil para prefeituras com módulos integrados e dashboard analítico.',
      technologies: ['Vue.js', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT', 'Redis'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      link: '#',
      featured: true
    },
    {
      title: 'API de Segurança Pública Avançada',
      description: 'Sistema robusto de APIs para integração de dados de segurança pública com machine learning para análise preditiva.',
      technologies: ['Node.js', 'Express', 'JWT', 'PostgreSQL', 'TensorFlow', 'Docker'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
      link: '#',
      featured: true
    },
    {
      title: 'Portal Administrativo Responsivo',
      description: 'Interface moderna e intuitiva para gestão de sistemas administrativos municipais com dashboard em tempo real.',
      technologies: ['Angular', 'TypeScript', 'Material UI', 'Spring Boot', 'WebSocket', 'PWA'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop',
      link: '#',
      featured: false
    },
    {
      title: 'E-commerce Full Stack',
      description: 'Plataforma completa de e-commerce com pagamentos integrados, gestão de estoque e análises avançadas.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'GraphQL'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      link: '#',
      featured: false
    },
    {
      title: 'App Mobile Corporativo',
      description: 'Aplicativo mobile híbrido para gestão corporativa com sincronização offline e notificações push.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Push Notifications', 'Offline Storage'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      link: '#',
      featured: false
    },
    {
      title: 'Dashboard Analytics BI',
      description: 'Painel de business intelligence com visualizações interativas e relatórios automatizados em tempo real.',
      technologies: ['Vue.js', 'D3.js', 'Python', 'Pandas', 'PostgreSQL', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      link: '#',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-portfolio-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-portfolio-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-portfolio-accent/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>
        
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
              initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
              animate={heroInView ? { scale: 1, opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary via-portfolio-secondary to-portfolio-accent rounded-full p-1 animate-spin-slow">
                  <div className="bg-background rounded-full p-2">
                    <Avatar className="w-32 h-32 border-4 border-card shadow-2xl">
                      <AvatarImage 
                        src={profilePhoto} 
                        alt="Reinaldo Barreto" 
                      />
                      <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-white">RB</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-portfolio-green text-background rounded-full p-2 animate-bounce">
                  <Star className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 portfolio-text-gradient neon-glow"
              initial={{ scale: 0.5, rotateX: 90 }}
              animate={heroInView ? { scale: 1, rotateX: 0 } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              Reinaldo Barreto
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center mb-4"
            >
              <Terminal className="w-6 h-6 text-portfolio-primary mr-2" />
              <span className="text-xl md:text-2xl text-foreground font-mono">
                Full Stack Developer
              </span>
              <Rocket className="w-6 h-6 text-portfolio-secondary ml-2 animate-bounce" />
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Especialista em <span className="text-portfolio-primary font-semibold">JavaScript</span> & 
              <span className="text-portfolio-secondary font-semibold"> Java</span> com paixão por 
              <span className="text-portfolio-accent font-semibold"> inovação tecnológica</span>
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <button 
                onClick={downloadCV}
                className="px-8 py-4 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center group shadow-lg"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-portfolio-primary text-portfolio-primary font-semibold rounded-full hover:bg-portfolio-primary hover:text-white transition-all duration-300 flex items-center justify-center group"
              >
                <Briefcase className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Ver Projetos
              </button>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="flex justify-center space-x-6 mb-12"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.a 
                href="https://github.com/reinaldobarreto" 
                className="p-4 bg-card/50 backdrop-blur-sm rounded-full text-foreground hover:text-portfolio-primary transition-all duration-300 hover:scale-110 border border-border/50"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Github size={28} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/reinaldo-barreto-840896253" 
                className="p-4 bg-card/50 backdrop-blur-sm rounded-full text-foreground hover:text-portfolio-secondary transition-all duration-300 hover:scale-110 border border-border/50"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a 
                href="mailto:reinaldo3178@gmail.com" 
                className="p-4 bg-card/50 backdrop-blur-sm rounded-full text-foreground hover:text-portfolio-accent transition-all duration-300 hover:scale-110 border border-border/50"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Mail size={28} />
              </motion.a>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="glass-effect rounded-2xl p-6 max-w-md mx-auto border border-border/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center group hover:text-portfolio-primary transition-colors">
                  <MapPin size={16} className="mr-2 group-hover:animate-pulse" />
                  Navegantes, SC
                </div>
                <div className="flex items-center group hover:text-portfolio-secondary transition-colors">
                  <Phone size={16} className="mr-2 group-hover:animate-pulse" />
                  +55 (47) 98830-2308
                </div>
              </div>
            </motion.div>
            
            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-muted-foreground"
              >
                <ArrowDown size={24} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 bg-gradient-to-br from-card/50 to-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Layers className="w-8 h-8 text-portfolio-primary mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold portfolio-text-gradient">
                Habilidades Técnicas
              </h2>
              <Zap className="w-8 h-8 text-portfolio-accent ml-3 animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experiência sólida em desenvolvimento full stack com foco em tecnologias modernas e 
              <span className="text-portfolio-primary font-semibold"> inovação contínua</span>
            </p>
            <div className="flex items-center justify-center mt-4 space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1 text-portfolio-green" />
                5+ Anos de Experiência
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-1 text-portfolio-orange" />
                20+ Projetos Entregues
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50, rotateY: 180 }}
                animate={skillsInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </div>
          
          {/* Skills Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: Code, label: 'Linguagens', count: '12+' },
              { icon: Database, label: 'Databases', count: '8+' },
              { icon: CloudLightning, label: 'Cloud Services', count: '6+' },
              { icon: Coffee, label: 'Cups of Coffee', count: '∞', animate: true }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center p-6 bg-card/30 rounded-xl backdrop-blur-sm border border-border/20">
                <stat.icon className={`w-8 h-8 mx-auto mb-2 text-portfolio-primary ${stat.animate ? 'animate-pulse' : ''}`} />
                <div className="text-2xl font-bold text-foreground">{stat.count}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-portfolio-secondary mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold portfolio-text-gradient">
                Experiência Profissional
              </h2>
              <Heart className="w-8 h-8 text-portfolio-red ml-3 animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Trajetória no desenvolvimento de sistemas para o setor público e 
              <span className="text-portfolio-secondary font-semibold"> soluções corporativas inovadoras</span>
            </p>
          </motion.div>
          
          <ExperienceTimeline experiences={experiences} inView={experienceInView} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-card/30 to-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-portfolio-orange mr-3 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold portfolio-text-gradient">
                Projetos em Destaque
              </h2>
              <Star className="w-8 h-8 text-portfolio-accent ml-3 animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Soluções desenvolvidas para órgãos públicos, empresas e 
              <span className="text-portfolio-orange font-semibold"> projetos pessoais inovadores</span>
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="relative"
              >
                {project.featured && (
                  <div className="absolute -top-2 -right-2 bg-portfolio-green text-background rounded-full p-2 z-10 animate-bounce">
                    <Star className="w-4 h-4" />
                  </div>
                )}
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          
          {/* More Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-portfolio-purple to-portfolio-primary text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto group shadow-lg">
              <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Ver Todos os Projetos
              <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
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
