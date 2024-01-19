import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createEffect, createEvent, fork, sample } from 'effector'
import { Provider } from 'effector-react'
import { createQuery } from '@farfetched/core'
import { useUnit } from 'effector-react'
const startFetch = createEvent()
export const query = createQuery({
  name: "my_sid",
  effect: createEffect(async () => {
    const result = await fetch("http://localhost:3000/user/10")
    const user = await result.json()
    return user
  }),
})

// cache(query, {staleAfter: 100000, adapter: sessionStorageCache({ maxEntries: 100, maxAge: 10000})})
sample({
  clock: startFetch,
  target: query.start
  // target: fx
})
sample({
  clock: query.finished.success,
  fn: () => console.log(query)
})

const scope = fork()
function App() {
  const [count, setCount] = useState(0)
  const onFetch = useUnit(startFetch)
  return (
    <>
    <Provider value={scope}>
      <div>
        <button onClick={onFetch}>Start queryy</button>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Provider>
    </>
  )
}

export default App
