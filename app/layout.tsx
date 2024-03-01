import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { LayoutWrapper } from "@/app/LayoutWrapper";

const poppins = Poppins( { weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MidPoint",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={poppins.className}>
      <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
