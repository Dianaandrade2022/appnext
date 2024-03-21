import Link from "next/link"
export default function ProductPage(props){
    console.log(props)
    return (
        <div>
            <h1>ProductPage</h1>
            <Link href="/products">Ir a products</Link>
        </div>
    )
}