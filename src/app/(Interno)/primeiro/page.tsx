import Pagina from "@/components/template/Pagina";
import { match } from "assert";

const raio = 4.5
const PI = 3.14159

// pode ser criado variaveis que recebam elementos JSX, ou seja, html dentro de uma função javascript 
// sendo possivel utilizar ao contrario também atraves de {}
const titulo = (<div>
    <h1>Primeiro Componente</h1>
    <h2>Assuntos importantes sobre componentes</h2>
</div>
)

function anoAtual(){
    return new Date().getFullYear()
}
function geraUmaLista(){
    return (
        <ul className="pl-12 list-disc">
            <li>Teste</li>
            <li>Teste1</li>
            <li>Teste2</li>
        </ul>
    )
}

// Exporta a função como o padrão deste módulo
export default function Primeiro(){
    // A função retorna um elemento JSX
    return(
        //<Pagina>
            <div>
                {titulo}
                <h1>Primeiro</h1>
                {/* Div com classe que organiza os itens na mesma coluna */}
                <div className="flex flex-col">
                    {/* Cria um elemento <span> que exibe o resultado de 1+1 */}
                    {/* Para exibir o calculo é necessário {} se não vai exibir texto */}
                    <span>{1+1}</span>
                    <span>{Math.random()}</span>
                    {/* Dessa forma pode chama a função criada antes dos retornos exportados */}
                    <span>{anoAtual()}</span>
                </div>

                {geraUmaLista()}
                <div>
                    {/* Utilizando variaveis criadas e realizando calculo dentro de {} para realizar o calculo */}
                    <span>{PI * Math.pow(raio, 2)}</span>
                </div>
            </div>
        //</Pagina>
    )
}