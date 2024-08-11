const Header = () => {
  return (
    <div className="flex justify-between items-center  bg-red-100 p-8 shadow-lg ">
      <h1>Logo</h1>
      <ul className="flex gap-3 font-medium text-xl">
        <li className="hover:text-orange-400 cursor-pointer">Home</li>
        <li className="hover:text-orange-400 cursor-pointer">About Us</li>
        <li className="hover:text-orange-400 cursor-pointer">Contact</li>
        <li className="hover:text-orange-400 cursor-pointer">Social Media</li>
      </ul>
    </div>
  );
};

export default Header;
