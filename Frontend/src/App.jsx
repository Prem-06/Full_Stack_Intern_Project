import './App.css'
import Signup from './component/signup/signup.jsx'
import Profile from './component/profile/profile.jsx'
import Signin from './component/signin/signin.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  

  return (
    <BrowserRouter>
<div>
  <Routes>
    <Route path='/' element={<Signup/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/signin' element={<Signin/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
 
  </Routes>
     
    </div>

    </BrowserRouter>
    
  )
}

export default App
