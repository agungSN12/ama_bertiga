import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavbarPage from "@/ui/Navbar";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ama Bertiga",
  description: "Ama Bertiga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-gray-100 antialiased`}>
        <Providers>
          <NavbarPage />
          {children}
        </Providers>
      </body>
    </html>
  );
}
