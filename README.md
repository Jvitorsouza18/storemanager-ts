<h1>:computer: Store-manager</h1>
<div>
  <h3>Sobre o projeto</h3>
  <p>Esse é um projeto que simula uma API e um banco de dados para o gerenciamento de uma loja</p>
</div>
<div>
  <h3>Ferramentas utilizadas</h3>
  <ul>
    <li><a href="https://nodejs.org/en/">Node.js<a/></li>
    <li><a href="https://www.typescriptlang.org">Typescript<a/></li>
    <li><a href="https://expressjs.com/">Express<a/></li>
    <li><a href="https://www.npmjs.com/package/mysql">MYSQL</a></li>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD">CRUD</a></li>
    <li><a href="https://medium.com/desenvolvendo-com-paixao/o-que-é-solid-o-guia-completo-para-você-entender-os-5-princípios-da-poo-2b937b3fc530">S.O.L.I.D</a></li>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Glossary/REST">REST</a></li>
  </ul>
</div>
<div>
  <h3>Orientações</h3>
  <details>
  <summary>:octocat: <strong>Clonando o repositório e instalando os node modules</strong></summary>
    
  1. Clone o repositório
    
  - `git clone git@github.com:Jvitorsouza18/talker-manager.git`;

  
  2. Faça a instalação das dependências
  
  - `npm install` ou `npm i`;
  </details>
  <details>
  <summary>:game_die: <strong>Configurando o conexão com o banco de dados</strong></summary>

  1. Criando arquivo para a configuração
  
  - Copie o arquivo .env.example na na raiz do projeto e renomeio para:
    - `.env`;
    
  - Coloque as seguintes informações nesse arquivo:
    ```
    #### SERVER VARS
    NODE_ENV=development
    API_PORT=3000

    #### DATABASE VARS
    MYSQL_HOST=localhost
    MYSQL_PORT=3306
    MYSQL_DB_NAME=blogs-api
    MYSQL_USER=root
    MYSQL_PASSWORD=1234

    #### SECRECT VARS
    JWT_SECRET=suaSenhaSecreta
    ```
  - Caso sua porta do API e do MySQL não seja a que estão descritas no arquivo .env, por favor altere para as que você usa, assim como o password do seu MySQL.
   
  2. Variáveis Ambiente
  - Caso queria conhecer mais sobre variáveis ambiente, segue link sobre:
    - https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/
  </details>
  <details>
  <summary>:running: <strong>Rodando API localmente</strong></summary>
  
  - Rode o seguinte comando no terminal estando na raiz do projeto:
  
    - `npm start`;
    
  - Caso você queira foi configurado no package.json um scripts para rodar a aplicação de formas alternativas;
  </details>
  


#
