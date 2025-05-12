import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Sings" />
      <Button name="Popular" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="Dance" />
      <Button name="Badminton" />
      <Button name="Live" />
      <Button name="Music" />
    </div>
  );
};

export default ButtonList;
