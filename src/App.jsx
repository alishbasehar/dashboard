
import './App.css'
import Maindash from './components/Maindash'
import Sidebar from './components/Sidebar'
import Cards from './components/cards'

function App() {
  
  return (
    <>
<div className='h-[100vh] flex'

>
<Sidebar/>
<Maindash/>
<Cards/>

</div>
    </>
  )
}

export default App
