"use client"
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  {name: "Register", href: "/register"},
  {name: "Login", href: "/login"},
  {name: "Forget Password?", href: "/forget-password"},
]

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState("")
  const pathname = usePathname();
  return (
    <div>
      <div>
        <input value={input} onChange={e => setInput(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
        return(
          <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.name}>
            {link.name} 
          </Link>
        );
      })}
      {children}
    </div>
  );
}
