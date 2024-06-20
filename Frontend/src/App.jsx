import './App.css'
import Signup from './component/signup/signup.jsx'
import Profile from './component/profile/profile.jsx'
import Signin from './component/signin/signin.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    <BrowserRouter>
<div className='app'>
  <Routes>
    <Route path='/' element={<Signup/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/signin' element={<Signin/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
 
  </Routes>
  <ToastContainer theme="dark"/>
    </div>

    </BrowserRouter>
    
  )
}

export default App
