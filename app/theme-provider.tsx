"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ConfigProvider, theme } from "antd";
import Navbar from "./components/Navbar";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
        }}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </ConfigProvider>
    </NextThemesProvider>
  );
}
