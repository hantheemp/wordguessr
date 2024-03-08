import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

// Pages
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import GTL from "./Pages/GTL/GTL.jsx";
import SignIn from "./Pages/SignIn/SignIn.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import ResetPass from "./Pages/ResetPass/ResetPass.jsx";

// Assets
import backgroundImage from "./Components/Assets/Gradient.png";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
      },
    },
  },
});

const backgroundStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
  background: `url(${backgroundImage})`,
  backgroundSize: "cover",
  filter: "blur(8px)",
  opacity: "0.2",
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <div style={backgroundStyles}></div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gtl" element={<GTL />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resetpass" element={<ResetPass />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
