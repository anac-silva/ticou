import { useState } from "react"

export function Formulario() {
    const [tarefa, setTarefa] = useState({
        atividade: "",
        prazo: ""
    });

    async function salvarTarefa(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        const resposta = await fetch("http://localhost:3000/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tarefa)
        });

        const dados = await resposta.json();

        console.log(dados);
    }

    
    return(
        <>
            <form onSubmit={salvarTarefa}>
                <input 
                type="text" 
                placeholder="Digite a atividade..."
                value={tarefa.atividade}
                onChange={(event) => setTarefa({
                    ...tarefa,
                    atividade: event.target.value
                    })
                }
                className="w-[280px] py-2 px-2 rounded-lg border-2 border-gray-300 focus:border-[#ADB3FF] focus:outline-none mx-1"/>
                <input 
                type="date"
                value={tarefa.prazo}
                onChange={(event) => setTarefa({
                    ...tarefa,
                    prazo: event.target.value
                    })
                }
                className="w-[150px] py-2 px-2 rounded-lg border-2 border-gray-300 focus:border-[#ADB3FF] focus:outline-none"/>
                <button type="submit" className="py-2 px-2 rounded-lg border-2 bg-[#ADB3FF] border-transparent mx-2">Salvar</button>
            </form>
        </>
    )
}