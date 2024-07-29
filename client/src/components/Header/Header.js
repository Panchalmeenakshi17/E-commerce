// import React, { useState, useRef, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { AiOutlineClose } from "react-icons/ai";
// import { FaArrowRight } from "react-icons/fa";
// // import { NavLink } from "react-router-dom";
// // import { MdKeyboardArrowDown } from "react-icons/md";
// import { motion } from "framer-motion";
// import { HiMenuAlt4 } from "react-icons/hi";

// const Header = () => {
//   const [menu, setMenu] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   // const [signinModal, setsigninModal] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const closeDropdown = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setShowDropdown(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", closeDropdown);
//     return () => {
//       document.removeEventListener("mousedown", closeDropdown);
//     };
//   }, []);

//   return (
//     <>
//       {" "}
//       <motion.div
//         className=" "
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 5 }}
//         exit={{ opacity: 0 }}
//       >
//         <div className="bg-slate-900 md:flex md:justify-center flex justify-around gap-20   py-4">
//           {/* <div>
//             <NavLink to="/">
//               <img
//                 className="md:w-1/4 w-1/3"
//                 src="../images/white_and_Green_Modern_Automotive_Logo__1_-removebg-preview.png"
//                 alt="not valid"
//               />
//             </NavLink>
//           </div> */}

//           <div className=" bg-grey-900 w-full ">
//           <div className="flex justify-between  items-center  bg-[ff3ce8] p-2">
//           <div className=" md:translate-x-20 bg-green400  ">
//           <div className="md:translate-x-20 green-400">
//               <NavLink className="gap-3 flex" exact to="/">
//                 <img className="h-16 w-20" src="images/DiGiHaatbg.jpg" alt="Logo" />
//                 <h1 className="mt-3 font-Main md:text-3xl font-bold text-[#3322f2]"> DigiHaat </h1>
//               </NavLink>
//             </div>
//           </div>
//             <div className="md:flex hidden justify-center md:gap-10 items-center   font-bold">
//             <div className=" ml-[130px] ">
//             <nav className="flex justify-end">
//               <ul className=" md:space-x-5 text-[#3322f2] font-medium md:mr-16 flex list-none p-0 font-Main
//                ">
//                 <li className="mr-2">
//                   <NavLink
//                     to="/"
//                     activeclassname="active-link"
//                     className="nav-link text-[#3322f2] transition ease-in-out duration-300 ml- text-sm font-medium md:text-xl hover:text-[#dfcfff]"
//                   >
//                     Shop Now
//                   </NavLink>
//                 </li>
//                 <li className="mr-4">
//                   <NavLink
//                     exact
//                     to="/FirstHomepage"
//                     activeclassname="active-link"
//                     className="nav-link text-[#3322f2] transition ease-in-out duration-300 text-sm font-medium md:text-xl hover:text-[#dfcfff]"
//                   >
//                     Featured
//                   </NavLink>

//                 </li>
//                 <li className="ml-4">
//                   <NavLink
//                     to="/About"
//                     activeclassname="active-link"
//                     className="nav-link text-[#3322f2] transition ease-in-out duration-300 text-sm font-medium md:text-xl hover:text-[#dfcfff]"
//                   >
//                     About Us
//                   </NavLink>
//                 </li>
// {/*
//                 <li className="mr-4">
//                   <NavLink
//                     to="/VisionMission"
//                     activeclassname="active-link"
//                     className="nav-link text-[#3322f2] text-sm font-medium md:text-xl hover:text-[#dfcfff]"
//                   >
//                     Vision &amp; Mission
//                   </NavLink>
//                 </li> */}
//               </ul>
//             </nav>
//           </div>
//           <NavLink
//            className="hover:bg-[] rounded-full text-center z-50   border-2 border-[#3322f2] hover:border-[#dfcfff] hover:text-[#dfcfff] h-[40px] w-[120px] font-bold transition ease-in-out hover:shadow-2xl hover:shadow-blue-950 text-[#3322f2] shadow-[#000000d6] shadow-md flex justify-center items-center duration-300 font-scnd cursor-pointer"
//                 to="/Signin">
//           <div

//             >
//               <ul className=" ">
//                 <li className=" p- text-center  ">
//                   <h1
//                     className="nav-link rounded-full text-center p-1 font-bold  md:text-sm  "
//                   >
//                     {" "}
//                     Sign Up
//                   </h1>
//                 </li>
//               </ul>
//             </div>
//             </NavLink>
//             <NavLink  className="hover:bg-[] rounded-full text-center hover:shadow-2xl hover:shadow-blue-950 z-50 text-[#3322f2] border-2 border-[#3322f2] hover:border-[#dfcfff] hover:text-[#dfcfff] h-[40px] w-[120px] font-bold transition ease-in-out shadow-[#000000d6] shadow-md flex justify-center items-center bg-[] font-scnd cursor-pointer"
//                 to="/Login">
//           <div

