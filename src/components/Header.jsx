import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center  bg-white p-8 shadow-lg ">
      <img src={logo} alt="company logo" className="w-[75px] h-[75px]" />
      <ul className="flex gap-5 font-medium text-xl">
        <li className="hover:text-orange-400 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-orange-400 cursor-pointer">
          <Link to="about">About Us</Link>
        </li>
        <li className="hover:text-orange-400 cursor-pointer">
          <Link to="contact">Contact</Link>
        </li>
        <li className="hover:text-orange-400 cursor-pointer">
          <Link to="social-media">Social Media</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
