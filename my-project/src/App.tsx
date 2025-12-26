import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="flex gap-8 items-center mb-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-24 p-6 hover:drop-shadow-xl" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24 p-6 hover:drop-shadow-xl" alt="React logo" />
        </a>
      </div>

      <h1 className="text-5xl font-extrabold mb-6">Vite + React</h1>

      <div className="bg-gray-800 rounded-lg p-8 text-center">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="rounded-md border border-transparent px-4 py-2 text-lg font-medium bg-gray-700 hover:border-indigo-400"
        >
          count is {count}
        </button>
        <p className="mt-4 text-sm text-gray-300">
          Edit <code className="bg-gray-900 px-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-sm text-gray-400 mt-6">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
