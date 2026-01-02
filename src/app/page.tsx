import Link from "next/link"

export default function Home(){
  return (
    <>
    <h1>Welcome Home... Master!</h1>
    <Link href="/blog">Blog</Link>
    <Link href="/products">Product</Link>
    </>
  )
}