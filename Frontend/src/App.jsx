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
    <div className='relative h-full w-full'>
      <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 
      [background:radial-gradient (125%_125%_at_50%_10%,#00FF9D40_100%)]' />
    {/* <button onClick={()=>toast.error("error")} className='text-red-500' >click again</button> */}
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<CreatePage/>}/>
          <Route path='/note/:id' element={<NoteDetail/>} />
      </Routes>
      </div>
    </>
  )
}


export default App
