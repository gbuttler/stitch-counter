import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
    </>
  )
}

export default App
