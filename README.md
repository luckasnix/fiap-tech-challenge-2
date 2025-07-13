# FIAP - Tech Challenge #2

Aplicação do 1º Tech Challenge da pós-graduação de Front-end Engineering da FIAP.

## Executando o Projeto em Modo Desenvolvimento

Siga as etapas abaixo para configurar e executar o projeto em seu ambiente local.

1. Abra o terminal da sua máquina

2. Clone o repositório:

    ```bash
    git clone https://github.com/luckasnix/fiap-tech-challenge-2.git
    ```

3. Navegue até o diretório do projeto:

    ```bash
    cd fiap-tech-challenge-2
    ```

4. Instale as dependências:

    ```bash
    npm install
    ```

5. Execute o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

6. Abra o seu navegador em [http://localhost:3000](http://localhost:3000)

## Executando o Projeto com o Docker

1. Construa a imagem:

    ```bash
    docker build --tag=NOME_IMAGE:TAG_IMAGEM .
    ```

2. Execute o contêiner:

    ```bash
    docker run -p 3000:3000 -d --rm --name=NOME_CONTÊINER NOME_IMAGE:TAG_IMAGEM
    ```

## Executando a Documentação do Design System

1. Abra o terminal da sua máquina

2. Execute o Storybook:

    ```bash
    npm run storybook
    ```

3. Abra o seu navegador em [http://localhost:6006](http://localhost:6006)
