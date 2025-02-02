import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Marilyn testing</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

  return (
    <>
      <h1>Marilyn Ma</h1>
      <p>Sophomore CMC.</p>
      <p>Creative technologist exploring AI, game development, and digital storytelling.</p>

      <div className="links">
        <a href="https://www.linkedin.com/in/marilyn-ma" target="_blank">LinkedIn</a>
        <a> || </a>
        <a href="https://github.com/marilynn-mm" target="_blank">GitHub</a>
        <a> || </a>
        <a href="https://marilynm5128.wixsite.com/marilynma" target="_blank">Arts Website</a>
        <a> || </a>
        <a href="https://instagram.com/marilynn_mm" target="_blank">Instagram</a>
      </div>
    </>
  );
}

export default App
