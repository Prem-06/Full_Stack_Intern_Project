import React from 'react';
import {useNavigate} from 'react-router-dom'
import './profile.css';
import logo from '../../../public/picture/profile.jpg'
const Profile = () => {
  const profileData=JSON.parse(localStorage.getItem('detail'))
  const navigate=useNavigate();
function signout(){
  localStorage.removeItem('jwt')
  localStorage.removeItem('detail')
  navigate('/')
}
  return (
    <div className="profile-div">
      <div className="signout-div"><button onClick={()=>{signout()}}>Logout</button></div>
        
<div className="profile-container">
      <img src={logo} alt="Profile" className="profile-picture" />
      <div className="profile-details">
        <h1 className="profile-fullname">{profileData.name}</h1>
        <p className="profile-username">{profileData.username}</p>
        <p className="profile-email">{profileData.email}</p>
      </div>
      <div className="about-div">
        <h2>About</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea consequatur, repudiandae officia, quidem cupiditate nesciunt ipsa corrupti iure veniam asperiores quas accusantium nulla doloribus placeat tempora deleniti iste nemo animi.</p>
      </div>
    </div>
    <div className="update-div">
      <button>Update</button>
    </div>
    </div>
    
  );
}

export default Profile;