//             >
//               <ul className=" ">
//                 <li className=" p- text-center  ">
//                   <h1
//                     className="nav-link rounded-full text-center p-1  font-bold  md:text-sm  "
//                   >
//                     {" "}
//                     Log In
//                   </h1>
//                 </li>
//               </ul>
//             </div>
//             </NavLink>
//           {/* <div ref={dropdownRef} className="relative">
//             <div
//               onClick={toggleDropdown}
//               className="hover:bg-[] rounded-full text-center z-50 text-[#3322f2] border-2 border-[#3322f2] hover:border-[white] hover:text-[white] h-[40px] w-[180px] font-bold transition ease-in-out shadow-[#000000d6] shadow-md flex justify-center items-center bg-[] font-scnd cursor-pointer"
//             >
//               <ul className=" ">
//                 <li className=" p- text-center  ">
//                   <h1
//                     className="nav-link rounded-full text-center p-1 hover:text-[white]  text-[#3322f2] font-bold  md:text-sm  "
//                   >
//                     {" "}
//                     Click for Registration{" "}
//                   </h1>
//                 </li>
//               </ul>
//             </div>
//             {showDropdown && (
//               <div className="absolute z-50 mt-2 font-bold p-4 text-center bg-white border rounded-lg shadow-lg">
//                 <ul className="list-none p-0 font-scnd">
//                   <li>
//                     <NavLink
//                       to="/VolunteerRegistration"
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                     >
//                       Register as Volunteer
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to="/register/admin"
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                     >
//                       Register as Admin
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to="/Donate"
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                     >
//                       Blood Donator
//                     </NavLink>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div> */}
//               {/* <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "   nav-link text-[#3322f2] font-medium md:text-xl hover:text-[white]"
//                     : null
//                 }
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 to="/AboutUs"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "   nav-link text-[#3322f2] font-medium md:text-xl hover:text-[white]"
//                     : null
//                 }
//               >
//                  About Us
//               </NavLink>
//               <NavLink
//                 to="/VisionMission"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "   nav-link text-[#3322f2] font-medium md:text-xl hover:text-[white]"
//                     : null
//                 }
//               >
//                 Vision &amp; Mission
//               </NavLink>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "   nav-link text-[#3322f2] font-medium md:text-xl hover:text-[white]"
//                     : null
//                 }
//               >
//                 Home
//               </NavLink> */}

//               {/* <div className="group relative inline-block">
//                 <NavLink
//                   to=""
//                   className="text-green-400 inline-flex hover:bg-[#9be961] transition ease-in-out gap-2 hover:text-[#000000] font-scnd items-center p-2  rounded-xl"
//                 >
//                   Need4Need <MdKeyboardArrowDown className="text-2xl" />
//                 </NavLink>
//                 <div className="font-scnd hidden absolute group-hover:block w-full">
//                   <div className="bg-[#153619] group-hover:block flex flex-col text-center space-y-2  z-20 absolute rounded-bl-xl rounded-br-2xl ">
//                   <button className=" px-12 w-full hover:bg-[#5dff8e5c] transition ease-in-out  " >

//                     <NavLink
//                       to="/About"
//                       className={({ isActive }) =>
//                         isActive
//                           ? "   transition ease-in-out font-bold font-scnd  text-[#8f5af9]   rounded-xl"
//                           : null
//                       }
//                     >
//                     <button className="mt-3 w-full "> About </button>

//                     </NavLink>
//                   </button>
//                   <button className="  w-full hover:bg-[#5dff8e5c] transition ease-in-out  " >
//                     <NavLink
//                       to="/services"
//                       className={({ isActive }) =>
//                         isActive
//                           ? " mt-3  transition ease-in-out font-bold font-scnd  text-[#8f5af9]   rounded-xl"
//                           : null
//                       }
//                     >
//                       <button className="mt-3">Services</button>
//                     </NavLink>
//                       </button>
//                       <button className=" rounded-bl-xl rounded-br-2xl  w-full hover:bg-[#5dff8e5c] transition ease-in-out  " >
//                     <NavLink
//                       to="/Contact"
//                       className={({ isActive }) =>
//                         isActive
//                           ? "   transition ease-in-out font-bold font-scnd  text-[#8f5af9]   rounded-xl"
//                           : null
//                       }
//                     >
//                       <button className="mt-3 mb-4  ">Contact</button>
//                     </NavLink>
//                     </button>
//                   </div>
//                 </div>
//               </div> */}

//             </div>

//             <div className="flex relative">

//               {!menu && (
//                 <HiMenuAlt4
//                   fontSize={28}
//                   className="bg-[#3322f200] rounded fill-white md:hidden cursor-pointer"
//                   onClick={() => setMenu(true)}
//                 />
//               )}
//               {menu && (

//                 <ul
//                   className="z-30 bg-[#0000004d] backdrop-blur-md fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-md md:hidden list-none
//             flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
//                 >

//                   <li className="text-xl w-full my-3">
//                     <AiOutlineClose
//                       className="stroke-2"
//                       onClick={() => setMenu(false)}
//                     />
//                   </li>

//                   <li className="mr-4 font-bold bg -emerald-800">
//                   <NavLink
//                     exact
//                     to="/"
//                     activeclassname="active-link"
//                     className={({ isActive }) =>
//                       isActive ? "nav-link text-[#3322f2] font-medium md:text-xl" : null
//                     }
//                   >
//                     Shop Now
//                   </NavLink>
//                 </li>
//                 <li className=" mr-5 bg-emerald-4 mt-4    font-bold ">
//                   <NavLink
//                     to="/FirstHomepage"
//                     activeclassname="active-link"
//                     className={({isActive})=>
//                     isActive ? "nav-link text-[#3322f2] font-medium md:text-xl " : null
//                     }
//                   >
//                     Featured
//                   </NavLink>
//                 </li>

