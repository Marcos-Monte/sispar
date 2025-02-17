# SISPAR - Sistema de Reembolsos

O **SISPAR** é uma aplicação web desenvolvida no curso Fullstack 'Be Digital' da Vai na Web, oferecido pela Wilson Sons. O objetivo desse projeto é construir um sistema de reembolsos, que, por enquanto, está focado no front-end com React. O projeto está sendo desenvolvido de forma incremental, com novas funcionalidades a serem adicionadas conforme o curso avança.

## Funcionalidades

Atualmente, a aplicação conta com as seguintes funcionalidades:

- **Página de Login**: A página ainda não conta com autenticação, mas já está preparada para receber essa funcionalidade no futuro.
- **Home Page**: Contém uma 'nav bar' com efeito de abertura e fechamento. A ideia é que no futuro, a navegação seja personalizada com os dados do usuário logado.
- **Dashboard**: Renderiza informações de reembolsos solicitados pelo usuário ao clicar no botão "Início".
- **Reembolsos**: Permite solicitar, cancelar e gerenciar reembolsos.
- **Outras páginas**: "Pesquisa de Reembolsos" e "Histórico de Reembolsos" já possuem rotas definidas, mas ainda não foram implementadas.

## Tecnologias Utilizadas

A aplicação é construída utilizando as seguintes tecnologias:

- **React**: Para construção da interface de usuário.
- **react-router-dom**: Para gerenciar a navegação entre páginas.
- **Sass**: Para estilização da aplicação.
- **ContextAPI**: Para gerenciamento de estado global.
- **react-modal**: Para a criação de modais.
- **Vite**: Como bundler para acelerar o processo de desenvolvimento.

## Futuro do Projeto

Com o encerramento da parte de front-end do curso, o próximo passo será implementar o back-end da aplicação, tornando-a uma aplicação **Full Stack**.

## Como rodar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/Marcos-Monte/SISPAR.git
   ````

2. Instale as Dependências:

   ```bash
    cd SISPAR
    npm install
   ````

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ````

4. Acesse o navegador e acesse a url indicada
