import { Burger } from "./Burger";
import { motion, useCycle } from "framer-motion";
import {
  HeaderDocumentDataNavigationItem,
  Simplify,
} from "../../types.generated";

interface IMobileMenu {
  className?: string;
  navigation:
    | []
    | [
        Simplify<HeaderDocumentDataNavigationItem>,
        ...Simplify<HeaderDocumentDataNavigationItem>[]
      ];
}

export const MobileMenu = ({ className, navigation }: IMobileMenu) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const sidebar = {
    open: {
      left: 0,
      width: "100vw",
      padding: "0 5%",
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
    closed: {
      width: 0,
      transition: {
        type: "tween",
        delay: 0.5,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const linkVariant = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const parentLinkVariant = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <>
      <motion.nav
        className={className + " "}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          variants={sidebar}
          className="fixed top-0 bottom-0 right-0 z-50 h-screen w-screen bg-white"
        >
          <motion.ul
            className="text-bg my-20 space-y-4 text-3xl font-bold"
            variants={parentLinkVariant}
          >
            {navigation.map((item, index) => (
              <motion.li
                className="cursor-pointer"
                key={`mobile-link-${index}`}
                variants={linkVariant}
              >
                <motion.a
                  onClick={() => toggleOpen()}
                  href={item.link ? item.link : "/404"}
                >
                  {item.linkText ? item.linkText : "Link Text"}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <Burger
          className={isOpen ? "fixed right-[5%]" : "absolute right-[5%]"}
          isOpen={isOpen}
          toggle={() => toggleOpen()}
        />
      </motion.nav>
    </>
  );
};
