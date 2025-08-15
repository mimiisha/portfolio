# 🌟 Portfólio - Misha

Este é o meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos e formas de contato de maneira clara e interativa.  
O projeto foi construído com **Vite**, **React (JSX)** e **Tailwind CSS**, com integração de **EmailJS** para envio de mensagens diretamente pelo formulário.

---

## 🖥️ Funcionalidades

- **🏠 Home**  
  Apresentação do conteúdo do portfólio, com botões para:
  - Acessar meu GitHub.
  - Baixar meu currículo.

- **📄 Sobre**  
  - Breve texto sobre mim.  
  - Botão para download da minha carta de apresentação.  
  - Sessão com meus **conhecimentos técnicos**.  
  - Lista de **cursos e certificados**.

- **📂 Projetos**  
  - Cards com nome e descrição de cada projeto.  
  - Ícones que redirecionam para:
    - Repositório no GitHub.
    - Versão online do projeto hospedada no **Vercel**.

- **📬 Contato**  
  - Ícones com links para minhas redes sociais.  
  - Formulário funcional integrado com **EmailJS** para envio direto de mensagens para minha caixa de e-mails.

---

## 🛠 Tecnologias Utilizadas

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)

---

## 📂 Estrutura do Código
```plaintext
📁 portfolio
 ├── 📁 public         # Arquivos públicos
 ├── 📁 src
 │    ├── 📁 components  # Componentes reutilizáveis
 │    ├── 📁 pages       # Páginas principais 
 │    ├── 📁 imgs        # Imagens utilizadas no projeto
 │    ├── 📁 svg         # Arquivos JSX para exportação de ícones SVG
 │    ├── main.jsx       # Entrada do React
 │    └── index.css      # Estilo global com Tailwind
 ├── index.html
 ├── package.json
 ├── tailwind.config.js
 └── vite.config.js