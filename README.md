# 🔗 Linktree Clone - Angular

Clone profissional do Linktree desenvolvido com **Angular**, **TypeScript** e **CSS moderno**. Projeto criado para demonstrar habilidades de front-end e servir como peça de portfólio.

![Desktop View](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## ✨ Features

- 🎨 **Design Moderno**: Glassmorphism, gradientes vibrantes e animações suaves
- 📱 **Totalmente Responsivo**: Mobile-first design com breakpoints otimizados
- 🧩 **Componentizado**: Arquitetura baseada em componentes standalone do Angular
- ⚡ **Performance**: Animações CSS otimizadas e carregamento rápido
- ♿ **Acessível**: Navegação por teclado e focus states visíveis
- 🔒 **Seguro**: Links externos com `noopener` e `noreferrer`
- 🎯 **TypeScript**: Tipagem forte com interfaces customizadas

## 🚀 Demo

Acesse a aplicação rodando localmente:

```bash
npm start
```

Abra [http://localhost:4200](http://localhost:4200) no navegador.

## 📦 Instalação

### Pré-requisitos

- Node.js (v18 ou superior)
- npm (v9 ou superior)

### Passos

1. Clone o repositório (ou navegue até a pasta do projeto):

```bash
cd c:\Users\mathe\linktree
```

2. Instale as dependências (já instaladas):

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm start
```

4. Acesse `http://localhost:4200/` no navegador

## 🎨 Personalização

### 1. Editar Perfil

Abra `src/app/components/profile/profile.component.ts`:

```typescript
profileData = {
  name: 'Seu Nome',
  bio: 'Sua Bio Profissional',
  avatar: 'URL_da_sua_foto'
};
```

### 2. Editar Links

Abra `src/app/data/links.data.ts`:

```typescript
export const LINKS_DATA: Link[] = [
  {
    id: 1,
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/seu-perfil',
    icon: '💼',
    category: 'professional'
  },
  // Adicione mais links...
];
```

### 3. Customizar Cores

Abra `src/styles.css` e edite as variáveis CSS:

```css
:root {
  --accent-primary: #3b82f6;      /* Azul */
  --accent-secondary: #8b5cf6;    /* Roxo */
  --accent-tertiary: #ec4899;     /* Rosa */
}
```

## 🏗️ Arquitetura

```
src/
├── app/
│   ├── components/
│   │   ├── profile/           # Componente de perfil
│   │   ├── link-button/       # Botão de link reutilizável
│   │   └── links-list/        # Container de links
│   ├── models/
│   │   └── link.model.ts      # Interface TypeScript
│   ├── data/
│   │   └── links.data.ts      # Array de links
│   ├── app.ts                 # Componente principal
│   ├── app.html
│   └── app.css
└── styles.css                 # Design system global
```

## 🎯 Componentes

### ProfileComponent

Exibe avatar, nome e bio do usuário com animações de entrada.

### LinkButtonComponent

Botão reutilizável com:
- Hover effects (scale, glow, shimmer)
- Click tracking
- Variações de cor por categoria
- Ícones personalizados

### LinksListComponent

Container que renderiza lista de links com animações escalonadas.

## 🎨 Design System

- **CSS Variables**: Cores, espaçamentos, tipografia
- **Google Fonts**: Inter
- **Glassmorphism**: Transparências e backdrop-filter
- **Animações**: fadeIn, slideUp, pulse
- **Responsividade**: Mobile-first approach

## 📱 Responsividade

- **Mobile** (≤ 480px): Layout vertical, botões full-width
- **Tablet** (≤ 768px): Layout centralizado
- **Desktop** (> 768px): Max-width 600px, hover effects completos

## 🛠️ Tecnologias

- **Angular** (v19+)
- **TypeScript** (v5+)
- **HTML5**
- **CSS3** (Vanilla CSS)
- **RxJS**

## 📝 Scripts Disponíveis

```bash
npm start          # Inicia servidor de desenvolvimento
npm run build      # Build para produção
npm test           # Executa testes
npm run lint       # Verifica código
```

## 🌟 Diferenciais

✅ Código limpo e bem documentado  
✅ Componentização profissional  
✅ Design moderno e atraente  
✅ Totalmente responsivo  
✅ Acessibilidade implementada  
✅ Performance otimizada  
✅ Pronto para portfólio

## 📄 Licença

Este projeto é open source e está disponível para uso pessoal e educacional.

## 👨‍💻 Autor

Desenvolvido como projeto de portfólio demonstrando habilidades em:
- Angular
- TypeScript
- Design moderno
- Componentização
- Responsividade
- Boas práticas de código

---

**Feito com ❤️ usando Angular**