//                 <li className=" mr-5 bg-yello -800 mt-4  font-bold ">
//                   <NavLink
//                     to="/About"
//                     activeclassname="active-link"
//                     className={({isActive})=>
//                     isActive ? "nav-link text-[#3322f2] font-medium md:text-xl " : null
//                     }
//                   >
//                     About us
//                   </NavLink>
//                 </li>

//                 <hr className="my-6 bg-red-950 w-full border-2 border-gray-300"></hr>

//                   {/* <NavLink
//                     to="/"
//                     end
//                     className={({ isActive }) =>
//                       isActive ? "nav-link text-[#3322f2] font-medium md:text-xl" : null
//                     }
//                   >
//                     <li className="my-3 text-lg mx-4 font-semibold cursor-pointer hover:text-[#9be961]">
//                       Home
//                     </li>
//                   </NavLink> */}
//                   {/* <NavLink
//                             to="/About"
//                             className={({ isActive }) => isActive ? 'text-light1 text-green-400  font-bold' : null }
//                           >
//                             <li className="cursor-pointer my-5   z-10 text-lg font-semibold hover:text-light2">
//                               About Us
//                             </li>
//                           </NavLink>
//                           <NavLink
//                             to="/services"
//                             className={({ isActive }) => isActive ? 'text-light1 text-green-400 font-bold' : null }
//                           >
//                             <li className="cursor-pointer my-5 text-lg mt-1 font-semibold hover:text-light2">
//                               Services
//                             </li>
//                           </NavLink>
//                           <NavLink
//                             to="/Contact"
//                             className={({ isActive }) => isActive ? 'text-light1 text-green-400 font-bold' : null }
//                           >
//                             <li className="cursor-pointer my-5 text-lg mt-1 font-semibold hover:text-light2">
//                               Contact
//                             </li>
//                           </NavLink> */}
//                   <div className="   flex flex-col ">
//                     <NavLink to='/Signin'
//                       // onClick={() => setsigninModal(true)}
//                       className="relative my-4 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl group"
//                     >
//                       <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
//                         <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
//                       </span>
//                       <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
//                       <span className="relative w-full text-center font-bold text-white transition-colors duration-200 font-scnd ease-in-out group-hover:text-white">
//                       Sign In
//                       </span>
//                     </NavLink>

//                     <NavLink to='/Login'
//                       onClick={() => setShowModal(true)}
//                       className="relative my-4 inline-flex items-center   justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl group"
//                     >
//                       <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
//                         <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
//                       </span>
//                       <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
//                       <span className="relative w-full text-center font-bold text-white transition-colors duration-200 font-scnd ease-in-out group-hover:text-white">
//                       Log In
//                       </span>
//                     </NavLink>
//                   </div>
//                 </ul>
//               )}
//             </div>
//           </div>
//           </div>
//         </div>

//       </motion.div>{" "}
//     </>
//   );
// };

// export default Header;

// import React, { useState, useRef, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { AiOutlineClose } from "react-icons/ai";
// import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { HiMenuAlt4 } from "react-icons/hi";

// const Header = () => {
//   const [menu, setMenu] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const closeDropdown = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setShowDropdown(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", closeDropdown);
//     return () => {
//       document.removeEventListener("mousedown", closeDropdown);
//     };
//   }, []);

