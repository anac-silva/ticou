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
        <form
            onSubmit={salvarTarefa}
            className="
            grid
            grid-cols-1
            md:grid-cols-[minmax(0,1fr)_190px_auto]
            gap-3
            items-end
            w-full
            "
        >
            <div>
                <label className="block font-bold mb-1">
                    Atividade
                </label>
                <input
                    type="text"
                    placeholder="Digite a atividade..."
                    value={tarefa.atividade}
                    onChange={(event) =>
                    setTarefa({
                        ...tarefa,
                        atividade: event.target.value,
                    })
                    }
                    className="w-full h-[44px] px-2 rounded-lg border-2 border-gray-300 focus:border-[#ADB3FF] focus:outline-none "
                />
            </div>

            <div>
                <label className="block font-bold mb-1">
                    Prazo
                </label>

                <input
                    type="date"
                    value={tarefa.prazo}
                    onChange={(event) =>
                    setTarefa({
                        ...tarefa,
                        prazo: event.target.value,
                    })
                    }
                    className=" w-full h-[44px] px-2 rounded-lg border-2 border-gray-300 focus:border-[#ADB3FF] focus:outline-none "
                />
            </div>

            <button
                type="submit"
                className=" h-[44px] px-6 rounded-lg bg-[#ADB3FF]"
            >
                Salvar
            </button>
        </form>  
    )
}