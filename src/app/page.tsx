import Link from "next/link"

export default function Home(){
  return (
    <>
    <h1>Welcome Home... Master!</h1>
    <Link href="/blog">Blog  </Link>
    <Link href="/products">Product  </Link>
    <Link href="/articles/breaking-news-123?lang=en">Read news in English  </Link>
    <Link href="/articles/breaking-news-123?lang=en">Read news in French{'\u{1F956}'} </Link>
    </>
  )
}