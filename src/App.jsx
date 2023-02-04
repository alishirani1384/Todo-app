import { createContext, useEffect, useState } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import Todos from './components/Todos';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    localStorage.setItem("theme",theme)
  },[theme])
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className="App" data-theme={theme}>
        <TodoHeader />
    </div>
    </ThemeContext.Provider>
  )
}

export default App
