
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Entre em contato para discutir seus projetos e como posso ajudar
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <motion.a
            href="mailto:reinaldo3178@gmail.com"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <Mail className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm opacity-90">reinaldo3178@gmail.com</p>
          </motion.a>
          
          <motion.a
            href="tel:+5547988302308"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <Phone className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-sm opacity-90">+55 (47) 98830-2308</p>
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/reinaldo-barreto-840896253"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <Linkedin className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm opacity-90">Conecte-se comigo</p>
          </motion.a>
          
          <motion.a
            href="https://github.com/reinaldobarreto"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <Github className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-sm opacity-90">Veja meus projetos</p>
          </motion.a>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex items-center justify-center text-white/80 mb-4">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Navegantes, SC - Brasil</span>
          </div>
          <p className="text-white/60 text-sm">
            © 2024 Reinaldo Barreto. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
