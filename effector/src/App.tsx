import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactECharts from 'echarts-for-react';

// render echarts option.
function App() {
  const [count, setCount] = useState(0);
  const [newCunt, setNewCount] = useState(0)
  return (
    <>
      <ReactECharts option={{}} />
    </>
  )
}

export default App
