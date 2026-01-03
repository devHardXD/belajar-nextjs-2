"use client"
import Link from "next/link";
import { use } from "react";

export default function NewsPage({ params, searchParams }:{
    params: Promise<{ articleId: string }>
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>
}) {
    const { articleId } = use(params);
    const { lang="en" } = use(searchParams);
  return <div>
    <h1>News Article!</h1>
    <p>Reading in language : {lang} </p>
    <div>
        <Link href={`/articles/${articleId}?lang=en`}>English </Link>
        <Link href={`/articles/${articleId}?lang=es`}>French{'\u{1F956}'} </Link>
        <Link href={`/articles/${articleId}?lang=fr`}>Espanyol{'\u{1F920}'} </Link>
    </div>
  </div>
}
