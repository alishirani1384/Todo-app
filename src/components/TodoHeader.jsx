import { useContext } from 'react';
import sun from '../assets/images/icon-sun.svg';
import moon from '../assets/images/icon-moon.svg';
import { ThemeContext } from '../App';


function TodoHeader() {
    const { theme, setTheme } = useContext(ThemeContext);
    function handleClick() {
        if (theme == "dark") {
            setTheme(()=>"light")
        } else {
            setTheme(()=>"dark")
        }
    }
  return (
      <header>
          <div className='container'>
              <h1 className="title">TODO</h1>
              <img src={theme=="dark"?sun:moon} alt="icon" onClick={handleClick}/>
          </div>
    </header>
  )
}

export default TodoHeader