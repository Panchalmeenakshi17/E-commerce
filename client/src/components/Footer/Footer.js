import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    

<footer class="bg-[#000000] shadow dark:bg-gray-900 m-">
    <div class="w-full  max-w-screen-xl mx-auto p- md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
        <div className="md:translate-x-20 green-400">
              <NavLink className="gap-3 flex" exact to="/">
                <img className="h-16 w-20" src="images/DiGiHaatbg.jpg" alt="Logo" />
                <h1 className="mt-3 font-Main md:text-3xl font-bold text-[#3322f2]"> DigiHaat </h1>
              </NavLink>
            </div>
            <ul class="flex flex-wrap gap-20 items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0 ">
                <li>
                    <NavLink to = '' class="hover:underline me-4 md:me-6">About</NavLink>
                </li>
                <li>
                    <NavLink to = '' class="hover:underline me-4 md:me-6">Privacy Policy</NavLink>
                </li>
                <li>
                    <NavLink to = '' class="hover:underline me-4 md:me-6">Licensing</NavLink>
                </li>
                <li>
                    <NavLink to = '' class="hover:underline">Contact</NavLink>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto   lg:my-8" />
        <span class="block text-sm text-gray-200 sm:text-center  ">© 2023 DigiHaat™. All Rights Reserved.</span>
    </div>
</footer>


    
    </>
  )
}

export default Footer