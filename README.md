# FIAP - Tech Challenge #2

Aplicação do 2º Tech Challenge da pós-graduação de Front-end Engineering da FIAP.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface de usuário baseada em componentes.
- **Next.js**: Framework React para construção de aplicações Web modernas, com suporte a SSR (Server-Side Rendering), SSG (Static Site Generation) e API routes.
- **Zustand**: Biblioteca leve para gerenciamento de estado global de forma simples e escalável.
- **Zod**: Biblioteca para validação e definição de schemas de dados, utilizada principalmente para validação de formulários e dados recebidos.
- **Tanstack React Form**: Solução para gerenciamento e validação de formulários de forma declarativa e tipada.
- **Storybook**: Ferramenta para desenvolvimento, documentação e testes isolados dos componentes do Design System.

## Executando o Projeto com o Docker

1. Construa a imagem do [backend](https://github.com/luckasnix/fiap-tech-challenge-backend) seguindo as instruções do seu `README.md` e a nomeie `fiap-tc-backend` com a tag `latest`

2. Execute a stack da aplicação:

    ```bash
    docker-compose up -d
    ```

3. Finalize a stack da aplicação:

    ```bash
    docker-compose down
    ```

## Executando a Documentação do Design System

1. Abra o terminal da sua máquina

2. Execute o Storybook:

    ```bash
    npm run storybook
    ```

3. Abra o seu navegador em [http://localhost:6006](http://localhost:6006)
