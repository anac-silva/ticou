import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { database } from "./database.js";

type Tarefa = {
    id: number;
    atividade: string;
    prazo: string;
};

const tarefas: Tarefa[] = [];

const app = express();
const port = 3000;

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.use(express.json());

app.get("/", (_request, response) => {
    response.json({
        message: "API do ticou funcionou!"
    })
})

app.post("/api/tasks", (request: Request, response: Response) => {
    const {atividade, prazo} = request.body;

    const novaTarefa: Tarefa = {
        id: tarefas.length + 1,
        atividade: atividade,
        prazo: prazo,
    }

    tarefas.push(novaTarefa);

    console.log(atividade);
    console.log(prazo);

    console.log(tarefas);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})

