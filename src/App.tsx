import Header from './components/Header'
import Home from './pages/Home'

import { useDarkMode } from './hooks/useDarkMode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/Themes'
import { GlobalStyles } from './styles/global'

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
