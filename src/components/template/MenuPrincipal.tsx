import Link from "next/link";
import MenuItem from "./MenuItem";
import { IconApps, IconHexagonNumber1, IconLayout2, IconList, IconListCheck } from "@tabler/icons-react";

//function menuItem(texto: string, link: string){
  //  return(

    //    <Link href={link} className="hover:bg-blue-500 rounded-md px-4 py-2">
      //      {texto}
        //</Link>
    //)
//}


export default function MenuPrincipal(){
    return (

        <aside className="w-80 bg-zinc-900">

            <nav className="flex flex-col p-5">

                <MenuItem link="/primeiro">
                    <IconHexagonNumber1/>
                    <span>Primeiro Componente</span> 
                </MenuItem>
                <MenuItem link="/flexbox">
                    <IconLayout2/>
                    <span>FlexBox</span>
                </MenuItem>
                <MenuItem link="/pagina">
                    <IconApps/>
                    <span>Componente Pagina</span>
                </MenuItem>
                <MenuItem link="/estado">
                    <IconListCheck/>
                    <span>Componente com Estado</span>
                </MenuItem>

            {/* 
                {menuItem('Primeiro Componente', '/primeiro')}
                {menuItem('FlexBox', '/flexbox')}
                {menuItem('Componente Pagina', '/pagina')}
            */}
            </nav>


        </aside>


    )
}