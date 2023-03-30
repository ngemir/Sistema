import './index.css'

// Conteúdos
import Operadores from './Operadores'
import Administrativos from './Administrativos'
import PosVendas from './PosVendas'

interface PropRule{
  route:String
}

function Main({route}:PropRule) {
  let content

  if(route == 'Operadores'){
    content = <Operadores/>
  }
  if(route == 'Administrativos'){
    content = <Administrativos/>
  }
  if(route == 'Pós-vendas'){
    content = <PosVendas/>
  }

  return (
    <div className='main'>
      {content}
    </div>
  )
}

export default Main