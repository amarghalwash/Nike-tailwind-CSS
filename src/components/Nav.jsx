import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  // State to track the visibility of the mobile navigation menu
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Toggle function for the menu
  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
  };

  return (
    <header className="py-8 absolute z-10 w-full padding-x">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a>
          <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </a>

        {/* Desktop Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="hidden max-lg:block cursor-pointer" onClick={toggleNav}>
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>

        {/* Mobile Navigation */}
        {isNavVisible && (
          <ul className="absolute top-20 right-0 bg-white shadow-lg p-5 flex flex-col gap-5 max-lg:block">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
