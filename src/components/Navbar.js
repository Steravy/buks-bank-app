import React from "react";
import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants/staticTexts";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hooBank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((navLink, index) => (
          <li
            key={navLink.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center" >
        <img src={toggle ? close : menu } alt="menu" className="w-[28px] h-[28px] object-contain" />
      </div>
    </nav>
  );
};

export default Navbar;
