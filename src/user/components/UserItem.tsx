import React from "react";

import "./UserItem.css";

interface UserItemProps {
  id: string;
  image: string;
  name: string;
  placeCount: number;
}

const UserItem: React.FC<UserItemProps> = (props) => {
  return <h1>hi</h1>;
};

export default UserItem;
