import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/intro/Intro.jsx'
import InfiniteScroll from './components/infiniteScroll/InfiniteScroll.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="appMain">
      <Portfolio/>
    </div>
  )
}

export default App


//<a href="https://www.flaticon.com/free-icons/web-development" title="web development icons">Web development icons created by surang - Flaticon</a>