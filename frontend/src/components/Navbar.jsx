import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Button from "./SubComponent/Button/Button";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [search,setSearch]=useState();
  const searchItem=()=>{
    

  }

  return (
    <div className="relative w-[80%] navBar m-auto py-4">
      {/* for mobile devices */}
      <div
        className={`fixed h-screen bg-red-500 right-0 top-0 w-[45%] p-4 flex flex-col ${
          openNav ? "translate-x-0" : "translate-x-[5000px]"
        } transition ease-in-out duration-150`}
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
        <div className="menu hidden md:flex navLinkTypo w-full">
          <div className=" w-full flex items-center justify-center gap-0 ">
            
          <input type="text"  placeholder="Search" className="outline-none bg-[#303030] rounded-l-full  w-1/2 px-5 py-2 text-white" name="Search" onChange={(e)=>{setSearch(e.target.value)}}/>

          <span className="bg-black h-full w-12 text-3xl rounded-r-full flex items-center justify-center text-white "><FiSearch  className="cursor-pointer"/></span>
          </div>
         
         

          
         


          {/* <ul className="flex  gap-5">
            <li>Home</li>
            <li>Products</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul> */}
        </div>
        <div className="right flex gap-5 items-center">
          <div className="flex gap-1 c2aIcons text-3xl">
            {/* <CiSearch /> */}
            <CiShoppingCart onClick={searchItem}/>
          </div>
          <RxHamburgerMenu
            className="text-lg md:hidden "
            onClick={() => {
              setOpenNav(!openNav);
            }}
          />
          <span className="hidden md:block">
            <Button />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
