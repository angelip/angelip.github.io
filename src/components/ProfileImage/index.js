import React from 'react';

const IMAGE_URL = require('../../assets/profile.jpg');

const ProfileImage = () => {
  return (
    <div className="flex background-one flex-row align-items-center justify-content-center" style={{ maxWidth: '40vw', height: '100%' }}>
      <img className="flex" src={IMAGE_URL} alt="Angel Ip Profile" style={{ maxWidth: '50%', maxHeight: '50%' }}/>
    </div>
  );
};

export default ProfileImage;
