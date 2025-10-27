"use client"

import { usePathname } from "next/navigation";
import Footer from "./footer/Footer";
import "./globals.css";
import Navbar from "./navbar/Navbar";
import { myRoutes } from "./utils/routes";


function RootLayout({ children }) {

  const pathname = usePathname()


  return (
    <html lang="en">
      <body>
        {
          myRoutes.includes(pathname)
            ?
            <Navbar />
            :
            pathname.startsWith('/profile')
              ?
              <Navbar />
              :
              null
        }
        {children}
        {
          myRoutes.includes(pathname)
            ?
            <Footer />
            :
            pathname.startsWith('/profile')
              ?
              <Footer />
              :
              null
        }
      </body>
    </html>
  );
}

export default RootLayout