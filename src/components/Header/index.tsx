import ThemeButton from '../ThemeButton'
import { HeaderContainer } from './style'

interface HeaderProps {
  toggleTheme: () => void
}

export default function Header({ toggleTheme }: HeaderProps) {
  return (
    <HeaderContainer>
      <div>
        <h1>Where in the world?</h1>
        <strong>Application using a REST api of countries.</strong>
      </div>
      <ThemeButton toggleTheme={toggleTheme} />
    </HeaderContainer>
  )
}
