import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar/Navbar';  
import { poppins } from "../../public/fonts";
import Experience from './components/Experience/Experience';  // Importa la página Experience
import About from './components/About/About';  
import Projects from './components/Projects/Projects';  
import Technologies from './components/Technologies/Technologies';  

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Kendall Vargas Portfolio",
};

export default function RootLayout(
  { children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Experience />
        <Projects />
        <About />
        <Technologies />
        <footer className='bg-[#1C1C20] py-10 flex justify-center items-center'>
          footer
        </footer>
      </body>
    </html>
  );
}
