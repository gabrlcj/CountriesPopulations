import { FiMoon, FiSun } from 'react-icons/fi'
import { ToggleButton } from './style'

interface ThemeButtonProps {
  toggleTheme: () => void
}

export default function ThemeButton({ toggleTheme }: ThemeButtonProps) {
  return (
    <ToggleButton onClick={() => toggleTheme()}>
      <span className='icons'>
        <FiMoon />
        <FiSun />
      </span>
      Toggle Button
    </ToggleButton>
  )
}
