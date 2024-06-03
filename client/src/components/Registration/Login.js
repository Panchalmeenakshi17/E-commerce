// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { volunteerRegistration } from "../../actions/user";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginuser} from "../../actions/user";
import { NavLink } from "react-router-dom";

const Login = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // const [DonationAmount, setDonationAmount] = useState("");
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    // Email validation using a regular expression
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(Email)) {
      toast.warn("Please enter a valid email address.", {
        position: "top-center",
      });
      return;
    }

    if (Email === "" || Password === "") {
      toast.warn("Please fill all the fields");
    } else {
      const user = { Email, Password };
      console.log(user);
      dispatch(loginuser(user)); //dispatch yaha pe store karane me help kr rha h
      setEmail(""); //dispactcher ka kam hota hai process ko initial se running state mai leke jaana
      setPassword("");

      // toast.success("Logged In successfully");
      // navigate("/");
    }
  };

   return (
    <>
      <ToastContainer />
      {/* <div className="relative  "> */}
        {/* <img
          src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full md:h-[300px]"
          alt="not found"
        /> */}
        {/* <video
          src="videos/ww.mp4"
          autoPlay={true}
          loop
          muted
          className="  h-[500px] w-full object-cover opacity-100 transition-opacity duration-500 ease-in-out "
        /> */}

       {/*  <div className="  p-20  w-full md:p-0   absolute   transform   text-center">
          <h1 className=" font-main   text-xl text-center text-[#f48d5e] ">
            | Volunteer Registration
          </h1> 
          
        </div>*/}
      {/* </div> */}
      <div className=" font-Main md:p-20 py-40 bg-gray-900 md:h-screen">
        <div className="   md:w-full flex justify-center  w-full h-full ">
          <div className=" w-full flex justify-center md:">
            <div className=" bg-gray-900 w-full md:mt-[30px]  md:w-full rounded-xl md:translate-x-[10px] md:rounded-2xl bg-gray-900 shdow-[#5c60a1]   rounded-lgdark:border  dark:border-[#435ef4]">
            <div className="flex flex-col w-full bg-ye low-600 md:flex-row">
                {/* Left Side Image */}
                <div className="md:w-full bg-yellow-00 w-full md:block hidden">
                  <img
                    src="images/d.png"
                    alt="Signup"
                    className="h-full w-full object-cover rounded-l-lg"
                  />
                </div>

              <div className="md:p-6 bg-gray-900 w-full space-y-4 md:space-y-6 sm:p-8">
                <h2 className="text-[#dcdcdc] text-center mt-7 text-3xl mb-1 md:p-0 px-6 translate-x-[0px] font-semibold md:text-2xl font-main title-font">
            Log In to access all the Products
          </h2>
                <form className="  space-y-4 md:space-y-6">
                  <div className="w-full md:w-full p-3">
                    <label className="block">
                      <input
                        className="p-4 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#f45c43]  transition duration-200"
                        id="signUpInput1-1"
                        type="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email*"
                      />
                    </label>
                  </div>
                  {/* <div className="w-full md:w-full p-3">
                    <label className="block">
                      <input
                        className="p-4 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#f45c43] transition duration-200"
                        id="signUpInput1-1"
                        type="text"
                        value={VolunteerBloodGroup}
                        onChange={(e) => setVolunteerBloodGroup(e.target.value.toUpperCase())}
                        required
                        placeholder="Volunteer Blood Group*"
                      />
                    </label>
                  </div> */}
                  {/* <div className="w-full md:w-full p-3">
                    <label className="block">
                      <input
                        className="p-4 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#f45c43] transition duration-200"
                        id="signUpInput1-1"
                        type="number"
                        value={VolunteerPhone}
                        onChange={(e) => setVolunteerPhone(e.target.value)}
                        required
                        placeholder="Volunteer Phone Number*"
                      />
                    </label>
                  </div> */}

                  <div className="w-full md:w-full p-3">
                    <label className="block">
                      <input
                        className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-[#f45c43] transition duration-200"
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
                      // onClick={submitVolunteerRegistration}
                      onClick={submitHandler}
                      className="translat w-full transform delay-50 bg-[#328cc141] ease-in inline-block hover:shadow-blue-500 hover:shadow-2xl rounded-full bg-primary border-2 md:hover:bg-[#73a9c8fe] px-7 pb-2.5 pt-3 text-sm font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 hover:bg-primary-600  focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(66, 73, 85, 0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Sign In
                    </button>
                  </div>
                  <h1 className="text-[#ffffff] text-center font-medium  ">
                    Don't have an account?{" "}
                    <NavLink to="/Signin" className="underline">
                      Sign Up
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

export default Login;
