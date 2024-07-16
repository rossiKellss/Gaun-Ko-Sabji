import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useState } from "react";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="relative navBar w-full p-4">
      {/* for mobile devices */}
      <div
        className={`fixed h-screen bg-red-500 right-0 top-0 w-[45%] p-4 flex flex-col ${
          openNav ? "translate-x-[500px]" : "translate-x-0"
        } transition ease-in-out duration-15`}
      >
        <div className="self-end">
          <MdClose
            className="text-xl"
            onClick={() => {
              setOpenNav(!openNav);
            }}
          />
        </div>
      </div>

      {/* for large screen devices */}
      <div className="flex justify-between items-center">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="menu hidden md:flex md:navLinkTypoMd lg:navLinkTypoLg">
          <ul className="flex  gap-5">
            <li>Home</li>
            <li>Products</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
        <div className="right flex gap-5 items-center">
          <div className="flex gap-1 buttons">
            <CiSearch />
            <CiShoppingCart />
          </div>
          <RxHamburgerMenu
            className="text-lg "
            onClick={() => {
              setOpenNav(!openNav);
            }}
          />
          <span className="hidden md:block navLinkTypo button">Sign out</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
