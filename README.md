# Ticou

Aplicação web simples para gerenciamento de tarefas.

O projeto permite cadastrar uma atividade com prazo e salvar os dados em um banco PostgreSQL.

## Tecnologias

### Front-end

* React
* TypeScript
* Vite
* Tailwind CSS
* Lucide React

### Back-end

* Node.js
* Express
* TypeScript
* PostgreSQL

## Estrutura

```text
ticou/
├── back/
│   └── src/
│       ├── server.ts
│       └── database.ts
│
└── front/
    └── src/
        ├── components/
        ├── pages/
        ├── types/
        ├── App.tsx
        └── main.tsx
```

## Funcionalidades

Atualmente o projeto possui:

* cadastro de tarefa;
* definição de prazo;
* envio dos dados do front para o back;
* salvamento das tarefas no PostgreSQL;
* estrutura inicial para listagem de tarefas.

## Executar o projeto

### Front

```bash
cd front
npm install
npm run dev
```

### Back

```bash
cd back
npm install
npm run dev
```

Front:

```text
http://localhost:5173
```

Back:

```text
http://localhost:3000
```

## Próximos passos

* listar tarefas cadastradas;
* marcar tarefa como concluída;
* excluir tarefa;
* adicionar validações;
* melhorar a interface.
