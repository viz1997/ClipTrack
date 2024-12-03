"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from '@/contexts/LanguageContext'

const languages = [
  { code: 'zh', name: '中文' },
  { code: 'en', name: 'English' },
]

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { setLanguage } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="absolute top-4 right-4 flex items-center space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Globe className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((lang) => (
            <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)}>
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </nav>
  )
}

