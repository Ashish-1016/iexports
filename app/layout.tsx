import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { LayoutWrapper } from "@/app/LayoutWrapper";
import { cn } from "@/lib/utils";

const poppins = Poppins( { weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loading...",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={cn(poppins.className, "full-size-height")}>
      <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
