import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
     <div className='fixed flex flex-wrap bottom-12 inset-x-0 px-2'>
      <div className='text'></div>
      
     </div>
    </div>
  )
}

export default App
