import { useState, useEffect } from "react";
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

    useEffect(() => {
        carregarTarefas();
    }, []);


    return(
        <main className="flex w-full min-h-screen bg-gradient-to-b from-[#FAFAFE] via-[#FAFAFE] to-[#E0E2FD]">
            <Sidebar/>
            <div className=" mx flex-1 flex flex-col p-8 ">
                <h1 className="my-2 text-[36px]">Minhas tarefas</h1>
                <p>Registre suas atividades e acompanhe o que precisa ser feito.</p>
                <div className="my-3 mx flex flex-col bg-F7F8FF p-8  rounded-[15px]  shadow-lg">
                    <h3 className="text-[18px] font-bold">Registrar uma nova tarefa </h3>
                    <p className="py-2 ">Adicione uma atividade e defina o prazo para organização.</p>
                    <Formulario />
                </div>
                <div className="my-3 mx flex flex-col bg-white rounded-[15px] shadow-lg overflow-hidden">
                    <TaskList tarefas={tarefas}/>
                </div>
                
            </div>
        </main>
    )
}