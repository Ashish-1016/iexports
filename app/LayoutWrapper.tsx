"use client"

import { ReactNode } from "react";
import { ThemeProvider } from "@/providers/theme-providers";
import { MidPointStore } from "@/store/store";

export const LayoutWrapper = ({children}: { children: ReactNode }) => {

  const currentTheme = MidPointStore(store => store.userTheme);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={currentTheme}
      enableSystem
    >
      {children}
    </ThemeProvider>
  )
}