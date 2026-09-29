import { useState, useEffect } from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('speedy-theme') || 'dark')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('speedy-theme', theme)
  }, [theme])
  return [theme, () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))]
}
