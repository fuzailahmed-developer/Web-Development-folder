import "./globals.css";

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${poppins.className}`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
