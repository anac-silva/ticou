import { useState } from "react"

export function Formulario() {
    const [atividade, setAtividade] = useState("");
    return(
        <>
            <form action="#">
                <input 
                type="text" 
                placeholder="Digite a atividade..."
                value={atividade}
                onChange={(event) => setAtividade(event.target.value)} 
                className="w-md py-2 px-2 rounded-lg border-2 border-gray-300 focus:border-[#ADB3FF] focus:outline-none"/>
                <button type="submit" className="py-2 px-2 rounded-lg border-2 bg-[#ADB3FF] border-transparent mx-2">Salvar</button>
            </form>
        </>
    )
}