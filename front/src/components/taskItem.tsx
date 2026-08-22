import type { Tarefa } from "../types/tarefa";

type TaskItemProps = {
    tarefa: Tarefa;
};

export function TaskItem({ tarefa }: TaskItemProps) {
    return(
        <div >
            <label htmlFor="" className="grid grid-cols-[32px_minmax(0,1fr)_240px] items-center px-5 py-3 border-b border-gray-200">
                <input type="checkbox" />
                <p className="flex font-medium" >{tarefa.atividade}</p>
                <p className="text-gray-700">{tarefa.prazo}</p>
            </label>
        </div>
    )
}