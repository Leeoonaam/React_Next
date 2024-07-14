import Link from "next/link";

export default function Page(){
    return (
        <div>
            <h1>Temporario</h1>
            <nav>
                <Link href="/temp/teste">Pagina com Id</Link>
            </nav>

        </div>
        
    )
}