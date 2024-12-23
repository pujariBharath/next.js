'use client'

import { useState, useEffect } from 'react'
import '../styles/globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    setIsDarkMode(savedMode === 'true')
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
    localStorage.setItem('darkMode', isDarkMode.toString())
  }, [isDarkMode])

  const toggleMode = () => {
    setIsDarkMode(prev => !prev)
  }

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <button className="toggle-button" onClick={toggleMode}>
        <span className="toggle-icon">{isDarkMode ? '🌙' : '☀️'}</span>
      </button>
      {children}
    </div>
  )
}

