import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import Button from "./SubComponent/Button/Button";
import { FiSearch } from "react-icons/fi";
import Search from "../pages/Search";
import SignUp from "../pages/AuthPages/SignUp";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [search, setSearch] = useState();
  const navigate = useNavigate();
 
  const sendLink = () => {
    if (search) {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };
  const SignUpTrigger=()=>{
    console.log("signup triggered");
    navigate("/signup");
  }

  return (
    <div className="fixed top-0 py-6 w-full bg-background z-[99]">
      <div className="w-[80%] m-auto">

      
      {/* for mobile devices */}
      <div
        className={`fixed h-screen bg-gray-600 right-0 top-0 w-[70%] p-4 flex flex-col ${
          openNav ? "translate-x-0" : "translate-x-[5000px]"
        } transition ease-in-out duration-150 z-[100]`}
      >
        <div className="self-end">
          <MdClose
            className="c2aIcons"
            onClick={() => {
              setOpenNav(!openNav);
            }}
          />
        </div>
      </div>

      {/* for large screen devices */}
      <div className="flex justify-between items-center ">
        <div className="logo text-black">
          <h1>LOGO</h1>
        </div>
        <div className="menu hidden md:flex navLinkTypo w-full ">
          <div className=" w-full flex items-center justify-center  ">

            <input
              type="text"
              placeholder="Search"
              className=" bg-gray-300 border border-gray-400  rounded-l-full  w-[55%] px-5 py-1 text-black h-full "
              name="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />

            <span
              className="bg-green-600 h-full w-10 text-xl rounded-r-full flex items-center justify-center text-white hover:bg-green-700 transition ease-linear "
              onClick={sendLink}
            >
              <FiSearch className="cursor-pointer" />
            </span>
          </div>
        </div>
        <div className="right flex gap-5 items-center">
          <div className="relative flex gap-1 c2aIcons ">

           <span className="absolute top-0 right-0 text-xs bg-green-500 w-4 rounded-full text-center ">1</span>
            <CiShoppingCart />
          </div>
          <RxHamburgerMenu
            className="c2aIcons   md:hidden "
            onClick={() => {
              setOpenNav(!openNav);
            }}
          />
          <span className="hidden md:block">
            <Link to={"/signup"}>

            <Button content={"Signup"}/>
            </Link>
          </span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
