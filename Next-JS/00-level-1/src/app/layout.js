import Footer from "./footer/Footer";
import "./globals.css";
import Navbar from "./navbar/Navbar";


function RootLayout({ children }) {
  console.log(children)
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout