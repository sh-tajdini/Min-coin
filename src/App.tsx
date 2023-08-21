import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [answer, setAnswer] = useState("")
  const deno=[1, 2, 5, 10, 20,
    50, 100, 500, 1000];
const n = deno.length;
const findMin =(V:number)=>
{
    // Initialize result
        const ans = [];
 
        // Traverse through all denomination
        for (let i = n - 1; i >= 0; i--)
        {
            // Find denominations
            while (V >= deno[i])
            {
                V -= deno[i];
                ans.push(deno[i]);
            }
        }
 

        setAnswer(ans.join("-"));
}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => findMin(93)}>
          answer is {answer}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
