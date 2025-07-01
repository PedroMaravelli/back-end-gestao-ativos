
# 🛠️ Gestão de Ativos – Backend

API RESTful para o sistema **Gestão de Ativos**, responsável por gerenciar hardware, software e ativos de rede em uma empresa.

## 📚 Tecnologias

- **Node.js** – ambiente de execução JavaScript
- **Express** – framework web para construção de APIs
- **Sequelize** – comunicação com o banco de dados
- **Banco de dados** – MySQL Workbench

## 📦 Funcionalidades

- CRUD para ativos de hardware, software e redes
- Validação de dados de requisição
- Rotas organizadas por recursos

## 🧱 Estrutura de Pastas

```


├── Controllers/ # Lógica de controle das rotas
├── Routes/ # Rotas da aplicação (Express Router)
├── config/ # Configuração do banco de dados e dotenv
├── models/ # Modelos Sequelize
├── app.js # Arquivo principal com configuração do servidor Express
├── package.json # Dependências e scripts do projeto
└── .gitignore # Arquivos ignorados no Git

````

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js **16+**
- Banco de dados MySql Workbench

### Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/PedroMaravelli/back-end-gestao-ativos.git
   cd back-end-gestao-ativos


2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn
   ```
3. Execute a aplicação:

   ```bash
   npm run dev       # usa nodemon
   # ou
   npm start
   ```

4. A API estará disponível em:

   ```
   http://localhost:3000
   ```

## 🚧 Endpoints 

## Redes

| Método | URL           | Descrição                       |
| :----: | ------------- | ------------------------------- |
|   GET  | `/redes`      | Lista todos os ativos de redes  |
|  POST  | `/redes`      | Cria um novo ativo de redes     |
| DELETE | `/redes/:id`  | Remove um ativo de redes        |


## Software
| Método | URL              | Descrição                          |
| :----: | ---------------  | ---------------------------------- |
|   GET  | `/software`      | Lista todos os ativos de software  |
|  POST  | `/software`      | Cria um novo ativo de software     |
| DELETE | `/software/:id`  | Remove um ativo de software        |


## Hardware
| Método | URL              | Descrição                          |
| :----: | ---------------  | ---------------------------------- |
|   GET  | `/hardware`      | Lista todos os ativos de hardware  |
|  POST  | `/hardware`      | Cria um novo ativo de hardware     |
| DELETE | `/hardware/:id`  | Remove um ativo de hardware        |




## 📝 Scripts

Confira o `package.json` para os principais scripts:


## ✅ Observações

* Projeto em desenvolvimento
* Use `npm run dev` para modo de desenvolvimento com reinício automático



Desenvolvido 🤑👱🏿‍♂️ por [Pedro Maravelli](https://github.com/PedroMaravelli)





