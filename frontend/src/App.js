import { BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { useState } from "react";
import { IntlProvider } from "react-intl";
import translations from "./Translations";

function App() {

  const [locale, setLocale] = useState("EN");
  const [menu, setMenu] = useState("home");

  const messages = translations[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      <BrowserRouter>
        <Navbar onSelectLanguage={setLocale} onSelectMenu={setMenu} menu={menu}/>
        <Routes>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
