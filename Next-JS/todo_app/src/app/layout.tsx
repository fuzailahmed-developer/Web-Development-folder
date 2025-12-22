import { inter } from "@/lib/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
