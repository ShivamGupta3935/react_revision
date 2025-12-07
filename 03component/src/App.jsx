import './App.css'
import Card from './components/Card'

function App({image, username}) {
  

  return (
   <>
     <h2 className='text-3xl '> Cards </h2>
     <Card  username="Shviam" /> <br/>
     <Card username="Suraj" />
   </>
  )
}

export default App
