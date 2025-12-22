import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Poppins({
  subsets: ["latin"],
  weight : ["400","700"]
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className}`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
