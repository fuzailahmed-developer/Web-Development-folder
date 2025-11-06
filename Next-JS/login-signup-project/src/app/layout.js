"use client"
import { Poppins } from "next/font/google";
import "./globals.css";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"]
});

const login = null



export default function RootLayout({ children }) {

  const pathname = usePathname()
  const router = useRouter()


  
  useEffect(() => {
    if (!login && pathname == "/") {
      
      if (JSON.parse(localStorage.getItem("users"))) {
        redirect('/login')
      } else redirect('/signup')
    }
  }, [])


  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-linear-to-r from-slate-900 to-purple-900 h-screen `}
        cz-shortcut-listen="true"
      >
        {
          pathname.includes('/login') ? <Navbar /> : pathname.includes("/signup") ? <Navbar /> : null
        }
        {children}
      </body>
    </html>
  );
}
