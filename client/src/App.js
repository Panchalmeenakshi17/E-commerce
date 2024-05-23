// import React, { useEffect } from "react";
// import "./App.css";
// import Header from "./components/Header/Header";
// // import Footer from "./components/Footer/Footer";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// // import Homepage from "./components/Homepage/Homepage";
// // import Gallery from "./components/Gallery/Gallery";
// // import AboutUs from "./components/About/AboutUs";
// // import ContactUs from "./components/Contact/ContactUs";
// // import Notification from "./components/Notification/Notification";
// // import VisionMission from "./components/VisionMission/VisionMission";
// // import Headline from "./components/Header/Headline";
// import Donate from "./components/Registration/Login";
// import VolunteerRegistration from "./components/Registration/Signin";
// // import CoreTeam from "./components/Team/CoreTeam";
// // import CoreProfileCard from "./components/Team/CoreProfileCard";
// import NotFound from "./components/NotFound/NotFound";
// import Login from "./components/Registration/Login";
// import Signin from "./components/Registration/Signin";

// const App = () => {
//   return (
//     <>
//       <Router>
//         {/* <Headline /> */}
//         <Header />
//       {/* <Route  path="/VolunteerRegistration" element={<VolunteerRegistration />} /> */}
// {/* <VolunteerRegistration/> */}
// {/* <Donate/> */}
//         {/* <Notification /> */}
//         <RoutesWithTitles />
//         {/* <Footer /> */}
         
//       </Router>

//     </>
//   );
// };

// const RoutesWithTitles = () => {
//   const location = useLocation();

//   useEffect(() => {
//     updateTitle(getPageName(location.pathname));
//   }, [location]);

//   const getPageName = (pathname) => {
//     // Extract the page name from the pathname
//     const pathParts = pathname.split("/");
//     const pageName = pathParts[pathParts.length - 1];
//     return pageName;
//   };

//   const updateTitle = (pageName) => {
//     document.title = `${pageName} | Unity of Youth`;
//   };

//   return (
//     <Routes>
//       {/* <Route  path="/" element={<Homepage />} />
//       <Route  path="/AboutUs" element={<AboutUs />} />
//       <Route  path="/ContactUs" element={<ContactUs />} />
//       <Route  path="/VisionMission" element={<VisionMission />} /> */}
//       <Route  path="/Login" element={<Login />} />
//       <Route  path="/Signin" element={<Signin />} />
//       {/* <Route  path="/CoreTeam" element={<CoreTeam />} />
//       <Route  path="/CoreProfileCard" element={<CoreProfileCard />} /> */}
//         <Route path="*" element={<NotFound/>} />
//     </Routes>
//   );
// };

// export default App;


// import React, { useState, useEffect } from "react";
// import "./App.css";
// import ClockLoader from "react-spinners/ClockLoader";
// import Header from "./components/Header/Header";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Login from "./components/Registration/Login";
// import Signin from "./components/Registration/Signin";
// import NotFound from "./components/NotFound/NotFound";
// import Homepage from "./components/Homepage/Homepage"; // Ensure you import the Homepage component

// const App = () => {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("currentUser");
//     if (storedUser) {
//       setCurrentUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleLogin = (user) => {
//     setCurrentUser(user);
//     localStorage.setItem("currentUser", JSON.stringify(user));
//   };

//   const handleLogout = () => {
//     setCurrentUser(null);
//     localStorage.removeItem("currentUser");
//   };
//   const [Loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   return (
//     <>
//       {Loading ? (
//         <div id="toTop" className="App">
//           <ClockLoader
//             color={"#007fee"}
//             loading={Loading}
//             className=" w-[300px] top-[240px] left-[630px] h- "
//             size={300}
//             aria-label="Loading Spinner"
//             data-testid="loader"
//           />
//         </div>
//       ) : (
//         <Router>
//           <Header currentUser={currentUser} onLogout={handleLogout} />
//           <RoutesWithTitles currentUser={currentUser} onLogin={handleLogin} />
//         </Router>
//       )}
//     </>
//   );
// };

// const RoutesWithTitles = ({ currentUser, onLogin }) => {
//   const location = useLocation();

//   useEffect(() => {
//     updateTitle(getPageName(location.pathname));
//   }, [location]);

//   const getPageName = (pathname) => {
//     const pathParts = pathname.split("/");
//     const pageName = pathParts[pathParts.length - 1];
//     return pageName || "Home";
//   };

//   const updateTitle = (pageName) => {
//     document.title = `${pageName} | Unity of Youth`;
//   };

//   return (
//     <>
    
//     <Routes>
//       {currentUser ? (
//         <>
//           <Route exact path="/" element={<Homepage />} />
//           {/* Add other protected routes here */}
//         </>
//       ) : (
//         <>
//           <Route path="/Login" element={<Login onLogin={onLogin} />} />
//           <Route path="/Signin" element={<Signin />} />
//           <Route path="*" element={<NotFound />} />
//         </>
//       )}
//     </Routes>
//     </>
//   );
// };

// export default App;


import React, { useState, useEffect } from "react";
import "./App.css";
import ClockLoader from "react-spinners/ClockLoader";
import Header from "./components/Header/Header";
import MainHeader from "./components/Header/MainHeader"; // Ensure you import the MainHeader component
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Registration/Login";
import Signin from "./components/Registration/Signin";
import NotFound from "./components/NotFound/NotFound";
import Homepage from "./components/Homepage/Homepage"; // Ensure you import the Homepage component
import Footer from "./components/Footer/Footer";
import FirstHomepage from "./components/FirstHomepage/FirstHomepage";
import About from "./components/About/About";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div id="toTop" className="App">
          <ClockLoader
            color={"#007fee"}
            loading={loading}
            className="w-[300px] top-[240px] left-[630px] h-"
            size={300}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Router>
          {currentUser ? (
            <MainHeader currentUser={currentUser} onLogout={handleLogout} />
          ) : (
            <Header />
          )}
          <RoutesWithTitles currentUser={currentUser} onLogin={handleLogin} />
          <Footer/>
        </Router>
      )}
    </>
  );
};

const RoutesWithTitles = ({ currentUser, onLogin }) => {
  const location = useLocation();

  useEffect(() => {
    updateTitle(getPageName(location.pathname));
  }, [location]);

  const getPageName = (pathname) => {
    const pathParts = pathname.split("/");
    const pageName = pathParts[pathParts.length - 1];
    return pageName || "Home";
  };

  const updateTitle = (pageName) => {
    document.title = `${pageName} | DigiHaat`;
  };

  return (
    <Routes>
      {currentUser ? (
        <>
          <Route exact path="/" element={<Homepage />} />
          {/* Add other protected routes here */}
        </>
      ) : (
        <>
          <Route path="/Login" element={<Login onLogin={onLogin} />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/FirstHomepage" element={<FirstHomepage />} />
          <Route exact path="/" element={<Homepage />} />

          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </>
      )}
    </Routes>
  );
};

export default App;
