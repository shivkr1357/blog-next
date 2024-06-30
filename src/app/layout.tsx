import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "prismjs/themes/prism.css";
import "prismjs/themes/prism-okaidia.css";
import Topbar from "@/components/Topbar/Topbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import AppMainProvider from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Blog | ItsIndianGuy",
   description:
      "Read the best blogs of Javascript get the best experience | We provide data based on our own experience | Start your Web Dev journey by knowing the topmost cheat sheets",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <AppMainProvider>
               <Topbar />
               <Sidebar />
               {children}
            </AppMainProvider>
         </body>
      </html>
   );
}
