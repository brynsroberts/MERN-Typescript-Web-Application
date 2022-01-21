import React from "react";

import Input from "../../shared/FormElements/Input";
import "./NewPlace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input type="text" label="Title" element="input" id="1" />
    </form>
  );
};

export default NewPlace;