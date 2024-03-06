import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Footer from './Components/Footer/Footer';
import { useState } from "react";
import { IntlProvider } from "react-intl";
import translations from "./Translations";
import ForgotPass from './Pages/ForgotPass/ForgotPass';
import ResetPass from './Pages/ResetPass/ResetPass';

function App() {

  const [locale, setLocale] = useState('EN');

  const [menu, setMenu] = useState("home");

  return (
    <h1>App</h1>
  );
}

export default App;
