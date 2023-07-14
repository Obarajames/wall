import { useState } from 'react'
import Body from './components/body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Body/>
    </>
  )
}

export default App
