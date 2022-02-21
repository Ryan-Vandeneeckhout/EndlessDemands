//Default CSS and Global CSS // 
import './App.scss';
import './Setup.scss'; 
//React Depends Imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
//Pages Imports// 
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.js';
import ProductPage from './pages/APIStorePages/ProductPage.js';
import SephoaraPage from './pages/APIStorePages/SephoaraPage.js';
import LogoutPage from './pages/LogoutPage';
import Signup from './pages/Signup.jsx';
//Nav Imports// 
import HandleNav from './components/NavBar/HandleNav';
import ThemeChanger from './components/NavBar/ThemeChanger.js'; 
import NavBarUpperSite from './components/NavBar/NavBarUpperSite.js'; 
import NavMobile from "./components/NavBar/MobileNav.js";
//Bottom Contact Form Import//
import BottomSiteSectionContainer from './components/BottomOfSite/BottomSiteSection';
//Global Buttons for User Scroll up and Play Pause Music// 
import PlayPauseMusicButton from './components/globalButtons/PlayPauseMusicButton.jsx';
import ScrollUpButton from './components/globalButtons/ScrollUpButton';
//Firebase - Hooks Imports//  
import Login from './firebase/Login';
import { useAuthContext } from './firebase/firebaseHooks/useAuthContext';
import AccountSettingsMenu from './components/NavBar/AccountSettingsMenu';
import ShoppingCart from './firebase/ShoppingCart';

function App() {
  const { user, authIsReady } = useAuthContext();
  //ShowMusic Menu SetStates// 
  const [showbox, setShowBox] = useState(false);
  // Moblie Nav Set States// 
  const [mobileNav, setMobileNav] = useState(false); 
  const [accountSettings, setAccountSettings] = useState(false); 
  //Music Menu Function UseStates//
  const ChangeStateFunction = () => {
    setShowBox(showbox => !showbox);
    setMobileNav(false); 
    setAccountSettings(false);
  }
  //Mobile Nav Function UseStates Setter// 
  const MobileNavFunction = () => { 
    setMobileNav(mobileNav => !mobileNav);
    setShowBox(false); 
    setAccountSettings(false);
  }
  //Account Settings Function UseStates Setter// 
  const AccountSettings = () => {
    setAccountSettings(accountSettings => !accountSettings);
    setMobileNav(false); 
    setShowBox(false);
  }


  return (

    <>
      {/*FireBase Check if User Sign in Wrap for APP*/}
      {authIsReady && (
        <BrowserRouter>
          {/*Navigation for APP*/}
          <NavBarUpperSite AccountSettings={AccountSettings} accountSettings={accountSettings} mobileNav={mobileNav} MobileNavFunction={MobileNavFunction} ChangeStateFunction={ChangeStateFunction} showbox={showbox} />
          <ThemeChanger ChangeStateFunction={ChangeStateFunction} showbox={showbox} />
          <AccountSettingsMenu AccountSettings={AccountSettings} accountSettings={accountSettings}/>
        <NavMobile mobileNav={mobileNav} MobileNavFunction={MobileNavFunction}/>
        <Routes>
          <Route extact path='/' element={<HomePage />} />
          <Route extact path='/logout' element={<LogoutPage />} />
          <Route exact path='/storecatalogue' element={<HandleNav/>}/>
          <Route extact path='/aboutpage' element={<AboutPage />} />
          <Route path="/:itemid" element={<ProductPage />} />
          <Route path="api/sep/:productscurrentSkuskuId/:productId" element={<SephoaraPage />} />
          <Route extact path="/login" element={<Login/>} /> 
          <Route extact path="/signUp" element={<Signup />} />
            {user && <Route extact path="/shoppingcart" element={<ShoppingCart />} />}
          </Routes>
          {/*Global Buttons*/}
          <PlayPauseMusicButton />
          <ScrollUpButton />
          {/*Bottom Contact Form Component*/}
          <BottomSiteSectionContainer />
      </BrowserRouter>
      
      )}
      </>
  );
}

export default App;
