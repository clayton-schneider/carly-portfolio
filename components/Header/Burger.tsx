import { FunctionComponent } from "react";

interface IBurger {
  className: string;
  isOpen: boolean;
  onClick: () => void;
}

export const Burger: FunctionComponent<IBurger> = () => {
  return (
    <div className="space-y-1">
      <span className="block h-0.5 w-8 bg-dark"></span>
      <span className="block h-0.5 w-8 bg-dark"></span>
      <span className="block h-0.5 w-8 bg-dark"></span>
    </div>
  );
};
