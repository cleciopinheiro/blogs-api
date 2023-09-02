# Blogs API

[Trybe](https://www.betrybe.com/) é uma escola de tecnologia focada na formação de Desenvolvedores Web e o projeto Blogs API foi proposto como uma atividade para aprimorar os estudos sobre desenvolvimento back-end.
## Descrição

A aplicação é uma API e um banco de dados com conteúdo de um blog. Deve permitir a criação, leitura, atualização e remoção de informações do blog do banco de dados. Ele também realiza autenticação para conceder permissões aos usuários.

## Técnologias e Ferramentas
<div>
    <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql"/>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="docker"/>
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express"/>
    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="sequelize"/>
</div>

<br>

Na elaboração da API RESTful foi utilizada a arquitetura **Model-Service-Controller(MSC)**. As demais tecnologias e ferramentas foram:

- [Node.JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [Sequelize](https://sequelize.org/)

## ⚙️ Como utilizar

To run the application start with the repositorie clone using the command bellow.

    git clone git@github.com:cleciopinheiro/blogs-api.git
    
Navegue até a raiz do projeto

    cd blogs-api/
    
<details>
   <summary><strong>Executando localmente</strong></summary> 
  </br>
  <strong>Obs:</strong> Para executar a aplicação desta forma você deve ter o [Node](https://nodejs.org/en/) instalado em sua máquina.
  </br>
  </br>
  

Na raiz do projeto execute o comando abaixo para instalar as dependências.
  
    npm install
  
Faça login no banco de dados usando suas credenciais.
 
    mysql -u <your-username> -p
  
Execute os comandos para criar o banco de dados **BlogsApi**
  
    npm prestart
    
Inicie a aplicação com <strong>nodemon</strong> usando o comando abaixo.
  
    npm debug
  
</details>

<details>
   <summary><strong>Executando com Docker</strong></summary> 
  </br>
  
  <strong>Obs:</strong> Para rodar a aplicação desta forma você deve ter o [Docker](https://www.docker.com/) instalado em sua máquina.
  
  </br>
  
  Na raiz do projeto, faça upload dos contêineres <strong>blogs_api</strong> e <strong>blogs_api_db</strong> usando docker-compose.

    docker-compose up -d
    
  Abra o terminal de contêiner <strong>blogs_api</strong>.

    docker exec -it blogs_api bash

  Uma vez no terminal de contêiner, execute o comando abaixo para instalar as dependências.
    
    npm install
    
  Para conectar-se ao banco de dados, abra o terminal de contêiner <strong>blogs_api_db</strong>.
  
    docker exec -it blogs_api_db bash
    
  Faça login no banco de dados usando as credenciais descritas em <strong>docker-compose.yaml</strong>.
  
    mysql -r root -p

  Para criar o banco de dados, execute o comando abaixo no terminal de contêiner <strong>blogs_api</strong>.
  
    npm prestart
    
  Para iniciar o servidor com <strong>nodemon</strong> use o comando abaixo no terminal do container <strong>blogs_api</strong>.

    
    npm run debug
    
</details>

## Rotas

 Você pode verificar todas as rotas acessando o endpoint /docs em seu navegador ao executar o aplicativo.

<details>
    <summary>Previews das rotas</summary>
    

![Captura de tela de 2023-01-03 12-17-30](https://user-images.githubusercontent.com/98956659/210414272-be24136f-e2e9-4b72-8c83-f1c98ba4bc84.png)
![Captura de tela de 2023-01-03 12-17-42](https://user-images.githubusercontent.com/98956659/210414520-2b59fb45-9162-4164-81c0-44f2369ea48f.png)

    
</details>
    
---
 
Developed by [Clécio Pinheiro](https://www.linkedin.com/in/cleciopinheirodev), © 2023.
