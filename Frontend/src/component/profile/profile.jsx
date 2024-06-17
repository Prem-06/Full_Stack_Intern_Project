import React from 'react';
import './profile.css';

const Profile = () => {
  const profileData = {
    picture: 'https://via.placeholder.com/150', 
    fullName: 'John Doe',
    username: 'johndoe123',
    email: 'johndoe@example.com'
  };

  return (
    <div className="profile-container">
      <img src={profileData.picture} alt="Profile" className="profile-picture" />
      <div className="profile-details">
        <h1 className="profile-fullname">{profileData.fullName}</h1>
        <p className="profile-username">@{profileData.username}</p>
        <p className="profile-email">{profileData.email}</p>
      </div>
    </div>
  );
}

export default Profile;
