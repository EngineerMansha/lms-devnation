import React from "react";
import "./App.css";
// import Footer from "./components/Footer/Footer";
// import Main from "./components/Main/Main";
// import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Singup from "./components/Login/Singup";
import Reset from "./components/Login/Reset";


// import Footer from "./components/Footer/Footer";
// import Main from "./components/Main/Main";
// import Navbar from "./components/Navbar/Navbar";
// import ProfilePage from "./components/ProfilePage/ProfilePage";
const App = () => {
  return (
<>
      <div className="">
      {/* <Navbar />
    
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="profile" element={ <ProfilePage />} />
      </Routes> */}
    
     
        <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/Reset" element={<Reset />} />
    
        
        </Routes>
        {/* <Footer /> */}
        </div>
    </>
  );
};
export default App;
