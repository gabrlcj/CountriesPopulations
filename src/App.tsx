import Home from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from './hooks/useDarkMode'
import { darkTheme, lightTheme } from './styles/Themes'
import { GlobalStyles } from './styles/global'
import Header from './components/Header'

function App() {
  const { theme, toggleTheme } = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Home />
    </ThemeProvider>
  )
}

export default App
