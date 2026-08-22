import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { database } from "./database.js";

type Tarefa = {
    id: number;
    atividade: string;
    prazo: string;
};

const app = express();
const port = 3000;

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.get("/", (_request, response) => {
    response.json({
        message: "API do ticou funcionou!"
    })
})

app.post("/api/tasks", async (request: Request, response: Response) => {
    const {atividade, prazo} = request.body;

    const resultado = await database.query(
        `INSERT INTO tarefas (atividade, prazo) 
        VALUES ($1, $2) 
        RETURNING id, atividade, prazo`,
        [atividade, prazo]
    );
    
    console.log(resultado.rows[0]);
});

app.get("/api/tasks", async (_request, response) => {
    
    const retorno = await database.query(
        `SELECT id, atividade, prazo
        FROM tarefas
        ORDER BY id;`
    );

    response.json(retorno.rows);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})

