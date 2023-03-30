import { useState } from 'react'

import './App.css'

//Component import
import Menu from './components/Menu'
import Main from './components/Main'


function App() {
  function verifica(){
    console.log(route)
  }
  
  const [route, setRoute] = useState<String>('')

  return (
    <div className='App'>
      <Menu setRoute={setRoute}/>
      <Main route={route}/>
    </div>
  )
}

export default App
