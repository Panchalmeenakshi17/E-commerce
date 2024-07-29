// // ---->
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import BeatLoader from "react-spinners/BeatLoader";
// import Header from "./components/Header/Header";
// import MainHeader from "./components/Header/MainHeader";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import Login from "./components/Registration/Login";
// import Signin from "./components/Registration/Signin";
// import NotFound from "./components/NotFound/NotFound";
// import Homepage from "./components/Homepage/Homepage";
// import Footer from "./components/Footer/Footer";
// import FirstHomepage from "./components/FirstHomepage/FirstHomepage";
// import About from "./components/About/About";
// import BeforeLogin from "./components/Homepage/BeforeLogin";
// import { CartProvider } from "./components/CartContext";
// import Cart from "./components/Cart";
// import Like from "./components/Like";

// const App = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(false);

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

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//           }}
//         >
//           <BeatLoader
//             color={"#007fee"}
//             loading={loading}
//             size={15}
//             aria-label="Loading Spinner"
//             data-testid="loader"
//           />
//         </div>
//       ) : (
//         <CartProvider>
//           <Router>
//             {currentUser ? (
//               <MainHeader currentUser={currentUser} onLogout={handleLogout} />
//             ) : (
//               <Header />
//             )}
//             <div className="bg-color">
//               <RoutesWithTitles
//                 currentUser={currentUser}
//                 onLogin={handleLogin}
//               />
//             </div>
//             <Footer />
//           </Router>
//         </CartProvider>
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
//     document.title = `${pageName} | DigiHaat`;
//   };

//   return (
//     <Routes>
//       {currentUser ? (
//         <>
//           <Route exact path="/" element={<Homepage />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/FirstHomepage" element={<FirstHomepage />} />
//           <Route exact path="/Cart" element={<Cart />} />
//           <Route exact path="/Like" element={<Like />} />
//         </>
//       ) : (
//         <>
//           <Route path="/Login" element={<Login onLogin={onLogin} />} />
//           <Route path="/Signin" element={<Signin />} />
//           <Route path="/FirstHomepage" element={<FirstHomepage />} />
//           <Route exact path="/" element={<BeforeLogin />} />
//           <Route exact path="/Cart" element={<Cart />} />
//           <Route exact path="/Like" element={<Like />} />
//           <Route path="/About" element={<About />} />
//           <Route path="*" element={<NotFound />} />
//         </>
//       )}
//     </Routes>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import "./App.css";
import BeatLoader from "react-spinners/BeatLoader";
import Header from "./components/Header/Header";
import MainHeader from "./components/Header/MainHeader";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./components/Registration/Login";
import Signin from "./components/Registration/Signin";
import NotFound from "./components/NotFound/NotFound";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import FirstHomepage from "./components/FirstHomepage/FirstHomepage";
import About from "./components/About/About";
import BeforeLogin from "./components/Homepage/BeforeLogin";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart";
import Like from "./components/Like";
import PaymentPage from "./components/PaymentPage";
import PaymentRecords from "./components/PaymentRecords";

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <BeatLoader
            color={"#007fee"}
            loading={loading}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <CartProvider>
          <Router>
            {currentUser ? (
              <MainHeader currentUser={currentUser} onLogout={handleLogout} />
            ) : (
              <Header />
            )}
            <div className="bg-color">
              <RoutesWithTitles currentUser={currentUser} onLogin={handleLogin} />
            </div>
            <Footer />
          </Router>
        </CartProvider>
      )}
    </>
  );
};

const RoutesWithTitles = ({ currentUser, onLogin }) => {
  const location = useLocation(); // Make sure this is imported from 'react-router-dom'

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
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/FirstHomepage" element={<FirstHomepage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Like" element={<Like />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/PaymentRecords" element={<PaymentRecords />} />
          
        </>
      ) : (
        <>
          <Route path="/Login" element={<Login onLogin={onLogin} />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/FirstHomepage" element={<FirstHomepage />} />
          <Route path="/" element={<BeforeLogin />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Like" element={<Like />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/PaymentRecords" element={<PaymentRecords />} />
        </>
      )}
    </Routes>
  );
};

export default App;
