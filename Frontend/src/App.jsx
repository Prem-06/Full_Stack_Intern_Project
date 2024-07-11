import './App.css'
import Signup from './component/signup/signup.jsx'
import Profile from './component/profile/profile.jsx'
import Signin from './component/signin/signin.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RotatingLines } from 'react-loader-spinner'
import { useState,useContext } from 'react'
import Context from './context.jsx'
function App() {
  
  const [loader,setloader]=useState(false)
  const Connecting_url ="https://full-stack-intern-project.onrender.com"
  // const Connecting_url ="http://localhost:3000"
  return (
    <BrowserRouter>
    
   <Context.Provider value={{setloader,loader,Connecting_url}}> 
   {
    
      loader?(<div className='loader_div'><RotatingLines
        visible={true}
        height="96"
        width="96"
        color="black"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
        /></div>):(<div className='app'>
          <Routes>
            <Route path='/' element={<Signup/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/signin' element={<Signin/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
         
          </Routes>
          <ToastContainer theme="dark"/>
            </div>)
    }
     </Context.Provider>
  
    
    </BrowserRouter>
    
  )
}

export default App
