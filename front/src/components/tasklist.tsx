import { TaskItem } from "../components/taskItem";
import type { Tarefa } from "../types/tarefa";

type TaskListProps = {
    tarefas: Tarefa[];
};

export function TaskList({ tarefas }: TaskListProps) {
    return (
        <div className="my-2">
            <p className="px-5 py-3 text-sm text-gray-500">Quantidade: {tarefas.length}</p>
            <div className="grid grid-cols-[32px_minmax(0,1fr)_240px] px-5 py-3 border-b border-gray-200">
                <div></div>
                <p>Tarefa</p>
                <p>Prazo</p>
            </div>
            {tarefas.map((tarefa) =>
                <TaskItem 
                    key={tarefa.id}
                    tarefa={tarefa} />
                )}
        </div>
    )
}