import Caixa from "@/components/caixa";

export default function Page(){
    return(
             
        //<Pagina>
            <div className="h-96 w-[500px]">
                <h1>FlexBox</h1>
                <div className="
                    h-96
                    flex
                    justify-around
                    items-start
                    gap-5
                ">
                    {/* Chama o componente, como o contem propriedades, estou definindo o valor do componente ao chama-lo assim:  */}
                    <Caixa texto="1" className="w-24"/>
                    <Caixa texto="2" className="flex-grow"/>
                    <Caixa texto="3" className="w-20"/>
                </div>
            </div>
        //</Pagina>
    )
}