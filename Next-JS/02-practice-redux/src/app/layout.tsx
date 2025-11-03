import React from "react";
import "./globals.css";
import {Poppins} from "next/font/google"
const poppins = Poppins({
  subsets : ['latin'],
  weight : ["400","700"]
})

import store from "@/redux/store/store"
import { Provider } from "react-redux";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Provider store={store}>
            {children}
        </Provider>
      </body>
    </html>
  );
}
