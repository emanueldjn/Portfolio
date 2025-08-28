# Portfolio

Este é um projeto de portfólio pessoal desenvolvido com Next.js, React e TypeScript. O objetivo é apresentar meus principais projetos, informações pessoais e formas de contato de maneira moderna e responsiva.

## Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações web modernas, com suporte a SSR e SSG.
- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Lucide React**: Biblioteca de ícones SVG para React.
- **pnpm / npm**: Gerenciadores de pacotes.
- **Tailwind CSS**: Framework de utilitários para estilização rápida e responsiva.
- **CSS**: Estilização customizada, incluindo uso de classes utilitárias.

## Estrutura do Projeto

```
front/
├── app/                # Páginas e layouts principais do Next.js
├── components/         # Componentes reutilizáveis e de UI
├── hooks/              # Custom hooks
├── lib/                # Funções utilitárias
├── public/             # Arquivos estáticos (imagens, PDF)
├── styles/             # Estilos globais
├── package.json        # Dependências e scripts
├── tsconfig.json       # Configuração TypeScript
├── next.config.mjs     # Configuração Next.js
└── README.md           # Documentação do projeto
```

## Principais Componentes

- **About.tsx**: Seção "Sobre mim".
- **Portfolio.tsx**: Lista de projetos com imagem, descrição, tecnologias e links.
- **Contact.tsx**: Formas de contato.
- **Header/Footer/Home**: Estrutura de navegação e apresentação.
- **UI Components**: Botão, card, etc. em `components/ui/`.

## Como rodar o projeto localmente

1. Instale as dependências:
   ```bash
   pnpm install
   # ou
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm dev
   # ou
   npm run dev
   ```
3. Acesse `http://localhost:3000` no navegador.

## Como fazer deploy na Vercel

1. Faça login em [vercel.com](https://vercel.com/) e importe o repositório.
2. Certifique-se de que as imagens estejam na pasta `public/imgs` e os caminhos estejam corretos (ex: `/imgs/emanuel.jpeg`).
3. O deploy será feito automaticamente após cada push na branch principal.

## Personalização

- Para adicionar novos projetos, edite o array `projects` em `Portfolio.tsx`.
- Para alterar informações pessoais, edite o componente `About.tsx`.
- Para adicionar novas imagens, coloque-as em `public/imgs` e use o caminho `/imgs/nome-da-imagem.extensão`.

## Licença

Este projeto é de uso pessoal e pode ser adaptado conforme sua necessidade.
