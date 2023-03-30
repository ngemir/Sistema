import Logo from './Logo'
import Button from './Button'
import './index.css'
import { Dispatch, SetStateAction } from 'react'

interface PropRule{
  setRoute:Dispatch<SetStateAction<String>>
}

function Menu({setRoute}:PropRule) {
  return (
    <div className='menu'>
      <div className='logoArea'>
        <Logo setRoute={setRoute} propTitle='Logo da Empresa'/>
      </div>
      <div className='buttonArea'>
        <Button setRoute={setRoute} texto={'Operadores'}/>
        <Button setRoute={setRoute} texto={'Administrativos'}/>
        <Button setRoute={setRoute} texto={'Pós-vendas'}/>
      </div>
    </div>
  )
}

export default Menu