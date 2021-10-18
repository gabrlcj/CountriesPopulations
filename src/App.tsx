import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import Header from './components/Header'

import { useDarkMode } from './hooks/useDarkMode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/Themes'
import { GlobalStyles } from './styles/global'

function App() {
  const { theme, toggleTheme } = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <Routes />
      </ThemeProvider>
    </Router>
  )
}

export default App
