import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextField } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TextField variant="outlined" label="Enter"/>
    </div>
  )
}

export default App
