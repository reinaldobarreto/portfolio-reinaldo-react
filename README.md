
# Portfólio Reinaldo Barreto - Desenvolvedor Full Stack

Um portfólio moderno e interativo desenvolvido com React, TypeScript, Three.js e Framer Motion, apresentando efeitos 3D, animações suaves e design responsivo.

## 🚀 Passo a Passo para Criar o Projeto

### 1. Criar o projeto com Vite

```bash
# Criar novo projeto React com TypeScript
npm create vite@latest portfolio-reinaldo --template react-ts
cd portfolio-reinaldo
```

### 2. Instalar dependências base

```bash
# Instalar dependências do React
npm install

# Instalar Tailwind CSS e shadcn/ui
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Instalar shadcn/ui
npx shadcn-ui@latest init
```

### 3. Instalar bibliotecas 3D e animações

```bash
# Three.js e React Three Fiber (versões específicas para React 18)
npm install @react-three/fiber@^8.18.0 @react-three/drei@^9.122.0 three@^0.160.0

# Framer Motion para animações
npm install framer-motion@^11.11.1

# React Intersection Observer para scroll animations
npm install react-intersection-observer@^9.13.1

# Lucide React para ícones
npm install lucide-react

# React Router para navegação
npm install react-router-dom

# Sonner para notificações toast
npm install sonner
```

### 4. Instalar componentes shadcn/ui necessários

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add card
```

### 5. Configurar TypeScript para Three.js

Crie o arquivo `src/types/three.d.ts`:

```typescript
declare module 'three' {
  export * from 'three/src/Three';
}
```

### 6. Iniciar o projeto

```bash
npm run dev
```

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool rápido para desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI reutilizáveis
- **Three.js** - Biblioteca JavaScript para gráficos 3D
- **@react-three/fiber** - Renderer React para Three.js
- **@react-three/drei** - Helpers úteis para React Three Fiber
- **Framer Motion** - Biblioteca de animações para React
- **Lucide React** - Biblioteca de ícones
- **React Router DOM** - Roteamento para React
- **Sonner** - Notificações toast elegantes

## 🎨 Características do Design

- **Efeitos 3D**: Esfera animada no hero section usando Three.js
- **Animações suaves**: Transições e micro-interações com Framer Motion
- **Cards que viram**: Habilidades técnicas com efeito flip 3D
- **Timeline interativa**: Experiência profissional em linha do tempo
- **Design responsivo**: Adaptável a todos os dispositivos
- **Gradientes modernos**: Esquema de cores profissional
- **Glass morphism**: Efeitos de vidro fosco
- **Scroll animations**: Elementos aparecem durante o scroll
- **Hover effects**: Interações elegantes ao passar o mouse

## 📱 Seções do Portfólio

1. **Hero Section**: Apresentação com efeito 3D e links para redes sociais
2. **Habilidades**: Cards interativos com flip effect mostrando tecnologias
3. **Experiência**: Timeline profissional com animações
4. **Projetos**: Galeria de projetos com hover effects
5. **Contato**: Formulário funcional e informações de contato
6. **Navegação**: Menu responsivo com scroll suave

## 🎯 Customizações Disponíveis

### Cores e Gradientes
Edite `src/index.css` para personalizar:
- `--portfolio-primary`: Cor primária
- `--portfolio-secondary`: Cor secundária  
- `--portfolio-accent`: Cor de destaque

### Conteúdo
Atualize os dados em `src/pages/Index.tsx`:
- Informações pessoais
- Habilidades técnicas
- Experiências profissionais
- Projetos desenvolvidos
- Links de contato

### Animações 3D
Modifique `src/components/Scene3D.tsx` para:
- Alterar a geometria da esfera
- Modificar cores e materiais
- Ajustar velocidade das animações
- Adicionar novos objetos 3D

## 🚀 Deploy

Para fazer deploy do projeto:

```bash
# Build para produção
npm run build

# Preview do build
npm run preview
```

### Opções de Deploy:
- **Vercel**: `npx vercel`
- **Netlify**: Conecte o repositório GitHub
- **GitHub Pages**: Use GitHub Actions
- **Lovable**: Publique direto da interface

## 📞 Contato

**Reinaldo Barreto**
- 📧 Email: reinaldo3178@gmail.com
- 📱 WhatsApp: +55 (47) 98830-2308
- 💼 LinkedIn: [linkedin.com/in/reinaldo-barreto-840896253](https://www.linkedin.com/in/reinaldo-barreto-840896253)
- 🐙 GitHub: [github.com/reinaldobarreto](https://github.com/reinaldobarreto)
- 📍 Localização: Navegantes, SC - Brasil

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ usando React, Three.js e muito café ☕**
