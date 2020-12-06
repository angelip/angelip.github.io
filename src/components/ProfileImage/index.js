import React from 'react';

const IMAGE_URL = require('../../assets/profile.jpg');

const ProfileImage = () => {
  return (
    <div className="flex background-light-grey profile-image p-20" style={{ minWidth: 250 }}>
      <div className="ml-40">
        <h1 className="mb-10 mt-20 color-black" style={{ fontWeight: 600 }}>ANGEL IP</h1>
        <h4 className="color-black">Rehabilitation Assistant</h4>
      </div>
      <div className="text-align-center page-content flex-column">
        <img className="ml-auto mr-auto mt-70 border-radius-10" src={IMAGE_URL} alt="Angel Ip Profile" style={{ width: '50%', minWidth: 200, height: 'auto' }}/>
      </div>
    </div>
  );
};

export default ProfileImage;
