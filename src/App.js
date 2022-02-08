import './App.css';
import './Setup.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react'; 
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ProductPage from './pages/APIStorePages/ProductPage.js';
import SephoaraPage from './pages/APIStorePages/SephoaraPage.js';
import UserStoreInputCallAPIAndStoreItemCointainer from './components/mainStore/UserStoreInputCallAPIAndStoreItemCointainer.js';
import ThemeChanger from './components/NavBar/ThemeChanger.js'; 
import NavBarUpperSite from './components/NavBar/NavBarUpperSite.js'; 
import NavMobile from "./components/NavBar/MobileNav.js";

function App() {
  
  const [showbox, setShowBox] = useState(false);
  const [mobileNav, setMobileNav] = useState(false); 

  const ChangeStateFunction = () => {
    setShowBox(showbox => !showbox);
    setMobileNav(false); 
  }

  const MobileNavFunction = () => { 
    setMobileNav(mobileNav => !mobileNav);
    setShowBox(false); 
  }

  return (

      <BrowserRouter>
      <NavBarUpperSite mobileNav={mobileNav} MobileNavFunction={MobileNavFunction} ChangeStateFunction={ChangeStateFunction} showbox={showbox} />
        <ThemeChanger showbox={showbox} />
        <NavMobile mobileNav={mobileNav} MobileNavFunction={MobileNavFunction}/>
        <Routes>
        <Route extact path='/' element={<HomePage />}/>
          <Route extact path='/storecatalogue' element={<UserStoreInputCallAPIAndStoreItemCointainer />} />
          <Route extact path='/aboutpage' element={<AboutPage />} />
          <Route path="/:itemid" element={<ProductPage />} />
          <Route path="api/sep/:productscurrentSkuskuId/:productId" element={<SephoaraPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
