import './index.css'
import { Dispatch, SetStateAction } from 'react'

interface PropRule{
  texto: string,
  setRoute:Dispatch<SetStateAction<String>>
}

function Button({setRoute, texto}:PropRule){
  function buttonSelect(e:string){
    setRoute(e)
  }

  return(
      <button type='button' className='button' onClick={()=>{
        buttonSelect(texto)
      }}>{texto}</button>
  )
}

export default Button