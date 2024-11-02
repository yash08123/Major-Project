import { useState } from 'react'
import './App.css'

const react = 'react.svg'
const vite = 'vite.svg'

const rpath = `static/${react}`
const vpath = `static/${vite}`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={vpath} className="logo" alt="Vite12234 logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={rpath} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Django</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
