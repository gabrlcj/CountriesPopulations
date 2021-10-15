import { useEffect } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useDarkMode } from '../../hooks/useDarkMode'
import { ToggleButton } from './style'

interface ThemeButtonProps {
  toggleTheme: () => void
}

export default function ThemeButton({ toggleTheme }: ThemeButtonProps) {
  const { theme, setMode } = useDarkMode()

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setMode(localTheme)
  })

  return (
    <ToggleButton onClick={() => toggleTheme()}>
      {theme === 'light' ? (
        <span className='icons'>
          <FiMoon /> Dark Mode
        </span>
      ) : (
        <span className='icons'>
          <FiSun /> Light Mode
        </span>
      )}
    </ToggleButton>
  )
}
