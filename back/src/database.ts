import { DatabaseSync } from "node:sqlite";

const database = new DatabaseSync("tarefas.db");

database.exec(`
    CREATE TABLE IF NOT EXISTS tarefas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        atividade TEXT NOT NULL,
        prazo TEXT NOT NULL
    )
`);

export { database };