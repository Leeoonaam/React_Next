import { IconHeart, IconHeartFilled } from "@tabler/icons-react"

export default function Rodape(){
    return(

        <footer>
            <div className="flex justify-end items-center gap-2 
            bg-zinc-700 p-4 text-zinc-400 tex-sm"
            >
                <span>Desenvolvido com</span>
                <IconHeartFilled size={18} className="text-red-800" />
                <strong> por LC - {new Date().getFullYear()}</strong>
            </div>
        </footer>

    )
}