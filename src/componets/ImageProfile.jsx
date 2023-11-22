import React from 'react';
import Avatar from '@mui/material/Avatar';
const a = 0
const ImageProfile = ({ imageUrl, alt }) => {
  return <Avatar alt={alt} src={imageUrl} />;
};

export default ImageProfile;
