import React from 'react';

const IMAGE_URL = require('../../assets/profile.jpg');

const ProfileImage = () => {
  return (
    <div className="flex background-one flex-row align-items-center justify-content-center" style={{ maxWidth: '35vw' }}>
      <img className="" src={IMAGE_URL} alt="Angel Ip Profile" style={{ width: '70%', maxWidth: '20vw', height: 'auto',  }}/>
    </div>
  );
};

export default ProfileImage;
