import './index.css'
import { Dispatch, SetStateAction } from 'react'

interface PropRule{
  setRoute:Dispatch<SetStateAction<String>>,
  propTitle:string
}

function Logo({setRoute, propTitle}:PropRule){
  return(
    <div className='logo'>
      <button type='button' title={propTitle} onClick={()=>setRoute('')}>
        {/* Change the image that is inside public folder */}
        <img src="./img/you-logo-here.png" alt="Logo" />
      </button>
    </div>
  )
}

export default Logo