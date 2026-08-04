import { Sidebar } from "../components/sidebar";
import { Formulario } from "../components/taskform";

export function TaskPage(){
    return(
        <main className="flex">
            <Sidebar/>
            <div className="m-30 mx flex flex-col">
                <h1 className="my-2 text-[36px]">Minhas tarefas</h1>
                <Formulario />
            </div>
            
        </main>
    )
}