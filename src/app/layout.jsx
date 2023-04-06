import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 relative min-h-screen">
        <Navbar />
        <div className="p-12 md:p-24">
          {children} 
        </div>
        <Footer />
      </body>
    </html>
  );
}
