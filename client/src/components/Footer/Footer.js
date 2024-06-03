// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <>
    

// <footer class="bg-[#000000] shadow dark:bg-gray-900 m-">
//     <div class="w-full  max-w-screen-xl mx-auto p- md:py-8">
//         <div class="sm:flex sm:items-center sm:justify-between">
//         <div className="md:translate-x-20 green-400">
//               <NavLink className="gap-3 flex" exact to="/">
//                 <img className="h-16 w-20" src="images/DiGiHaatbg.jpg" alt="Logo" />
//                 <h1 className="mt-3 font-Main md:text-3xl font-bold text-[#3322f2]"> DigiHaat </h1>
//               </NavLink>
//             </div>
//             <ul class="flex flex-wrap gap-20 items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0 ">
//                 <li>
//                     <NavLink to = '' class="hover:underline me-4 md:me-6">About</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to = '' class="hover:underline me-4 md:me-6">Privacy Policy</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to = '' class="hover:underline me-4 md:me-6">Licensing</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to = '' class="hover:underline">Contact</NavLink>
//                 </li>
//             </ul>
//         </div>
//         <hr class="my-6 border-gray-200 sm:mx-auto   lg:my-8" />
//         <span class="block text-sm text-gray-200 sm:text-center  ">© 2023 DigiHaat™. All Rights Reserved.</span>
//     </div>
// </footer>


    
//     </>
//   )
// }

// export default Footer
import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-[#000000] shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto px-4 py-6 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-0">
              <NavLink className="flex items-center gap-3" exact to="/">
                <img className="h-16 w-20" src="images/DiGiHaatbg.jpg" alt="Logo" />
                <h1 className="mt-3 sm:mt-0 font-Main text-2xl md:text-3xl font-bold text-[#3322f2]">DigiHaat</h1>
              </NavLink>
            </div>
            <ul className="flex flex-wrap gap-4 sm:gap-6 items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
              <li>
                <NavLink to="/About" className="hover:underline">About</NavLink>
              </li>
              <li>
                <NavLink to="/FirstHomepage" className="hover:underline">Featured</NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:underline">Shop Now</NavLink>
              </li>
              <li>
                <NavLink to="/Signin" className="hover:underline">Sign In</NavLink>
              </li>
              <li>
                <NavLink to="/Login" className="hover:underline">Log In</NavLink>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-200 sm:text-center">© {currentYear} DigiHaat™. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  )
}

export default Footer
