// Important Note: This is the main file of the frontend.
// It is the first file that is executed when the frontend is started.
// When committing changes to this file, make sure to add a comment to the commit explaining the changes made.
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar/Navbar.jsx";

// Pages
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import GTL from "./Pages/GTL/GTL.jsx";
import SignIn from "./Pages/SignIn/SignIn.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import ResetPass from "./Pages/ResetPass/ResetPass.jsx";

// Theme for ChakraProvider should be added.

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gtl" element={<GTL />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpass" element={<ResetPass />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
