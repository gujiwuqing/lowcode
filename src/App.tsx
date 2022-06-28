import { useState } from 'react'
import Material from './Material';
import Container from './Container';
import Options from './Options';
import 'antd/dist/antd.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Material/>
      <Container/>
      <Options/>
    </div>
  )
}

export default App
