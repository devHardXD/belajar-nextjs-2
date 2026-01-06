"use client"

export default function ErrorBoundary({ error } : {
    error:Error
}){
    return <div>{error.message} in ReviewId</div>
}