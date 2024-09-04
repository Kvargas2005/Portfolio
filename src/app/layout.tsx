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
  title: "Portfolio Kendall Vargas",
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
        <footer className='bg-[#161618] py-10 flex justify-center items-center text-[#8E94BC]'>
          <div className="flex flex-col items-center">
            <p>Kendall Vargas Ramírez Portfolio 2024</p>
            <p className="pt-6">Next.js Site</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
