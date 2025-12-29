import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0 },
};

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");
  return (
    <motion.nav
      className="w-full flex py-6 justify-between items-center navbar"
      initial="hidden"
      animate="show"
      variants={navVariants}
    >
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <motion.ul
        className="list-none sm:flex hidden justify-end items-center flex-1"
        variants={navVariants}
      >
        {navLinks.map((nav, index) => (
          <motion.li
            key={nav.id}
            variants={item}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </motion.li>
        ))}
      </motion.ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <motion.ul
            className="list-none flex justify-end items-start flex-1 flex-col"
            initial="hidden"
            animate={toggle ? "show" : "hidden"}
            variants={navVariants}
          >
            {navLinks.map((nav, index) => (
              <motion.li
                key={nav.id}
                variants={item}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
