import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import SkillCard from '../components/SkillCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ProjectCard from '../components/ProjectCard';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import profilePhoto from '../assets/foto-perfil.png';
import rbtechLogo from '../assets/rbtech-logo.png';
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

  // Função para download do currículo em PDF (robusta com Blob)
  const downloadCV = async () => {
    try {
      const cvUrl = `${import.meta.env.BASE_URL}curriculo-reinaldo-barreto.pdf`;
      const res = await fetch(cvUrl);
      if (!res.ok) throw new Error(`Falha ao obter PDF: ${res.status}`);
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = 'Curriculo_Reinaldo_Barreto_Full_Stack.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.error('Erro ao baixar o currículo:', error);
      // Fallback: abrir em nova aba se o navegador impedir o download direto
      const fallbackUrl = `${import.meta.env.BASE_URL}curriculo-reinaldo-barreto.pdf`;
      window.open(fallbackUrl, '_blank');
    }
  };

  const skills = [
    {
      category: 'Flutter Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ['Flutter', 'Dart', 'Android (Kotlin/Java)', 'iOS (Swift)', 'Firebase', 'State Management', 'Responsive UI', 'Animations'],
      description: 'Especialista em Flutter e Dart para desenvolvimento de apps mobile multiplataforma nativos para Android e iOS, com conhecimento básico em Kotlin, Java e Swift'
    },
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
      technologies: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Redis', 'Elasticsearch', 'SQLite'],
      description: 'Modelagem, otimização e administração de bancos de dados relacionais e NoSQL para máxima eficiência'
    },
    {
      category: 'DevOps & Cloud',
      icon: <CloudLightning className="w-8 h-8" />,
      technologies: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Jenkins', 'Terraform', 'Nginx', 'Google Cloud'],
      description: 'Automação completa de deploy, infraestrutura como código e orquestração de containers'
    },
    {
      category: 'Mobile Technologies',
      icon: <Globe className="w-8 h-8" />,
      technologies: ['React Native', 'Progressive Web Apps', 'Ionic', 'Native Android', 'Native iOS', 'Cross-platform'],
      description: 'Experiência em múltiplas tecnologias mobile e desenvolvimento de aplicações híbridas e nativas'
    },
    {
      category: 'Security & Authentication',
      icon: <Shield className="w-8 h-8" />,
      technologies: ['OAuth2', 'JWT', 'Spring Security', 'HTTPS', 'Encryption', 'Firewall', 'Biometrics'],
      description: 'Implementação de segurança multicamadas e autenticação robusta para proteção total de dados'
    },
    {
      category: 'Performance & Optimization',
      icon: <Zap className="w-8 h-8" />,
      technologies: ['Performance Monitoring', 'Code Optimization', 'Caching', 'CDN', 'Load Balancing'],
      description: 'Otimização avançada de performance e escalabilidade para aplicações mobile e web de alto tráfego'
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
      title: 'FinTrack360 - Controle Financeiro',
      description: 'Aplicativo Flutter para controle financeiro pessoal/familiar. Foco em mobile-first (Android/iOS) com teste rápido via web. Sistema completo de gestão de economia doméstica.',
      technologies: ['Flutter', 'Dart', 'Mobile-First', 'Android', 'iOS', 'Web', 'Financial Management', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=300&fit=crop',
      link: 'https://reinaldobarreto.github.io/fintrack360/',
      featured: true
    },
    {
      title: 'Sistema de Gestão Pública Integrada',
      description: 'Plataforma completa para gestão de recursos humanos, tributário e contábil para prefeituras com módulos integrados e dashboard analítico. (Em desenvolvimento)',
      technologies: ['Vue.js', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT', 'Redis'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      link: '#',
      featured: true
    },
    {
      title: 'E-Commerce Mobile Flutter',
      description: 'App de e-commerce nativo Flutter para Android e iOS com pagamentos integrados, carrinho de compras e sistema de notificações. (Em desenvolvimento)',
      technologies: ['Flutter', 'Dart', 'Kotlin', 'Swift', 'Firebase', 'Stripe', 'REST API'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      link: '#',
      featured: true
    },
    {
      title: 'Portal Administrativo Responsivo',
      description: 'Interface moderna e intuitiva para gestão de sistemas administrativos municipais com dashboard em tempo real. (Em desenvolvimento)',
      technologies: ['Angular', 'TypeScript', 'Material UI', 'Spring Boot', 'WebSocket', 'PWA'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop',
      link: '#',
      featured: false
    },
    {
      title: 'App de Fitness Mobile',
      description: 'Aplicativo Flutter de fitness com rastreamento de treinos, gráficos de progresso e integração com wearables. (Em desenvolvimento)',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Charts', 'Sensors', 'Health Kit', 'Google Fit'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop',
      link: '#',
      featured: false
    },
    {
      title: 'API de Segurança Pública',
      description: 'Sistema robusto de APIs para integração de dados de segurança pública com análise de dados em tempo real. (Em desenvolvimento)',
      technologies: ['Node.js', 'Express', 'JWT', 'PostgreSQL', 'Docker', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
      link: '#',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--neuo-bg)' }}>
      <Navigation />

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16">
        <div className="container mx-auto px-6 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Profile — Neumorphic frame */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={heroInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex justify-center mb-10"
            >
              <div className="w-44 h-44 rounded-full neuo-flat-lg p-3 flex items-center justify-center">
                <div className="w-full h-full rounded-full neuo-inset p-2">
                  <Avatar className="w-full h-full">
                    <AvatarImage src={profilePhoto} alt="Reinaldo Barreto" className="object-cover" />
                    <AvatarFallback className="text-3xl font-black bg-transparent text-portfolio-primary">RB</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xs uppercase tracking-[0.5em] text-portfolio-secondary mb-4"
            >
              RBtech · Portfolio
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-black mb-5 portfolio-text-gradient neon-glow tracking-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.35 }}
            >
              Reinaldo Barreto da Silva
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl neuo-inset-sm mb-6"
            >
              <Smartphone className="w-5 h-5 text-portfolio-secondary" />
              <span className="text-base md:text-lg text-foreground font-mono font-semibold">
                Flutter Mobile Developer
              </span>
              <Rocket className="w-5 h-5 text-portfolio-primary" />
            </motion.div>

            <motion.p
              className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Especialista em <span className="text-portfolio-primary font-semibold">Flutter/Dart</span> para
              <span className="text-portfolio-secondary font-semibold"> Android & iOS</span> com sólida experiência
              em <span className="text-portfolio-accent font-semibold">Full Stack Development</span>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-col sm:flex-row gap-5 justify-center mb-10"
            >
              <button
                onClick={downloadCV}
                className="px-8 py-4 rounded-2xl neuo-pressable text-portfolio-primary font-bold inline-flex items-center justify-center gap-3 group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-2xl neuo-pressable text-portfolio-secondary font-bold inline-flex items-center justify-center gap-3 group"
              >
                <Briefcase className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                Ver Projetos
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-4 mb-10"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {[
                { Icon: Github, href: 'https://github.com/reinaldobarreto', color: 'text-foreground' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/reinaldo-barreto-840896253', color: 'text-portfolio-secondary' },
                { Icon: Mail, href: 'mailto:reinaldo3178@gmail.com', color: 'text-portfolio-primary' },
              ].map(({ Icon, href, color }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.92 }}
                  className={`p-4 rounded-2xl neuo-pressable ${color}`}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Info pill */}
            <motion.div
              className="inline-flex items-center gap-6 px-6 py-4 rounded-2xl neuo-inset-sm text-sm text-muted-foreground"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-portfolio-primary" />
                Navegantes, SC
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-portfolio-secondary" />
                +55 (47) 98830-2308
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.4 }}
              className="mt-14 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="w-12 h-12 rounded-full neuo-flat-sm flex items-center justify-center text-portfolio-primary"
              >
                <ArrowDown size={18} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-24">
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
              <div key={stat.label} className="text-center p-6 rounded-2xl neuo-flat">
                <stat.icon className={`w-8 h-8 mx-auto mb-2 text-portfolio-primary ${stat.animate ? 'animate-pulse' : ''}`} />
                <div className="text-2xl font-bold text-foreground">{stat.count}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-24">
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
      <section id="projects" className="py-24">
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
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full neuo-flat-sm flex items-center justify-center text-portfolio-primary z-10">
                    <Star className="w-4 h-4" />
                  </div>
                )}
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
