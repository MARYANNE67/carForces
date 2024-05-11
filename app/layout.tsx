import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { relative } from "path";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Car Force",
  description: "Explore great rental cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
      {/* NavBar */}
        <NavBar/>
        {children}
        
        <Footer/>

        {/* Footer */}
        </body>
    </html>
  );
}
