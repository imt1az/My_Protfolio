import React from "react";
import { Link } from "react-scroll";
import { navigation } from "../data";

const Nav = () => {
  return (
    <nav>
      <ul className="flex  space-x-8 text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li
              className="text-white text-xl hover:text-accent cursor-pointer"
              key={index}
            >
              <Link
            
                to={item.href}
                activeclassName="active"
                spy={true}
                smooth={true}
                duration={500}
                className = 'transition-all duration-300'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
         <li className="text-white text-xl hover:text-accent cursor-pointer"><a target='_blank' href="https://drive.google.com/file/d/1Q2BE7Tp58Rz3Uuu2jUEQUAIsO6BsbS4c/view?usp=sharing">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
