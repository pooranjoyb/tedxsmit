import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div id="navbar" className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-black">
      <img src="./assets/logo.png" alt="Logo" className="w-40 h-12" />
      <ul className="hidden md:flex">
        <Link to='/'><li className="p-4">Home</li></Link>
        <a href='#about'><li className="p-4">About</li></a>
        <a href="#tickets"><li className="p-4">Ticket & Merch</li></a>
        <a href="#contact"><li className="p-4">Contact</li></a>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <img src="./assets/logo.png" alt="Logo" className="w-40 h-12" />
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Ticket & Merch</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
