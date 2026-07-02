import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const contacts = [
  { icon: Mail, label: 'Email', value: 'reinaldo3178@gmail.com', href: 'mailto:reinaldo3178@gmail.com', color: 'text-portfolio-primary' },
  { icon: Phone, label: 'WhatsApp', value: '+55 (47) 98830-2308', href: 'tel:+5547988302308', color: 'text-portfolio-green' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Conecte-se comigo', href: 'https://www.linkedin.com/in/reinaldo-barreto-840896253', color: 'text-portfolio-secondary' },
  { icon: Github, label: 'GitHub', value: 'Veja meus projetos', href: 'https://github.com/reinaldobarreto', color: 'text-foreground' },
];

const ContactSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-portfolio-secondary mb-4">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 portfolio-text-gradient">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Entre em contato para discutir seus projetos mobile e como posso ajudar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="neuo-flat rounded-3xl p-6 text-center block"
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl neuo-inset-sm flex items-center justify-center ${c.color}`}>
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{c.label}</h3>
              <p className="text-xs text-muted-foreground break-all">{c.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full neuo-inset-sm text-sm text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 text-portfolio-primary" />
            Navegantes, SC — Brasil
          </div>
          <p className="text-xs text-muted-foreground">
            © 2024 Reinaldo Barreto · RBtech · Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
