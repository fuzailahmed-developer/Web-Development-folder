"use client"

import { usePathname } from "next/navigation";
import Footer from "./footer/Footer";
import "./globals.css";
import Navbar from "./navbar/Navbar";
import { myRoutes } from "./utils/routes";


function RootLayout({ children }) {

  const pathname = usePathname()
  console.log(pathname)


  return (
    <html lang="en">
      <body>
        {
          myRoutes.includes(pathname) && <Navbar />
        }
        {children}
        {
          myRoutes.includes(pathname) && <Footer />
        }
      </body>
    </html>
  );
}

export default RootLayout