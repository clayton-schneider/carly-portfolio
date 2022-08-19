import { useState } from "react";
import { Burger } from "./Burger";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Burger
      className="[&>*]:bg-dark [&>*]:after:bg-dark [&>*]:before:bg-dark"
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    />
  );
};
