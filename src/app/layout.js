'use client';
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Netflix",
  description: "Netflix is the best streaming service in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} body`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