//   return (
//     <>
//       <motion.div
//         className=""
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       >
//         <div className="fixed top-0 left-0 w-full  backdrop-blur-2xl bg-[#0f172a62] z-50">
//           <div className="md:flex md:justify-center flex justify-around gap-20 py-4">
//             <div className="bg-grey-900 w-full">
//               <div className="flex justify-between items-center bg-[ff3ce8] p-2">
//                 <div className="md:translate-x-20 bg-green400">
//                   <NavLink className="gap-3 flex" exact to="/">
//                     <img
//                       className="md:h-16 w-16 h-12 md:w-20"
//                       src="images/DiGiHaatbg.jpg"
//                       alt="Logo"
//                     />
//                     <h1 className="mt-3 font-Main md:text-3xl font-bold text-[#3322f2]">
//                       DigiHaat
//                     </h1>
//                   </NavLink>
//                 </div>
//                 <div className="md:flex hidden justify-center md:gap-10 items-center font-bold">
//                   <div className="ml-[130px]">
//                     <nav className="flex justify-end">
//                       <ul className="md:space-x-5 text-[#3322f2] font-medium md:mr-16 flex list-none p-0 font-Main">
//                         <li className="mr-2">
//                           <NavLink
//                             to="/"
//                             activeclassname="active-link"
//                             className="nav-link text-[#3322f2] transition ease-in-out duration-300 ml- text-sm font-medium md:text-xl hover:text-[#dfcfff]"
//                           >
//                             Shop Now
//                           </NavLink>
//                         </li>
//                         <li className="mr-4">
//                           <NavLink
//                             exact
//                             to="/FirstHomepage"
//                             activeclassname="active-link"
//                             className="nav-link text-[#3322f2] transition ease-in-out duration-300 text-sm font-medium md:text-xl hover:text-[#dfcfff]"
//                           >
//                             Featured
//                           </NavLink>
//                         </li>
//                         <li className="ml-4">
//                           <NavLink
//                             to="/About"
//                             activeclassname="active-link"
//                             className="nav-link text-[#3322f2] transition ease-in-out duration-300 text-sm font-medium md:text-xl hover:text-[#dfcfff]"
//                           >
//                             About Us
//                           </NavLink>
//                         </li>
//                       </ul>
//                     </nav>
//                   </div>
//                   <NavLink
//                     className="hover:bg-[] rounded-full text-center z-50 border-2 border-[#3322f2] hover:border-[#dfcfff] hover:text-[#dfcfff] h-[40px] w-[120px] font-bold transition ease-in-out hover:shadow-2xl hover:shadow-blue-950 text-[#3322f2] shadow-[#000000d6] shadow-md flex justify-center items-center duration-300 font-scnd cursor-pointer"
//                     to="/Signin"
//                   >
//                     <div>
//                       <ul>
//                         <li className="p- text-center">
//                           <h1 className="nav-link rounded-full text-center p-1 font-bold md:text-sm">
//                             Sign Up
//                           </h1>
//                         </li>
//                       </ul>
//                     </div>
//                   </NavLink>
//                   <NavLink
//                     className="hover:bg-[] rounded-full text-center hover:shadow-2xl hover:shadow-blue-950 z-50 text-[#3322f2] border-2 border-[#3322f2] hover:border-[#dfcfff] hover:text-[#dfcfff] h-[40px] w-[120px] font-bold transition ease-in-out shadow-[#000000d6] shadow-md flex justify-center items-center bg-[] font-scnd cursor-pointer"
//                     to="/Login"
//                   >
//                     <div>
//                       <ul>
//                         <li className="p- text-center">
//                           <h1 className="nav-link rounded-full text-center p-1 font-bold md:text-sm">
//                             Log In
//                           </h1>
//                         </li>
//                       </ul>
//                     </div>
//                   </NavLink>
//                 </div>
//                 <div className="flex relative">
//                   {!menu && (
//                     <HiMenuAlt4
//                       fontSize={28}
//                       className="bg-[#3322f200] rounded fill-white md:hidden cursor-pointer"
//                       onClick={() => setMenu(true)}
//                     />
//                   )}
//                   {menu && (
//                     <ul
//                       className=" backdrop-blur-2xl bg-[#0f172aac] z-50 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-md md:hidden list-none flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
//                     >
//                       <li className="text-xl w-full my-3">
//                         <AiOutlineClose
//                           className="stroke-2"
//                           onClick={() => setMenu(false)}
//                         />
//                       </li>
//                       <li className="mr-4 font-bold bg-emerald- 00">
//                         <NavLink
//                           exact
//                           to="/"
//                           activeclassname="active-link"
//                           className={({ isActive }) =>
//                             isActive
//                               ? "nav-link text-[#3322f2] font-medium md:text-xl"
//                               : null
//                           }
//                         >
//                           Shop Now
//                         </NavLink>
//                       </li>
//                       <li className="mr-5 bg-emerald-4 mt-4 font-bold">
//                         <NavLink
//                           to="/FirstHomepage"
//                           activeclassname="active-link"
//                           className={({ isActive }) =>
//                             isActive
//                               ? "nav-link text-[#3322f2] font-medium md:text-xl"
//                               : null
//                           }
//                         >
//                           Featured
//                         </NavLink>
//                       </li>
//                       <li className="mr-5 bg-yello-800 mt-4 font-bold">
//                         <NavLink
//                           to="/About"
//                           activeclassname="active-link"
//                           className={({ isActive }) =>
//                             isActive
//                               ? "nav-link text-[#3322f2] font-medium md:text-xl"
//                               : null
//                           }
//                         >
//                           About us
//                         </NavLink>
//                       </li>
//                       <hr className="my-6 bg-red-950 w-full border-2 border-gray-300"></hr>
//                       <div className="flex flex-col">
//                         <NavLink
//                           to="/Signin"
//                           className="relative my-4 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl group"
//                         >
//                           <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
//                             <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
//                           </span>
//                           <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
//                           <span className="relative w-full text-center font-bold text-white transition-colors duration-200 font-scnd ease-in-out group-hover:text-white">
//                             Sign In
//                           </span>
//                         </NavLink>

//                         <NavLink
//                           to="/Login"
//                           onClick={() => setShowModal(true)}
//                           className="relative my-4 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl group"
//                         >
//                           <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
//                             <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
//                           </span>
//                           <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
//                           <span className="relative w-full text-center font-bold text-white transition-colors duration-200 font-scnd ease-in-out group-hover:text-white">
//                             Log In
//                           </span>
//                         </NavLink>
//                       </div>
//                     </ul>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default Header;

// <--- actual Header ----->
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { AiOutlineClose } from "react-icons/ai";
// import { motion } from "framer-motion";
// import { HiMenuAlt4 } from "react-icons/hi";

// const Header = () => {
//   const [menu, setMenu] = useState(false);

//   return (
//     <>
//       <motion.div
//         className=""
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       >
//         <div className="fixed px-16 bg-[#0f172a9c] backdrop-filter backdrop-blur-lg top-0 left-0 w-full z-50">
//           <div className="flex justify-between items-center py-4 px-6">
//             {/* Left side: Logo */}
//             <NavLink className="flex items-center" exact to="/">
//               <img
//                 className="md:h-16 w-16 h-12 md:w-20"
//                 src="images/DiGiHaatbg.jpg"
//                 alt="Logo"
//               />
//               <h1 className="mt-3 font-Main md:text-3xl font-bold text-[#3322f2]">
//                 DigiHaat
//               </h1>
//             </NavLink>

