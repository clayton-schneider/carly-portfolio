import { FunctionComponent, useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

interface IBurger {
  className?: string;
  isOpen: boolean;
  toggle: () => void;
}

export const Burger: FunctionComponent<IBurger> = ({
  className,
  isOpen,
  toggle,
}) => {
  const topLineVariant = {
    // initial: { x1: 0, x2: 0, y1: 1, y2: 1 },
    open: { x1: 1, x2: 21, y1: 1, y2: 21 },
    closed: { x1: 0, x2: 40, y1: 1, y2: 1 },
  };

  const middleLineVariant = {
    // initial: { x1: 40, x2: 40, y1: 7, y2: 7 },
    open: { x1: 0, x2: 0, y1: 7, y2: 7, transition: { duration: 0.1 } },
    closed: { x1: 0, x2: 40, y1: 7, y2: 7 },
  };

  const bottomLineVariant = {
    // initial: { x1: 0, x2: 0, y1: 13, y2: 13 },
    open: { x1: 1, x2: 21, y1: 21, y2: 1 },
    closed: { x1: 0, x2: 40, y1: 13, y2: 13 },
  };

  return (
    <motion.svg
      className={className + " z-[100] cursor-pointer"}
      height={22}
      width={40}
      onClick={toggle}
    >
      <motion.line
        stroke="#000000"
        strokeWidth={2}
        // initial={"initial"}
        // animate={isOpen ? "open" : "closed"}
        variants={topLineVariant}
      ></motion.line>
      <motion.line
        stroke="#000000"
        strokeWidth={2}
        // initial={"initial"}
        // animate={isOpen ? "open" : "closed"}
        variants={middleLineVariant}
      ></motion.line>
      <motion.line
        stroke="#000000"
        strokeWidth={2}
        // initial={"initial"}
        // animate={isOpen ? "open" : "closed"}
        variants={bottomLineVariant}
      ></motion.line>
    </motion.svg>
  );
};
