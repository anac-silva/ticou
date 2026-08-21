import { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Formulario } from "../components/taskform";
import { TaskList } from "../components/tasklist";
import type { Tarefa } from "../types/tarefa";

export function TaskPage(){
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    async function carregarTarefas() {
        const resposta = await fetch("http://localhost:3000/api/tasks");

        const dados = await resposta.json();

        console.log(dados);
        setTarefas(dados);
    }


    return(
        <main className="flex">
            <Sidebar/>
            <div className="m-15 mx flex flex-col bg-purple-300 p-8  rounded-[15px]">
                <h1 className="my-2 text-[36px]">Minhas tarefas</h1>
                <Formulario />
                <TaskList tarefas={tarefas}/>
            </div>
            <button onClick={carregarTarefas}>
                teste
            </button>
            
        </main>
    )
}