//             {/* Center: Navigation Links (visible only on md screens and up) */}
//             <div className="hidden font-scnd md:flex gap-10">
//               <NavLink
//                 exact
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500 text-lg font-bold"
//                     : "text-white text-lg font-bold"
//                 }
//               >
//                 Shop Now
//               </NavLink>
//               <NavLink
//                 to="/FirstHomepage"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500 text-lg font-bold"
//                     : "text-white text-lg font-bold"
//                 }
//               >
//                 Featured
//               </NavLink>
//               <NavLink
//                 to="/About"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500 text-lg font-bold"
//                     : "text-white text-lg font-bold"
//                 }
//               >
//                 About Us
//               </NavLink>
//             </div>

//             {/* Right side: Sign In / Log In (visible only on md screens and up) */}
//             <div className="hidden font-scnd md:flex gap-4">
//               <NavLink
//                 to="/Signin"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500 text-lg font-bold"
//                     : "text-blue-200 text-lg font-bold"
//                 }
//               >
//                 Sign In
//               </NavLink>
//               <NavLink
//                 to="/Login"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500 text-lg font-bold"
//                     : "text-blue-200 text-lg font-bold"
//                 }
//               >
//                 Log In
//               </NavLink>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden flex">
//               <HiMenuAlt4
//                 fontSize={28}
//                 className="bg-[#3322f200] rounded fill-white cursor-pointer"
//                 onClick={() => setMenu(!menu)}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menu && (
//           <motion.div
//             className="fixed bg-[#0f172a9c] top-0 left-0 w-full h-full backdrop-filter backdrop-blur-lg flex justify-center items-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <div className="bg-[#0f172a] w-full h-full flex flex-col items-center p-5">
//               <AiOutlineClose
//                 fontSize={28}
//                 className="absolute top-5 right-5 cursor-pointer"
//                 onClick={() => setMenu(false)}
//               />
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-500 py-2" : "text-white py-2"
//                 }
//                 onClick={() => setMenu(false)}
//               >
//                 Shop Now
//               </NavLink>
//               <NavLink
//                 to="/FirstHomepage"
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-500 py-2" : "text-white py-2"
//                 }
//                 onClick={() => setMenu(false)}
//               >
//                 Featured
//               </NavLink>
//               <NavLink
//                 to="/About"
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-500 py-2" : "text-white py-2"
//                 }
//                 onClick={() => setMenu(false)}
//               >
//                 About Us
//               </NavLink>
//               <NavLink
//                 to="/Signin"
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-500 py-2" : "text-blue-400 py-2"
//                 }
//                 onClick={() => setMenu(false)}
//               >
//                 Sign In
//               </NavLink>
//               <NavLink
//                 to="/Login"
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-500 py-2" : "text-blue-400 py-2"
//                 }
//                 onClick={() => setMenu(false)}
//               >
//                 Log In
//               </NavLink>
//             </div>
//           </motion.div>
//         )}
//       </motion.div>
//     </>
//   );
// };

// export default Header;

// <------ main header se copy kia hai ------->

// import React, { useState, useRef, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { AiOutlineClose } from "react-icons/ai";
// import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useDispatch } from "react-redux";
// import { HiMenuAlt4 } from "react-icons/hi";
// import { logoutuser } from "../../actions/user";
// import productsData from '../data/productData';

// const Header = () => {
//   const [menu, setMenu] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const dispatch = useDispatch();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const closeDropdown = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setShowDropdown(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", closeDropdown);
//     return () => {
//       document.removeEventListener("mousedown", closeDropdown);
//     };
//   }, []);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [recommendedProducts, setRecommendedProducts] = useState([]);
//   const [searchSuggestions, setSearchSuggestions] = useState([]);

//   const generateRecommendations = () => {
//     const randomRecommendations = [];
//     const numRecommendations = 6;

//     while (randomRecommendations.length < numRecommendations) {
//       const randomIndex = Math.floor(Math.random() * productsData.length);
//       randomRecommendations.push(productsData[randomIndex]);
//     }

//     setRecommendedProducts(randomRecommendations);
//   };

//   const searchProducts = (query) => {
//     return productsData.filter(product =>
//       product.name.toLowerCase().includes(query.toLowerCase()) ||
//       product.description.toLowerCase().includes(query.toLowerCase()) ||
//       product.category.toLowerCase().includes(query.toLowerCase()) ||
//       product.price.toString().includes(query.toLowerCase())
//     );
//   };

//   const generateSearchSuggestions = (query) => {
//     const randomSuggestions = Array.from({ length: 5 }, () => {
//       const randomIndex = Math.floor(Math.random() * productsData.length);
//       return productsData[randomIndex].name;
//     });

//     setSearchSuggestions(randomSuggestions);
//   };

//   useEffect(() => {
//     generateRecommendations();
//     generateSearchSuggestions();
//   }, []);

//   const handleSearchChange = (query) => {
//     setSearchTerm(query);
//     generateSearchSuggestions(query);
//   };

