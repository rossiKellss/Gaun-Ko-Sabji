import Heading from "../components/SubComponent/HeadingTitle/Heading";
import SubHeading from "../components/SubComponent/HeadingTitle/SubHeading";
import Para from "../components/SubComponent/Paragraph/Para";
import { FaRegStar } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";


function Cards() {
  return <div className="contentMargin">
    <Heading content={"Products"}/>
    <div className="md:mt-4">
    <SubHeading content={"All"}/>
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 mt-1 ">
      <div className="card h-96 md:h-[22rem] w-full lg:h-[25rem] rounded-md border-2 shadow-lg">
        
        <div className="h-[55%] rounded-t-md relative ">
            <img src="https://plus.unsplash.com/premium_photo-1664527306785-a4d3374f6953?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D" alt="" srcset="" className="h-full w-full object-cover rounded-t-md"  />
            <div className="absolute right-3 bottom-3">
              <div className="text-xl p-2 bg-white rounded-full text-gray-800 lg:text-2xl ">

                <AiOutlinePlus/>
              </div>
              

             
            </div>
          </div>
        <div className="productInfo h-[50%] p-3">
          
          <div className=" flex justify-between items-center">
            <SubHeading content={"Tomatoes"}/>
            <span className=" bg-red-500 text-white px-4 rounded-full">

            <span>14$</span>
            </span>
            
          </div>
          <div className="mt-1 md:mt-2">
            <p className="text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit obcaecati quo, aliquam molestias qui</p>

          
          </div>
          <div className="mt-3 text-red-500 gap-1 flex text-xl ">
          <FaRegStar/>
          <FaRegStar/>
          <FaRegStar/>
          <FaRegStar/>
            

          </div>
            
          

        </div>

      </div>

      <div className="card h-96 md:h-[22rem] w-full lg:h-[25rem] rounded-md border-2 shadow-lg">
        
        <div className="h-[55%] rounded-t-md relative ">
            <img src="https://plus.unsplash.com/premium_photo-1664527306785-a4d3374f6953?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D" alt="" srcset="" className="h-full w-full object-cover rounded-t-md"  />
            <div className="absolute right-3 bottom-3">
              <div className="text-xl p-2 bg-white rounded-full text-gray-800 lg:text-2xl ">

                <AiOutlinePlus/>
              </div>
              

             
            </div>
          </div>
        <div className="productInfo h-[50%] p-3">
          
          <div className=" flex justify-between items-center">
            <SubHeading content={"Tomatoes"}/>
            <span className=" bg-red-500 text-white px-4 rounded-full">

            <span>14$</span>
            </span>
            
          </div>
          <div className="mt-1 md:mt-2">
            <p className="text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit obcaecati quo, aliquam molestias qui</p>

          
          </div>
          <div className="mt-3 text-red-500 gap-1 flex text-xl ">
          <FaRegStar/>
          <FaRegStar/>
          <FaRegStar/>
          <FaRegStar/>
            

          </div>
            
          

        </div>

      </div>

      <div className="card h-96 md:h-[22rem] w-full lg:h-[25rem] rounded-md border-2 shadow-lg">
        
        <div className="h-[55%] rounded-t-md relative ">
            <img src="https://plus.unsplash.com/premium_photo-1664527306785-a4d3374f6953?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D" alt="" srcset="" className="h-full w-full object-cover rounded-t-md"  />
            <div className="absolute right-3 bottom-3">
              <div className="text-xl p-2 bg-white rounded-full text-gray-800 lg:text-2xl ">

                <AiOutlinePlus/>
              </div>
              

             
            </div>
          </div>
        <div className="productInfo h-[50%] p-3">
          
          <div className=" flex justify-between items-center">
            <SubHeading content={"Tomatoes"}/>
            <span className=" bg-red-500 text-white px-4 rounded-full">

            <span>14$</span>
            </span>
            
          </div>
          <div className="mt-1 md:mt-2">
            <p className="text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit obcaecati quo, aliquam molestias qui</p>

          
          </div>
          <div className="mt-3 text-red-500 gap-1 flex text-xl ">
          <FaRegStar/>
          <FaRegStar/>
          <FaRegStar/>
          <FaRegStar/>
            

          </div>
            
          

        </div>

      </div>

      <div className="card h-96 md:h-[22rem] w-full lg:h-[25rem] rounded-md border-2 shadow-lg">
        
        <div className="h-[55%] rounded-t-md relative ">
            <img src="https://plus.unsplash.com/premium_photo-1664527306785-a4d3374f6953?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D" alt="" srcset="" className="h-full w-full object-cover rounded-t-md"  />
            <div className="absolute right-3 bottom-3">
              <div className="text-xl p-2 bg-white rounded-full text-gray-800 lg:text-2xl ">

                <AiOutlinePlus/>
              </div>
              

             
            </div>
          </div>
        <div className="productInfo h-[50%] p-3">
          
          <div className=" flex justify-between items-center">
            <SubHeading content={"Tomatoes"}/>
            <span className=" bg-red-500 text-white px-4 rounded-full">

            <span>14$</span>
            </span>
            
          </div>
          <div className="mt-1 md:mt-2">
            <p className="text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit obcaecati quo, aliquam molestias qui</p>

          
          </div>
          <div className="mt-3 text-red-500 gap-1 flex text-xl ">
          <FaRegStar/>
          <FaRegStar/>
          <FaRegStar/>
          <FaRegStar/>
            

          </div>
            
          

        </div>

      </div>

      <div className="card h-96 md:h-[22rem] w-full lg:h-[25rem] rounded-md border-2 shadow-lg">
        
        <div className="h-[55%] rounded-t-md relative ">
            <img src="https://plus.unsplash.com/premium_photo-1664527306785-a4d3374f6953?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D" alt="" srcset="" className="h-full w-full object-cover rounded-t-md"  />
            <div className="absolute right-3 bottom-3">
              <div className="text-xl p-2 bg-white rounded-full text-gray-800 lg:text-2xl ">

                <AiOutlinePlus/>
              </div>
              

             
            </div>
          </div>
        <div className="productInfo h-[50%] p-3">
          
          <div className=" flex justify-between items-center">
            <SubHeading content={"Tomatoes"}/>
            <span className=" bg-red-500 text-white px-4 rounded-full">

            <span>14$</span>
            </span>
            
          </div>
          <div className="mt-1 md:mt-2">
            <p className="text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit obcaecati quo, aliquam molestias qui</p>

          
          </div>
          <div className="mt-3 text-red-500 gap-1 flex text-xl ">
          <FaRegStar/>
          <FaRegStar/>
          <FaRegStar/>
          <FaRegStar/>
            

          </div>
            
          

        </div>

      </div>

      <div className="card h-96 md:h-[22rem] w-full lg:h-[25rem] rounded-md border-2 shadow-lg">
        
        <div className="h-[55%] rounded-t-md relative ">
            <img src="https://plus.unsplash.com/premium_photo-1664527306785-a4d3374f6953?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D" alt="" srcset="" className="h-full w-full object-cover rounded-t-md"  />
            <div className="absolute right-3 bottom-3">
              <div className="text-xl p-2 bg-white rounded-full text-gray-800 lg:text-2xl ">

                <AiOutlinePlus/>
              </div>
              

             
            </div>
          </div>
        <div className="productInfo h-[50%] p-3">
          
          <div className=" flex justify-between items-center">
            <SubHeading content={"Tomatoes"}/>
            <span className=" bg-red-500 text-white px-4 rounded-full">

            <span>14$</span>
            </span>
            
          </div>
          <div className="mt-1 md:mt-2">
            <p className="text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit obcaecati quo, aliquam molestias qui</p>

          
          </div>
          <div className="mt-3 text-red-500 gap-1 flex text-xl ">
          <FaRegStar/>
          <FaRegStar/>
          <FaRegStar/>
          <FaRegStar/>
            

          </div>
            
          

        </div>

      </div>

      <div className="card h-96 md:h-[22rem] w-full lg:h-[25rem] rounded-md border-2 shadow-lg">
        
        <div className="h-[55%] rounded-t-md relative ">
            <img src="https://plus.unsplash.com/premium_photo-1664527306785-a4d3374f6953?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D" alt="" srcset="" className="h-full w-full object-cover rounded-t-md"  />
            <div className="absolute right-3 bottom-3">
              <div className="text-xl p-2 bg-white rounded-full text-gray-800 lg:text-2xl ">

                <AiOutlinePlus/>
              </div>
              

             
            </div>
          </div>
        <div className="productInfo h-[50%] p-3">
          
          <div className=" flex justify-between items-center">
            <SubHeading content={"Tomatoes"}/>
            <span className=" bg-red-500 text-white px-4 rounded-full">

            <span>14$</span>
            </span>
            
          </div>
          <div className="mt-1 md:mt-2">
            <p className="text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit obcaecati quo, aliquam molestias qui</p>

          
          </div>
          <div className="mt-3 text-red-500 gap-1 flex text-xl ">
          <FaRegStar/>
          <FaRegStar/>
          <FaRegStar/>
          <FaRegStar/>
            

          </div>
            
          

        </div>

      </div>

      

     

     

    </div>

    </div>
   
   
  </div>;
}

export default Cards;
