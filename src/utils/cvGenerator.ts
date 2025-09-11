import jsPDF from 'jspdf';

export const generateCV = () => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // Colors (Dracula-inspired)
  const primaryColor = '#6272A4';
  const secondaryColor = '#BD93F9';
  const accentColor = '#50FA7B';
  const backgroundColor = '#282A36';
  const yellowColor = '#F1FA8C';

  // Header background
  pdf.setFillColor(40, 42, 54); // backgroundColor
  pdf.rect(0, 0, pageWidth, 60, 'F');

  // Name
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Reinaldo Barreto da Silva', 15, 25);

  // Contact info
  pdf.setTextColor(241, 250, 140); // yellow
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text('📱 +55 (47) 98830-2308 - WhatsApp', 15, 35);
  pdf.text('✉️ reinaldo3178@gmail.com', 15, 42);
  pdf.text('💼 https://www.linkedin.com/in/reinaldo-barreto-840896253', 15, 49);
  pdf.text('🔗 https://github.com/reinaldobarreto', 15, 56);

  // Location
  pdf.setTextColor(80, 250, 123); // accent
  pdf.text('📍 Navegantes – SC, Brasil', 130, 35);

  // Professional title section
  pdf.setFillColor(98, 114, 164); // primary
  pdf.rect(15, 70, pageWidth - 30, 20, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Desenvolvedor Full-stack em JavaScript(React.js e Next.js) e Node.js(Express e Nest.js)', 20, 82);

  // Resume Professional
  let yPosition = 100;
  pdf.setFillColor(40, 42, 54);
  pdf.rect(15, yPosition, pageWidth - 30, 10, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('📋 Resumo Profissional', 20, yPosition + 7);

  yPosition += 15;
  pdf.setTextColor(0, 0, 0);
  pdf.setFontSize(9);
  pdf.setFont('helvetica', 'normal');
  const resumeText = 'Desenvolvedor com ampla experiência em projetos para o setor público, atuando na EDZA, LampTT e PRODEB. Domínio de stacks modernas com foco em desenvolvimento web full stack utilizando JavaScript, Node.js, Angular, React.js, Vue.js e PHP. Sólida vivência com Java EE, JSP, jQuery e Vanilla JS em sistemas legados e modernos. Experiência em APIs RESTful, segurança (OAuth2), CI/CD, e bancos de dados relacionais.';
  
  const splitText = pdf.splitTextToSize(resumeText, pageWidth - 40);
  pdf.text(splitText, 20, yPosition);
  yPosition += splitText.length * 4 + 10;

  // Objetivo
  pdf.setFillColor(40, 42, 54);
  pdf.rect(15, yPosition, pageWidth - 30, 10, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('🎯 Objetivo', 20, yPosition + 7);

  yPosition += 15;
  pdf.setTextColor(0, 0, 0);
  pdf.setFontSize(9);
  const objectiveText = 'Atuar como Desenvolvedor Full Stack com foco em tecnologias JavaScript, incluindo Angular, React.js e Next.js no front-end e Node.js e Nest.js no back-end. Tenho forte base com PHP, Java EE e grande experiência com JavaScript Vanilla e jQuery em sistemas públicos.';
  const splitObjective = pdf.splitTextToSize(objectiveText, pageWidth - 40);
  pdf.text(splitObjective, 20, yPosition);
  yPosition += splitObjective.length * 4 + 10;

  // Two columns layout
  const leftColumnX = 15;
  const rightColumnX = 110;
  const columnWidth = 85;

  // Formação Acadêmica
  pdf.setFillColor(40, 42, 54);
  pdf.rect(leftColumnX, yPosition, columnWidth, 10, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'bold');
  pdf.text('🎓 Formação Acadêmica', leftColumnX + 5, yPosition + 7);

  // Experiência Profissional
  pdf.setFillColor(40, 42, 54);
  pdf.rect(rightColumnX, yPosition, columnWidth, 10, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(11);
  pdf.text('💼 Experiência Profissional', rightColumnX + 5, yPosition + 7);

  yPosition += 15;

  // Left column content
  pdf.setTextColor(0, 0, 0);
  pdf.setFontSize(8);
  pdf.setFont('helvetica', 'normal');
  
  // Education
  pdf.text('• Centro Universitário Jorge Amado – UNIJORGE', leftColumnX + 5, yPosition);
  pdf.text('   Análise e Desenvolvimento de Sistemas', leftColumnX + 5, yPosition + 4);
  pdf.text('• CEEP Newton Sucupira', leftColumnX + 5, yPosition + 12);
  pdf.text('   Técnico em Administração', leftColumnX + 5, yPosition + 16);

  // Right column content - Experience
  pdf.text('• PRODEB - Companhia de Processamento de Dados da Bahia', rightColumnX + 5, yPosition);
  pdf.text('   📅 Mar/2024 – Set/2024  👨‍💻 Desenvolvedor Full stack', rightColumnX + 5, yPosition + 4);
  pdf.text('   Desenvolvimento e manutenção de sistemas web utilizando Vue.js', rightColumnX + 5, yPosition + 8);
  pdf.text('   e Spring Boot. Construção de APIs RESTful seguras, versionamento', rightColumnX + 5, yPosition + 12);
  pdf.text('   com Git e práticas DevOps. Colaboração com equipes ágeis e', rightColumnX + 5, yPosition + 16);
  pdf.text('   entrega contínua de soluções para órgãos estaduais.', rightColumnX + 5, yPosition + 20);

  yPosition += 30;

  // Habilidades Técnicas
  pdf.setFillColor(40, 42, 54);
  pdf.rect(leftColumnX, yPosition, columnWidth, 10, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'bold');
  pdf.text('⚙️ Habilidades Técnicas', leftColumnX + 5, yPosition + 7);

  yPosition += 15;
  pdf.setTextColor(0, 0, 0);
  pdf.setFontSize(8);
  
  const skills = [
    '• Linguagens: JavaScript (ES6+), TypeScript, Java, PHP',
    '• Front-End: Angular, React.js | Next.js, Vue.js, Redux,',
    '  Tailwind CSS e jQuery.',
    '• Back-End: Node.js, Nest.js Spring Boot, Java EE',
    '• Banco de Dados: SQL, PostgreSQL, MySQL, Oracle',
    '• Ferramentas: Git, Docker, CI/CD, Swagger',
    '• Metodologias: Scrum, Kanban',
    '• Segurança: OAuth2, JWT, Spring Security, OWASP Top',
    '  10, GraphQL, Criptografia e Hashing.'
  ];

  skills.forEach((skill, index) => {
    pdf.text(skill, leftColumnX + 5, yPosition + (index * 4));
  });

  // Continue with right column experience
  pdf.text('• LAMPP IT Solutions', rightColumnX + 5, yPosition);
  pdf.text('   📅 Mar/2022 – Mai/2022  👨‍💻 Desenvolvedor Full stack', rightColumnX + 5, yPosition + 4);
  pdf.text('   Participação em projetos de segurança pública com uso de', rightColumnX + 5, yPosition + 8);
  pdf.text('   Node.js no back-end e Angular 2+ no front.', rightColumnX + 5, yPosition + 12);
  pdf.text('   Integração de APIs REST com bancos relacionais e foco em', rightColumnX + 5, yPosition + 16);
  pdf.text('   autenticação segura.', rightColumnX + 5, yPosition + 20);

  pdf.text('• EDZA Planejamento Consultoria e Informática LTDA', rightColumnX + 5, yPosition + 28);
  pdf.text('   📅 Nov/2019 – Mar/2022  👨‍💻 Desenvolvedor Full stack', rightColumnX + 5, yPosition + 32);
  pdf.text('   Desenvolvimento de sistemas administrativos para prefeituras', rightColumnX + 5, yPosition + 36);
  pdf.text('   (RH, Tributário, Contábil). Atuação com Java EE, JSP,', rightColumnX + 5, yPosition + 40);
  pdf.text('   JavaScript puro (Vanilla JS), jQuery e integração com APIs', rightColumnX + 5, yPosition + 44);
  pdf.text('   REST. Implementação de funcionalidades front-end com', rightColumnX + 5, yPosition + 48);
  pdf.text('   Angular e Vue.js em sistemas modernos.', rightColumnX + 5, yPosition + 52);

  yPosition += 70;

  // Cursos e Certificações
  pdf.setFillColor(40, 42, 54);
  pdf.rect(leftColumnX, yPosition, columnWidth, 10, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'bold');
  pdf.text('📚 Cursos e Certificações', leftColumnX + 5, yPosition + 7);

  yPosition += 15;
  pdf.setTextColor(0, 0, 0);
  pdf.setFontSize(7);
  
  const courses = [
    '• APIs RESTful com Spring Boot e Java – Udemy (2022)',
    '• JavaScript Completo(Hcode treinamentos) (2023)',
    '• Full Stack com Node.js e Vue.js – Udemy (2023)',
    '• Angular com TypeScript – Udemy (2022)',
    '• React.js Completo – Udemy (2023)',
    '• PHP com Orientação a Objetos – Udemy(2023)',
    '• Inglês - Matheus Werner Jerke'
  ];

  courses.forEach((course, index) => {
    pdf.text(course, leftColumnX + 5, yPosition + (index * 4));
  });

  // Save the PDF
  pdf.save('Reinaldo_Barreto_CV.pdf');
};