//   const handleCheckboxChange = (category) => {
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(selectedCategories.filter(item => item !== category));
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchTerm(suggestion);
//   };

//   return (
//     <motion.div className=" bg-[#11182700]"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 5 }}
//       exit={{ opacity: 0 }}
//     >
//       <div className="bg-[#11182708] fixed top-0 left-0 right-0 z-50 backdrop-blur-md md:flex md:justify-center flex justify-around gap-20 py-4">

//         <div className="blue-800 w-full">
//           <div className="flex justify-between items-center purple-500 p-2">
//             <div className="md:translate-x-20 green-400">
//               <NavLink className="gap-3 flex" exact to="/">
//                 <img className="h-10 w-16" src="images/DiGiHaatbg.jpg" alt="Logo" />
//                 <h1 className="mt-2 font-Main md:text-xl font-bold text-[#3322f2]"> DigiHaat </h1>
//               </NavLink>
//             </div>
//             <ul className=" md:space-x-5 text-[#3322f2] font-medium  ml-16 flex list-none p-0 font-Main
//                ">
//                 <li className="mr-4">
//                   <NavLink
//                     exact
//                     to="/FirstHomepage"
//                     activeclassname="active-link"
//                     className="nav-link text-[#3322f2] text-sm font-medium md:text-lg hover:text-[#ffffff]"
//                   >
//                     Featured
//                   </NavLink>
//                 </li>
//                 {/* <li className="mr-4">
//                   <NavLink
//                     to="/About"
//                     activeclassname="active-link"
//                     className="nav-link text-[#3322f2] text-sm font-medium md:text-xl hover:text-[black]"
//                   >
//                     About Us
//                   </NavLink> */}
//                 {/* </li> */}
// {/*
//                 <li className="mr-4">
//                   <NavLink
//                     to="/VisionMission"
//                     activeclassname="active-link"
//                     className="nav-link text-[#3322f2] text-sm font-medium md:text-xl hover:text-[black]"
//                   >
//                     Vision &amp; Mission
//                   </NavLink>
//                 </li> */}
//                 {/* <li>
//                   <NavLink
//                     to="/ContactUs"
//                     activeclassname="active-link"
//                     className="nav-link text-[#3322f2] text-sm font-medium md:text-xl hover:text-[black]"
//                   >
//                     Contact Us
//                   </NavLink>
//                 </li> */}
//               </ul>
//             <div className="md:flex w-1/2  teal-200 hidden justify-center md:gap-80 items-center font-bold">
//               <div className=" yellow-300 w-full">
//                 <nav className="flex sky-600 w-full justify-end">
//                   <input
//                     type="text"
//                     placeholder="Search products..."
//                     className="w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500"
//                     value={searchTerm}
//                     onChange={(e) => handleSearchChange(e.target.value)}
//                   />
//                 </nav>

//               </div>

//             </div>
//             <ul className=" md:space-x-5 text-[#3322f2] font-medium  flex list-none p-0 font-Main
//                ">
//                 {/* <li className="mr-4">
//                   <NavLink
//                     exact
//                     to="/FirstHomepage"
//                     activeclassname="active-link"
//                     className="nav-link text-[#3322f2] text-sm font-medium md:text-xl hover:text-[black]"
//                   >
//                     Home
//                   </NavLink>
//                 </li> */}
//                 {/* <li className="mr-4">
//                   <NavLink
//                     to="/"
//                     activeclassname="active-link"
//                     className="nav-link text-[#3322f2] text-sm font-medium md:text-lg hover:text-[#ffffff]"
//                   >
//                     Shop Now
//                   </NavLink>
//                 </li> */}
// {/*
//                 <li className="mr-4">
//                   <NavLink
//                     to="/VisionMission"
//                     activeclassname="active-link"
//                     className="nav-link text-[#3322f2] text-sm font-medium md:text-xl hover:text-[black]"
//                   >
//                     Vision &amp; Mission
//                   </NavLink>
//                 </li> */}
//                 {/* <li>
//                   <NavLink
//                     to="/ContactUs"
//                     activeclassname="active-link"
//                     className="nav-link text-[#3322f2] text-sm font-medium md:text-xl hover:text-[black]"
//                   >
//                     Contact Us
//                   </NavLink>
//                 </li> */}
//               </ul>
//               <NavLink to='/Signin'>
//               <button
//                 // onClick={() => {
//                 //   dispatch(logoutuser());
//                 // }}
//                 className="hover:bg-[]   rounded-full text-center z-50 text-[#3322f2] border-2 border-[#3322f2] hover:text-[white] hover:border-[#ffffff]   h-[40px] w-[100px] font-bold transition ease-in-out shadow-[#000000d6] shadow-md flex justify-center items-center bg-[] font-scnd cursor-pointer"
//               >
//                 <ul>
//                   <li className="p- text-center">
//                     <h1 className="nav-link rounded-full text-center p-1     font-bold md:text-sm"> Sign In </h1>
//                   </li>
//                 </ul>
//               </button>
//               </NavLink>
//               <NavLink to='/Login'>
//               <button
//                 // onClick={() => {
//                 //   dispatch(logoutuser());
//                 // }}
//                 className="hover:bg-[] mr-5 rounded-full text-center z-50 text-[#3322f2] border-2 border-[#3322f2] hover:text-[white] hover:border-[#ffffff]   h-[40px] w-[100px] font-bold transition ease-in-out shadow-[#000000d6] shadow-md flex justify-center items-center bg-[] font-scnd cursor-pointer"
//               >
//                 <ul>
//                   <li className="p- text-center">
//                     <h1 className="nav-link rounded-full text-center p-1     font-bold md:text-sm"> Log in </h1>
//                   </li>
//                 </ul>
//               </button></NavLink>
//                     </div>
//         </div>
//       </div>
//       {searchTerm && (
//         <div className="p-4 mt-36"> {/* Added mt-36 here */}
//           <h2 className="text-lg font-bold mb-2">Search Results for "{searchTerm}":</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {searchProducts(searchTerm).map((product) => (
//               <div key={product.id} className="border border-gray-300 rounded-lg p-4">
//                 <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
//                 <h3 className="text-sm font-semibold">{product.name}</h3>
//                 <p className="text-xs text-gray-600">{product.description}</p>
//                 <p className="text-sm font-bold text-blue-600">${product.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default Header;

