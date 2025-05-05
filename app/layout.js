import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] })

export const metadata = {
  title: "Bhatnagar Opticals",
  description: "See Clearly. Look Sharp. Trusted Opticals in Banda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}`}
      >
        <Navbar />
        <main className="container mx-auto px-5 md:px-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
