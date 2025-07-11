import './App.css'
import './index.css'
import {Home} from './pages/Home'
import {CreatePage} from './pages/CreatePage'
import {NoteDetail} from './pages/NoteDetail'
import {Route, Routes} from "react-router"
import toast  from 'react-hot-toast'


const App = () => {
  return (
    <>
    <button onClick={()=>toast.error("error")} className='text-red-500' >click again</button>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<CreatePage/>}/>
          <Route path='/note/:id' element={<NoteDetail/>} />
      </Routes>
    </>
  )
}


export default App