// ----> new waala responsive jo h

import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { HiMenuAlt4 } from "react-icons/hi";
import { logoutuser } from "../../actions/user";
import productsData from "../data/productData";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
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

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const generateRecommendations = () => {
    const randomRecommendations = [];
    const numRecommendations = 6;

    while (randomRecommendations.length < numRecommendations) {
      const randomIndex = Math.floor(Math.random() * productsData.length);
      randomRecommendations.push(productsData[randomIndex]);
    }

    setRecommendedProducts(randomRecommendations);
  };

  const searchProducts = (query) => {
    return productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.price.toString().includes(query.toLowerCase())
    );
  };

  const generateSearchSuggestions = (query) => {
    const randomSuggestions = Array.from({ length: 5 }, () => {
      const randomIndex = Math.floor(Math.random() * productsData.length);
      return productsData[randomIndex].name;
    });

    setSearchSuggestions(randomSuggestions);
  };

  useEffect(() => {
    generateRecommendations();
    generateSearchSuggestions();
  }, []);

  const handleSearchChange = (query) => {
    setSearchTerm(query);
    generateSearchSuggestions(query);
  };

  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
  };

  return (
    <motion.div
      className="bg-[#11182700]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 5 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-[#11182708] fixed top-0 left-0 right-0 z-50 backdrop-blur-md md:flex md:justify-center flex justify-around gap-20 py-4">
        <div className="blue-800 w-full flex justify-between items-center">
          <div className="md:translate-x-20 bgreen-400">
            <NavLink className="gap-3 flex" exact to="/">
              <img
                className="h-10 w-16"
                src="images/DiGiHaatbg.jpg"
                alt="Logo"
              />
              <h1 className="mt-2 font-Main md:text-xl font-bold text-[#3322f2]">
                {" "}
                DigiHaat{" "}
              </h1>
            </NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <HiMenuAlt4
              size={30}
              className="text-white cursor-pointer"
              onClick={() => setMenu(true)}
            />
          </div>
          <ul className="hidden md:flex md:items-center md:space-x-6  ml-16 bgyellow-300 text-[#3322f2] font-medium list-none p-0 font-Main">
            <li className=" mt-1">
              <NavLink
                exact
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-sm font-medium transtion ease-in-out md:text-lg hover:text-white"
                    : "text-[#3322f2] text-sm font-medium  transtion ease-in-out md:text-lg hover:text-[#ffffff]"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="ml-  mt-1">
              <NavLink
                exact
                to="/FirstHomepage"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-sm font-medium md:text-lg transtion ease-in-out hover:text-white"
                    : "text-[#3322f2] text-sm font-medium md:text-lg transtion ease-in-out hover:text-[#ffffff]"
                }
              >
                Featured
              </NavLink>
            </li>
            <li className="">
              <NavLink
                exact
                to="/Cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-sm font-medium transtion ease-in-out md:text-lg hover:text-white"
                    : "nav-link text-[#3322f2] text-sm font-medium md:text-lg hover:text-[#ffffff]"
                }
              >
                Your Cart
              </NavLink>
            </li>
            <li className="">
              <NavLink
                exact
                to="/Like"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-sm font-medium transtion ease-in-out md:text-lg hover:text-white"
                    : "nav-link text-[#3322f2] text-sm font-medium md:text-lg hover:text-[#ffffff]"
                }
              >
                Liked Product
              </NavLink>
            </li>
          </ul>
          <div className="hidden md:flex md:w-[500px] teal-200 justify-center md:gap-40 items-center font-bold">
            <div className="yellow-300 w-full">
              <nav className="flex sky-600 w-full justify-end">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
              </nav>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-5">
            <NavLink to="/Signin">
              <button className="hover:bg-[] rounded-full text-center z-50 text-[#3322f2] border-2 border-[#3322f2] hover:text-[white] hover:border-[#ffffff] h-[40px] w-[100px] font-bold transition ease-in-out shadow-[#000000d6] shadow-md flex justify-center items-center bg-[] font-scnd cursor-pointer">
                <ul>
                  <li className="p- text-center">
                    <h1 className="nav-link rounded-full text-center p-1 font-bold md:text-sm">
                      {" "}
                      Sign In{" "}
                    </h1>
                  </li>
                </ul>
              </button>
            </NavLink>
            <NavLink to="/Login">
              <button className="hover:bg-[] mr-5 rounded-full text-center z-50 text-[#3322f2] border-2 border-[#3322f2] hover:text-[white] hover:border-[#ffffff] h-[40px] w-[100px] font-bold transition ease-in-out shadow-[#000000d6] shadow-md flex justify-center items-center bg-[] font-scnd cursor-pointer">
                <ul>
                  <li className="p- text-center">
                    <h1 className="nav-link rounded-full text-center p-1 font-bold md:text-sm">
                      {" "}
                      Log in{" "}
                    </h1>
                  </li>
                </ul>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* {menu && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <AiOutlineClose
            size={30}
            className="text-white cursor-pointer absolute top-4 right-4"
            onClick={() => setMenu(false)}
          />
          <ul className="text-white text-2xl space-y-8">
            <li>
              <NavLink
                exact
                to="/"
                activeclassname="active-link"
                className="nav-link flex items-center gap-2"
                onClick={() => setMenu(false)}
              >
                <FaArrowRight />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/FirstHomepage"
                activeclassname="active-link"
                className="nav-link flex items-center gap-2"
                onClick={() => setMenu(false)}
              >
                <FaArrowRight />
                Featured
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/Cart"
                activeclassname="active-link"
                className="nav-link flex items-center gap-2"
                onClick={() => setMenu(false)}
              >
                <FaArrowRight />
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/Like"
                activeclassname="active-link"
                className="nav-link flex items-center gap-2"
                onClick={() => setMenu(false)}
              >
                <FaArrowRight />
                Like
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Signin"
                className="nav-link flex items-center gap-2"
                onClick={() => setMenu(false)}
              >
                <FaArrowRight />
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Login"
                className="nav-link flex items-center gap-2"
                onClick={() => setMenu(false)}
              >
                <FaArrowRight />
                Log in
              </NavLink>
            </li>
          </ul>
        </div>
      )} */}
            {menu && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-4">
        <AiOutlineClose
          size={30}
          className="text-white cursor-pointer absolute top-4 right-4"
          onClick={() => setMenu(false)}
        />
        <div className="flex flex-col space-y-4">
          {/* Wrapper for horizontal links */}
          <div className="flex font-Main flex-wrap gap-4 justify-center">
            {/* Link Box 1 */}
            <NavLink
              to="/"
              className="bg-[#00000083] text-white border-2 border-blue-500 rounded-xl p-4 w-48 text-center font-semibold transition hover:bg-gray-700"
              activeClassName="active-link"
              onClick={() => setMenu(false)}
            >
              Home
            </NavLink>
            {/* Link Box 2 */}
            <NavLink
              to="/FirstHomepage"
              className="bg-[#00000083] text-white border-2 border-blue-500 rounded-xl p-4 w-48 text-center font-semibold transition hover:bg-gray-700"
              activeClassName="active-link"
              onClick={() => setMenu(false)}
            >
              Featured
            </NavLink>
            {/* Link Box 3 */}
            <NavLink
              to="/Cart"
              className="bg-[#00000083] text-white border-2 border-blue-500 rounded-xl p-4 w-48 text-center font-semibold transition hover:bg-gray-700"
              activeClassName="active-link"
              onClick={() => setMenu(false)}
            >
              Cart
            </NavLink>
            {/* Link Box 4 */}
            <NavLink
              to="/Like"
              className="bg-[#00000083] text-white border-2 border-blue-500 rounded-xl p-4 w-48 text-center font-semibold transition hover:bg-gray-700"
              activeClassName="active-link"
              onClick={() => setMenu(false)}
            >
              Like
            </NavLink>
            <NavLink
              to="/PaymentRecords"
              className="bg-[#00000083] text-white border-2 border-blue-500 rounded-xl p-4 w-48 text-center font-semibold transition hover:bg-gray-700"
              activeClassName="active-link"
              onClick={() => setMenu(false)}
            >
              Payment History
            </NavLink>
          </div>
        </div>
        <NavLink
                to="/Login"
                          className="mt-8 bg-[#3322f2] text-white border-2 border-[#3322f2] hover:bg-transparent hover:text-[#3322f2] hover:border-[#ffffff] rounded-xl py-3 px-9 font-bold transition ease-in-out shadow-md flex items-center justify-center"
                onClick={() => setMenu(false)}
              >
                {/* <FaArrowRight /> */}
                Log in
              </NavLink>
        <NavLink
                to="/Signin"
                          className="mt-8 bg-[#3322f2] text-white border-2 border-[#3322f2] hover:bg-transparent hover:text-[#3322f2] hover:border-[#ffffff] rounded-xl py-3 px-9 font-bold transition ease-in-out shadow-md flex items-center justify-center"
                onClick={() => setMenu(false)}
              >
                {/* <FaArrowRight /> */}
                Sign in
              </NavLink>

      
      </div>
    )}
      {searchTerm && (
        <div className="p-4 mt-36">
          <h2 className="text-lg text-white font-bold mb-2">
            Search Results for "{searchTerm}":
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchProducts(searchTerm).map((product) => (
              <div
                key={product.id}
                className="border border-gray-300 rounded-lg p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover mb-2"
                />
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="text-xs text-gray-600">{product.description}</p>
                <p className="text-sm font-bold text-blue-600">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Header;
