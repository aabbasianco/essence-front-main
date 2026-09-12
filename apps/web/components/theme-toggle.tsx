"use client"
import { useTheme } from "next-themes";
import { Button } from "@/components/primitive/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </Button>
  )
}