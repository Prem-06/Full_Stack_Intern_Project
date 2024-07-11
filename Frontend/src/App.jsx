import './App.css'
import Signup from './component/signup/signup.jsx'
import Profile from './component/profile/profile.jsx'
import Signin from './component/signin/signin.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner'
import { useState,useContext } from 'react'
import Context from './context.jsx'
function App() {
  
  const [loader,setloader]=useState(false)
  const Connecting_url ="https://full-stack-intern-project.onrender.com"
  return (
    <BrowserRouter>
   <Context.Provider value={{setloader,loader,Connecting_url}}> 
   {
      loader?(<ThreeDots
        style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }}
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
    />):(<div className='app'>
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
