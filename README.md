# Up Body - Sistema de Gerenciamento de Serviços



## 📝 Descrição

  

O Up Body é uma API RESTful desenvolvida com NestJS para gerenciamento de serviços relacionados a atividades físicas e bem-estar. O sistema permite o gerenciamento de usuários, categorias de serviços e serviços oferecidos, com autenticação JWT para garantir a segurança das operações.

  

## 🚀 Funcionalidades

  

- Autenticação e autorização de usuários usando JWT

- Gerenciamento de usuários

- Cadastro e gerenciamento de categorias de serviços

- Cadastro e gerenciamento de serviços

- Integração com banco de dados através do TypeORM

- Documentação da API com Swagger

---

## 🧱 Estrutura de Entidades (CRUD)

### 👤 Usuários (Alunos / Instrutores)
- Autenticar usuários  
- Atualizar usuários  
- Cadastrar usuários  
- Listar usuário por ID  
- Listar todos usuários  

### 🏋️‍♀️ Serviços (Treinos e Aulas)
- Listar todos os serviços  
- Consultar serviços por ID  
- Consultar serviços por plano  
- Criar (Cadastrar) serviços  
- Atualizar serviços  

### 🧩 Categorias (Tipos de Treinos e Aulas)
- Listar todas as categorias  
- Listar categoria por ID  
- Listar categoria por tipo  
- Criar (Cadastrar) categoria  
- Atualizar categoria  
- Deletar categoria  

---
  

## 🛠️ Tecnologias Utilizadas

  

- [NestJS](https://nestjs.com/) - Framework Node.js para construção de aplicações server-side

- [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação

- [TypeORM](https://typeorm.io/) - ORM para Node.js e TypeScript

- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional

- [Passport](https://www.passportjs.org/) - Middleware de autenticação

- [JWT](https://jwt.io/) - JSON Web Token para autenticação

- [Swagger](https://swagger.io/) - Documentação da API

  

## 📋 Pré-requisitos

  

- Node.js (versão 14 ou superior)

- npm (gerenciador de pacotes do Node.js)

- PostgreSQL instalado e configurado

  

## 🔧 Instalação

  

1. Clone o repositório:

```bash

git clone https://github.com/Commit8/up_body.git

cd up_body

```

  

2. Instale as dependências:

```bash

npm install

```

  

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env

DATABASE_HOST=localhost

DATABASE_PORT=5432

DATABASE_USER=seu_usuario

DATABASE_PASSWORD=sua_senha

DATABASE_NAME=up_body

JWT_SECRET=seu_segredo_jwt

```

  

## 🚀 Executando o Projeto

  

1. Para desenvolvimento:

```bash

npm run start:dev

```

  

2. Para produção:

```bash

npm run build

npm run start:prod

```

  

A API estará disponível em `http://localhost:3000`

  

## 📚 Documentação da API

  

Após iniciar o servidor, acesse a documentação Swagger em:

```

http://localhost:3000/api

```

  

## 🏗️ Estrutura do Projeto

  

- `/src` - Código fonte da aplicação

  - `/auth` - Módulo de autenticação

  - `/usuario` - Módulo de usuários

  - `/categoria` - Módulo de categorias

  - `/servico` - Módulo de serviços

  - `/data` - Configurações de banco de dados

  

## 🧪 Testes

  

Execute os testes com os seguintes comandos:

  

```bash

# Testes unitários

npm run test

  

# Testes e2e

npm run test:e2e

  

# Cobertura de testes

npm run test:cov

```

  

## 📄 Licença

  

Este projeto está sob a licença [MIT](LICENSE).

  

## 👥 Autores


- [Akanni Silva](https://github.com/Akanni-codes)  
- [Dandara Nascimento](https://github.com/dan-olivnas)  
- [Gabriel Messias](https://github.com/gabrielmessias-dev)  
- [Gabriella Parra](https://github.com/gabiparra05)  
- [Janielle Oliveira](https://github.com/JanielleOliveira)  
- [Laish Rodrigues](https://github.com/L4ish)  
- [Pedro Emanuel](https://github.com/pe3dru)  
- [Vitor Hugo](https://github.com/DisturbedMoss)  
  

---

  

⭐ Se este projeto foi útil para você, por favor, considere dar uma estrela no GitHub!