"use client"

import { ReactNode } from "react";
import { ThemeProvider } from "@/providers/theme-providers";

export const LayoutWrapper = ({children}: { children: ReactNode }) => {

  return (
    <ThemeProvider
      attribute="class"
      themes={["dark", "light"]}
      defaultTheme="system"
    >
      {children}
    </ThemeProvider>
  )
}