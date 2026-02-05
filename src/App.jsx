import './App.css'
import { useThemeStore } from './useThemeStore'

function App() {

  const { isDarkMode, toggleTheme } = useThemeStore()

  return (
    <> 
    <header style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#333' }}>
      <h1>Dark Mode Toggle</h1>
    </header>
    <footer style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#333' }}>
      Settings
      <button onClick={toggleTheme} style={{ backgroundColor: isDarkMode ? '#fff' : '#333', color: isDarkMode ? '#333' : '#fff' }}>
        {isDarkMode ? 'Light' : 'Dark'}
      </button>
    </footer>
    </>
  )
}

export default App
