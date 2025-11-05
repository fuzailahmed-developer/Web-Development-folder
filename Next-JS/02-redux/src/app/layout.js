"use client"
import { Poppins } from "next/font/google"
import "./globals.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"]
})

import { Provider } from "react-redux";
import { store } from "@/redux/store/store";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
        cz-shortcut-listen="true"
      >
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
