import React from "react";
import myImage from "../assets/IMG_20221122_091756.jpg";

function ProfilePhoto() {
  return (
    <div>
      <img src={myImage} alt="" className="image" />
    </div>
      
  );
}

export default ProfilePhoto;
