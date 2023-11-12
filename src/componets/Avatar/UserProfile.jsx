import React from "react";
import Avatar from '@mui/material/Avatar';

function UserProfile() {
  return (
    <div>
      <Avatar
        alt="שם המשתמש"
        src="/path/to/your/image.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </div>
  );
}

export default UserProfile;
