"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({ error,reset } : {
    error:Error,
    reset: () => void;
}){
    const router = useRouter();
    const reload = () => {
        router.refresh();
        reset();
    }
    return <div>
        <p>{error.message} in ReviewId</p>
        <button onClick={() => reload()}>Try Again</button>
    </div>
}