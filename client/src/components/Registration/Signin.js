import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Signinuser } from "../../actions/user";
import { NavLink } from "react-router-dom";

const Signin = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submitVolunteerRegistration = async (e) => {
    e.preventDefault();

    // Email validation using a regular expression
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(Email)) {
      toast.warn("Please enter a valid email address.", {
        position: "top-center",
      });
      return;
    }

    if (Name.trim() === "" || Email.trim() === "" || Password.trim() === "") {
      toast.warn("Please fill out all required fields.", {
        position: "top-center",
      });
    } else {
      const userSignin = {
        Name,
        Email,
        Password,
      };
      dispatch(Signinuser(userSignin));
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <ToastContainer />
       
      <div className= "font-Main md:p-20 md:py-16 py-20 bg-gray-900 md:w-full">
        <div className="mb md:w-full md:flex justify-center   w-full h-full">
          <div className="w-full flex justify-center">
            <div className="w-full md:w-full   md:rounded-2xl bg-gray-900 shadow-[#5c5fa100] shadow-2xl rounded-lg dark:border dark:border-[#435ef4]">
              <div className="flex flex-col w-full bg-ye low-600 md:flex-row">
                {/* Left Side Image */}
                <div className="md:w-full bg-yellow-00 w-full md:block hidden">
                  <img
                    src="images/s.png"
                    alt="Signup"
                    className="h-full w-full object-cover rounded-l-lg"
                  />
                </div>

                {/* Right Side Form */}
                <div className="md:w-1/2 w-full mt-7 p-6 space-y-4 md:space-y-6 sm:p-8">
                <h2 className="text-[#fefefe] text-center mt-7 text-3xl mb-1 md:p-0 px-6 translate-x-[0px] font-semibold md:text-2xl font-main title-font">
            Create a free account if you're a new user
          </h2>
                  <form className="space-y-4 ">
                    <div className="w-full md:w-full p-3">
                      <label className="block">
                        <input
                          className="p-3 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640] placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#435ef4] transition duration-200"
                          id="signUpInput1-1"
                          type="text"
                          value={Name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          placeholder="Name*"
                        />
                      </label>
                    </div>
                    <div className="w-full md:w-full p-3">
                      <label className="block">
                        <input
                          className="p-3 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640] placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#435ef4] transition duration-200"
                          id="signUpInput1-1"
                          type="email"
                          value={Email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="Email*"
                        />
                      </label>
                    </div>
                    <div className="w-full md:w-full p-3">
                      <label className="block">
                        <input
                          className="p-3 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640] placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#435ef4] transition duration-200"
                          id="signUpInput1-2"
                          type="text"
                          value={Password}
                          required
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password*"
                        />
                      </label>
                    </div>
                    <div className="w-full flex justify-center p-3">
                      <button
                        type="button"
                        onClick={submitVolunteerRegistration}
                        className="w-full transform delay-50 bg-[#328cc141] ease-in inline-block hover:shadow-blue-500 hover:shadow-2xl rounded-full bg-primary border-2 md:hover:bg-[#73a9c8fe] px-7 pb-2.5 pt-3 text-sm font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 hover:bg-primary-600 focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Sign Up
                      </button>
                    </div>
                    <h1 className="text-[#ffffff] text-center font-medium">
                      Already have an account?{" "}
                      <NavLink to="/Login" className="underline">
                        Sign In
                      </NavLink>
                    </h1>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
