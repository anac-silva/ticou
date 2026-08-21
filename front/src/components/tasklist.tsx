import { TaskItem } from "../components/taskItem";
import type { Tarefa } from "../types/tarefa";

type TaskListProps = {
    tarefas: Tarefa[];
};

export function TaskList({ tarefas }: TaskListProps) {
    return (
        <div className="my-2">
            <p>Quantidade: {tarefas.length}</p>
        </div>
    )
    


}