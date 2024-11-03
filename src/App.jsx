import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <>
<<<<<<< HEAD
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
=======
    <Navbar/>
    <Hero/>
     
>>>>>>> d3104a245f6c98d6e3487e41058dd901b0b66aaa
    </>
  )
}

export default App
