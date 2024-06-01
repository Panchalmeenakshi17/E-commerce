import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const [signinModal, setsigninModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <>
      {" "}
      <motion.div
        className=" "
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div className="bg-slate-900 md:flex md:justify-center flex justify-around gap-20   py-4">
          {/* <div>
            <NavLink to="/">
              <img
                className="md:w-1/4 w-1/3"
                src="../images/white_and_Green_Modern_Automotive_Logo__1_-removebg-preview.png"
                alt="not valid"
              />
            </NavLink>
          </div> */}

          <div className=" bg-grey-900 w-full ">
          <div className="flex justify-between  items-center  bg-[ff3ce8] p-2">
          <div className=" md:translate-x-20 bg-green400  ">
          <div className="md:translate-x-20 green-400">
              <NavLink className="gap-3 flex" exact to="/">
                <img className="h-16 w-20" src="images/DiGiHaatbg.jpg" alt="Logo" />
                <h1 className="mt-3 font-Main md:text-3xl font-bold text-[#3322f2]"> DigiHaat </h1>
              </NavLink>
            </div>
          </div>
            <div className="md:flex hidden justify-center md:gap-10 items-center   font-bold">
            <div className=" ml-[130px] ">
            <nav className="flex justify-end">
              <ul className=" md:space-x-5 text-[#3322f2] font-medium md:mr-16 flex list-none p-0 font-Main
               ">
                <li className="mr-4">
                  <NavLink
                    exact
                    to="/FirstHomepage"
                    activeclassname="active-link"
                    className="nav-link text-[#3322f2] transition ease-in-out duration-300 text-sm font-medium md:text-xl hover:text-[#dfcfff]"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    activeclassname="active-link"
                    className="nav-link text-[#3322f2] transition ease-in-out duration-300 ml- text-sm font-medium md:text-xl hover:text-[#dfcfff]"
                  >
                    Shop Now
                  </NavLink>
                </li>
                <li className="mr-4">
                  <NavLink
                    to="/About"
                    activeclassname="active-link"
                    className="nav-link text-[#3322f2] transition ease-in-out duration-300 text-sm font-medium md:text-xl hover:text-[#dfcfff]"
                  >
                    About Us
                  </NavLink>
                </li>
{/*                 
                <li className="mr-4">
                  <NavLink
                    to="/VisionMission"
                    activeclassname="active-link"
                    className="nav-link text-[#3322f2] text-sm font-medium md:text-xl hover:text-[#dfcfff]"
                  >
                    Vision &amp; Mission
                  </NavLink>
                </li> */}
              </ul>
            </nav>
          </div>
          <NavLink
           className="hover:bg-[] rounded-full text-center z-50   border-2 border-[#3322f2] hover:border-[#dfcfff] hover:text-[#dfcfff] h-[40px] w-[120px] font-bold transition ease-in-out hover:shadow-2xl hover:shadow-blue-950 text-[#3322f2] shadow-[#000000d6] shadow-md flex justify-center items-center duration-300 font-scnd cursor-pointer"
                to="/Signin">
          <div
 
             
            >
              <ul className=" ">
                <li className=" p- text-center  ">
                  <h1
                    className="nav-link rounded-full text-center p-1 font-bold  md:text-sm  "
                  >
                    {" "}
                    Sign Up
                  </h1>
                </li>
              </ul>
            </div>
            </NavLink>
            <NavLink  className="hover:bg-[] rounded-full text-center hover:shadow-2xl hover:shadow-blue-950 z-50 text-[#3322f2] border-2 border-[#3322f2] hover:border-[#dfcfff] hover:text-[#dfcfff] h-[40px] w-[120px] font-bold transition ease-in-out shadow-[#000000d6] shadow-md flex justify-center items-center bg-[] font-scnd cursor-pointer"
                to="/Login">
          <div
             
             
            >
              <ul className=" ">
                <li className=" p- text-center  ">
                  <h1
                    className="nav-link rounded-full text-center p-1  font-bold  md:text-sm  "
                  >
                    {" "}
                    Log In
                  </h1>
                </li>
              </ul>
            </div>
            </NavLink>
          {/* <div ref={dropdownRef} className="relative">
            <div
              onClick={toggleDropdown}
              className="hover:bg-[] rounded-full text-center z-50 text-[#3322f2] border-2 border-[#3322f2] hover:border-[white] hover:text-[white] h-[40px] w-[180px] font-bold transition ease-in-out shadow-[#000000d6] shadow-md flex justify-center items-center bg-[] font-scnd cursor-pointer"
            >
              <ul className=" ">
                <li className=" p- text-center  ">
                  <h1
                    className="nav-link rounded-full text-center p-1 hover:text-[white]  text-[#3322f2] font-bold  md:text-sm  "
                  >
                    {" "}
                    Click for Registration{" "}
                  </h1>
                </li>
              </ul>
            </div>
            {showDropdown && (
              <div className="absolute z-50 mt-2 font-bold p-4 text-center bg-white border rounded-lg shadow-lg">
                <ul className="list-none p-0 font-scnd">
                  <li>
                    <NavLink
                      to="/VolunteerRegistration"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Register as Volunteer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/register/admin"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Register as Admin
                    </NavLink>
                  </li>  
                  <li>
                    <NavLink
                      to="/Donate"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Blood Donator
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div> */}
              {/* <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "   nav-link text-[#3322f2] font-medium md:text-xl hover:text-[white]"
                    : null
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/AboutUs"
                className={({ isActive }) =>
                  isActive
                    ? "   nav-link text-[#3322f2] font-medium md:text-xl hover:text-[white]"
                    : null
                }
              >
                 About Us
              </NavLink>
              <NavLink
                to="/VisionMission"
                className={({ isActive }) =>
                  isActive
                    ? "   nav-link text-[#3322f2] font-medium md:text-xl hover:text-[white]"
                    : null
                }
              >
                Vision &amp; Mission
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "   nav-link text-[#3322f2] font-medium md:text-xl hover:text-[white]"
                    : null
                }
              >
                Home
              </NavLink> */}

              {/* <div className="group relative inline-block">
                <NavLink
                  to=""
                  className="text-green-400 inline-flex hover:bg-[#9be961] transition ease-in-out gap-2 hover:text-[#000000] font-scnd items-center p-2  rounded-xl"
                >
                  Need4Need <MdKeyboardArrowDown className="text-2xl" />
                </NavLink>
                <div className="font-scnd hidden absolute group-hover:block w-full">
                  <div className="bg-[#153619] group-hover:block flex flex-col text-center space-y-2  z-20 absolute rounded-bl-xl rounded-br-2xl ">
                  <button className=" px-12 w-full hover:bg-[#5dff8e5c] transition ease-in-out  " >

                    <NavLink
                      to="/About"
                      className={({ isActive }) =>
                        isActive
                          ? "   transition ease-in-out font-bold font-scnd  text-[#8f5af9]   rounded-xl"
                          : null
                      }
                    >
                    <button className="mt-3 w-full "> About </button>
                     
                    </NavLink>
                  </button>
                  <button className="  w-full hover:bg-[#5dff8e5c] transition ease-in-out  " >
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive
                          ? " mt-3  transition ease-in-out font-bold font-scnd  text-[#8f5af9]   rounded-xl"
                          : null
                      }
                    >
                      <button className="mt-3">Services</button>
                    </NavLink>
                      </button>
                      <button className=" rounded-bl-xl rounded-br-2xl  w-full hover:bg-[#5dff8e5c] transition ease-in-out  " >
                    <NavLink
                      to="/Contact"
                      className={({ isActive }) =>
                        isActive
                          ? "   transition ease-in-out font-bold font-scnd  text-[#8f5af9]   rounded-xl"
                          : null
                      }
                    >
                      <button className="mt-3 mb-4  ">Contact</button>
                    </NavLink>
                    </button>
                  </div>
                </div>
              </div> */}
             
            </div>

            <div className="flex relative">
            
              {!menu && (
                <HiMenuAlt4
                  fontSize={28}
                  className="bg-[#3322f2] rounded fill-white md:hidden cursor-pointer"
                  onClick={() => setMenu(true)}
                />
              )}
              {menu && (
                
                <ul
                  className="z-30 bg-[#0000004d] backdrop-blur-md fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-md md:hidden list-none
            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
                >
                
                  <li className="text-xl w-full my-3">
                    <AiOutlineClose
                      className="stroke-2"
                      onClick={() => setMenu(false)}
                    />
                  </li>
                  
                  <li className="mr-4 font-bold bg -emerald-800">
                  <NavLink
                    exact
                    to="/"
                    activeclassname="active-link"
                    className={({ isActive }) =>
                      isActive ? "nav-link text-[#3322f2] font-medium md:text-xl" : null
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className=" mr-5 bg-emerald-4 mt-4    font-bold ">
                  <NavLink
                    to="/AboutUs"
                    activeclassname="active-link"
                    className={({isActive})=>
                    isActive ? "nav-link text-[#f25522] font-medium md:text-xl " : null
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                
                <li className=" mr-5 bg-yello -800 mt-4  font-bold ">
                  <NavLink
                    to="/VisionMission"
                    activeclassname="active-link"
                    className={({isActive})=>
                    isActive ? "nav-link text-[#f25522] font-medium md:text-xl " : null
                    }
                  >
                    Vision &amp; Mission
                  </NavLink>
                </li>
                <li className=" mr-5 bg-emer ld-800 mt-4   font-bold ">
                  <NavLink
                    to="/ContactUs"
                    activeclassname="active-link"
                    className={({isActive})=>
                    isActive ? "nav-link text-[#f25522] font-medium md:text-xl " : null
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <hr className="my-6 bg-red-950 w-full border-2 border-gray-300"></hr>
                <h1 className="  px-4   rounded-full  mr-3 py-2 text-gray-800  bg-gray-200"
                    >
                      Register As
                      </h1>
                  {/* <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      isActive ? "nav-link text-[#3322f2] font-medium md:text-xl" : null
                    }
                  >
                    <li className="my-3 text-lg mx-4 font-semibold cursor-pointer hover:text-[#9be961]">
                      Home
                    </li>
                  </NavLink> */}
                  {/* <NavLink
                            to="/About"
                            className={({ isActive }) => isActive ? 'text-light1 text-green-400  font-bold' : null }
                          >
                            <li className="cursor-pointer my-5   z-10 text-lg font-semibold hover:text-light2">
                              About Us
                            </li>
                          </NavLink>
                          <NavLink
                            to="/services"
                            className={({ isActive }) => isActive ? 'text-light1 text-green-400 font-bold' : null }
                          >
                            <li className="cursor-pointer my-5 text-lg mt-1 font-semibold hover:text-light2">
                              Services
                            </li>
                          </NavLink>
                          <NavLink
                            to="/Contact"
                            className={({ isActive }) => isActive ? 'text-light1 text-green-400 font-bold' : null }
                          >
                            <li className="cursor-pointer my-5 text-lg mt-1 font-semibold hover:text-light2">
                              Contact
                            </li>
                          </NavLink> */}
                  <div className="   flex flex-col ">
                    <NavLink to='/VolunteerRegistration'
                      // onClick={() => setsigninModal(true)}
                      className="relative my-4 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group"
                    >
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-center font-bold text-white transition-colors duration-200 font-scnd ease-in-out group-hover:text-white">
                        Volunteer
                      </span>
                    </NavLink>

                    <NavLink to='/Donate'
                      onClick={() => setShowModal(true)}
                      className="relative my-4 inline-flex items-center   justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group"
                    >
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-center font-bold text-white transition-colors duration-200 font-scnd ease-in-out group-hover:text-white">
                        Blood Donator
                      </span>
                    </NavLink>
                  </div>
                </ul>
              )}
            </div>
          </div>
          </div>
        </div>

      </motion.div>{" "}
    </>
  );
};

export default Header;
