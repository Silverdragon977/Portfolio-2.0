import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.tsx';



function App() {
  const [count, setCount] = useState(0)

 return (
    <>
    <h1>Hello</h1>
    {<Navbar />}
    {<img src="/banner.png" className="img-fluid border-lg border-primary rounded shadow-lg" alt="Image Did not load properly"></img>}
    {
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    }
    </>
  )
}

export default App
