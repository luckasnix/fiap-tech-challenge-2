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

4. Crie o arquivo de variáveis de ambiente:

    No diretório raiz do projeto, crie um arquivo chamado `.env` e adicione a variável `NEXT_PUBLIC_BACKEND_URL`, que deve conter a URL usada pelo backend.

5. Instale as dependências:

    ```bash
    npm install
    ```

6. Execute o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

7. Abra o seu navegador em [http://localhost:3000](http://localhost:3000)

## Executando o Projeto com o Docker

1. Construa a imagem:

    ```bash
    docker build --build-arg NEXT_PUBLIC_BACKEND_URL=URL_BACKEND --tag=NOME_IMAGEM:TAG_IMAGEM .
    ```

    Exemplo:

    ```bash
    docker build --build-arg NEXT_PUBLIC_BACKEND_URL=http://localhost:8000 --tag=fiap-tc-frontend:latest .
    ```

2. Execute o contêiner:

    ```bash
    docker run -p 3000:3000 -d --rm --name=NOME_CONTÊINER NOME_IMAGEM:TAG_IMAGEM
    ```

    Exemplo:

    ```bash
    docker run -p 3000:3000 -d --rm --name=fiap-tc-frontend-app fiap-tc-frontend:latest
    ```

## Executando a Documentação do Design System

1. Abra o terminal da sua máquina

2. Execute o Storybook:

    ```bash
    npm run storybook
    ```

3. Abra o seu navegador em [http://localhost:6006](http://localhost:6006)
