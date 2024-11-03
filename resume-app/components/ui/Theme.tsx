"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="flex items-center gap-2">
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 cursor-pointer text-white" onClick={() => setTheme('light')}/>
      ) : (
        <Moon className="h-5 w-5 cursor-pointer" onClick={() => setTheme('dark')}/>
      )}
    </div>
  )
};