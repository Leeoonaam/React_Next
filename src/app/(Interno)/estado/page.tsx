// Declara que este componente é um componente de cliente
'use client';

import { IconSend, IconTrash } from "@tabler/icons-react"; // Importa ícones da biblioteca tabler/icons-react
import { useState } from "react"; // Importa o hook useState do React

// Define o componente Page como o padrão exportado
export default function Page() {

    // Declara um estado chamado 'nome' e uma função para atualizá-lo, iniciando como uma string vazia
    const [nome, SetNome] = useState<string>('');
    // Declara um estado chamado 'tarefas' e uma função para atualizá-lo, iniciando como um array de strings vazio
    const [tarefas, SetTarefas] = useState<string[]>([]);

    // Função para adicionar uma tarefa à lista de tarefas
    function adicionarTarefa() {
        // Se 'nome' não estiver vazio
        if (nome) {
            // Adiciona a nova tarefa à lista de tarefas e reseta 'nome' para uma string vazia
            SetTarefas([...tarefas, nome]);
            SetNome('');
        }
    }

    // Função para remover uma tarefa da lista de tarefas pelo índice
    function removeTarefa(i: number) {
        // Atualiza a lista de tarefas filtrando fora a tarefa no índice especificado
        SetTarefas(tarefas.filter((_, index) => index !== i));
    }

    // JSX retornado pelo componente
    return (
        <div className="flex flex-col gap-10">
            {/* Seção para adicionar uma nova tarefa */}
            <div className="flex flex-col">
                <label htmlFor="tarefa">Tarefa: </label>
                <div className="flex items-center gap-2">
                    {/* Input para inserir o nome da tarefa */}
                    <input
                        id="tarefa"
                        value={nome}
                        onKeyUp={(e) => {
                            // Adiciona a tarefa ao pressionar a tecla 'Enter'
                            if (e.key === 'Enter') {
                                adicionarTarefa();
                            }
                        }}
                        onChange={(e) => SetNome(e.target.value)} // Atualiza 'nome' com o valor do input
                        type="text"
                        className="flex-grow bg-zinc-800 px-4 py-2 rounded-md outline-none text-xl"
                    />
                    {/* Botão para adicionar a tarefa */}
                    <button onClick={adicionarTarefa} className="bg-blue-500 p-2 rounded-md">
                        <IconSend /> {/* Ícone de envio */}
                    </button>
                </div>
            </div>
            {/* Seção para listar as tarefas */}
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-black text-zinc-500">Lista de Tarefas</h2>
                <ul className="flex flex-col gap-2">
                    {/* Mapeia a lista de tarefas para elementos <li> */}
                    {tarefas.map((tarefa, i) => {
                        return (
                            <li key={i} className="flex items-center bg-zinc-800 px-4 py-2 rounded-md">
                                <span className="flex-grow">{tarefa}</span> {/* Texto da tarefa */}
                                {/* Ícone de lixeira para remover a tarefa */}
                                <IconTrash onClick={() => removeTarefa(i)} size={18} className="text-red-700 cursor-pointer" />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
