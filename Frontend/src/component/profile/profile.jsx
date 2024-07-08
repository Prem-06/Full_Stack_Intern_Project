import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './profile.css';
import ContactInformation from './contact';
import Education from './education';
import logo from '../../../public/picture/profile.jpg'
import Connecting_url from '../../../connection.js'
const Profile = () => {
  
  const profileData=JSON.parse(localStorage.getItem('detail'))
  const [about,setabout]=useState(profileData.about);
  const [about_val,setabout_val]=useState("")
  const navigate=useNavigate();

function addabout(about){
  
  if(about==""){
    return;
  }
   fetch(`${Connecting_url}/about`,{
    method:"post",
    headers:{
      "Content-Type":"Application/json"
    },
    body:JSON.stringify({
      about:about,
      id:profileData._id
    })
   }).then((res)=>{
    return res.json();
   })
   .then((val)=>{
   
    localStorage.removeItem('detail');
localStorage.setItem('detail', JSON.stringify(val.detail));
    setabout(val.detail.about)
    setabout_val("")
  
   }).catch((err)=>{
    console.log(err)
   })
}
 function editabout(){
  setabout_val(about)
   setabout("")
  }


function signout(){
  localStorage.removeItem('jwt')
  localStorage.removeItem('detail')
  localStorage.removeItem('detail')
  navigate('/')
}
  return (
    <div className="profile-div">
      <div className='profile'>
      <div className="profile-container">
        <div><img src={logo} alt="Profile" className="profile-picture" />
      <h1 className="profile-username" >{profileData.username}</h1>

        </div>
      
      <div className="profile-details">
        <h1 className="profile-fullname">{profileData.name}</h1>
        <p className="profile-email">{profileData.email}</p>
      </div>
    </div>

    <div className="signout-div"><button onClick={()=>{signout()}}>Logout</button></div>
      </div>
 
        <hr />

    <div className="about-div">
        <h2>About</h2>
       
{
  about? (
    <div>
      <p className='about'>{about}</p> 
      <button onClick={()=>{editabout()}} >Edit</button>
    </div>
  ) : (
    <div>
      <textarea
        placeholder='Add About Yourself'
        value={about_val}
        onChange={(e) => { setabout_val(e.target.value) }}
      ></textarea>
      <button onClick={() => addabout(about_val)}>Add</button>
    </div>
  )
}


<ContactInformation data={profileData}/>
<Education/>
   
      </div>

    
    </div>
    
  );
}

export default Profile;
