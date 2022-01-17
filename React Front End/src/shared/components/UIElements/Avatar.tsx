import React from "react";

import "./Avatar.css";

interface AvatarProps {
  image: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <div className="avatar">
      <img src={props.image} alt={props.alt} />
    </div>
  );
};

export default Avatar;
