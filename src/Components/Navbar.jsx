import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div id="navbar" className=" z-50 flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white bg-black">
      <img src="./assets/logo.png" alt="Logo" className="w-40 h-12" />
      <ul className="hidden md:flex">
        <Link to='/'><li className="p-4">Home</li></Link>
        <a href='#about'><li className="p-4">About</li></a>
        <a href="#"><li className="p-4">Tickets</li></a>
        <a href="#tickets"><li className="p-4">Merch</li></a>
        <a href="#contact"><li className="p-4">Contact</li></a>
      </ul>
      <div onClick={handleNav} className="block md:hidden z-10 px-4">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul
        className={
          nav
            ? "fixed bottom-8 top-0 w-[100%] h-[10%] border-r border-r-gray-900 bg-black ease-in-out duration-500"
            : "ease-in-out duration-500 fixed top-[-100%]"
        }
      >
        <div className="flex flex-col items-center justify-center" >
          <img src="./assets/logo.png" alt="Logo" className="w-40 h-12" />
        <div className="flex flex-row">
          <li className="p-2" onClick={closeNav}>Home</li>
          <li className="p-2" onClick={closeNav}><a href='#about'>About</a></li>
          <li className="p-2" onClick={closeNav}><a href="#tickets">Tickets</a></li>
          <li className="p-2" onClick={closeNav}><a href="#tickets">Merch</a></li>
          <li className="p-2" onClick={closeNav}><a href="#contact">Contact</a></li>
        </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
