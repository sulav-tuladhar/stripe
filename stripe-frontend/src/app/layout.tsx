
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavComponent from "@/components/common/nav/nav.component";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from "@/lib/redux-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-[90%] mx-auto`}>
        <ToastContainer />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
