import { Sidebar } from "../components/sidebar";

export function TaskPage(){
    return(
        <main className="flex">
            <Sidebar/>
            <div>
                conteúdo principal
            </div>
        </main>
    )
}