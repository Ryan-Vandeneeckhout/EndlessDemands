import './App.css';
import './Setup.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react'; 
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ProductPage from './pages/APIStorePages/ProductPage.js';
import SephoaraPage from './pages/APIStorePages/SephoaraPage.js';
import LogoutPage from './pages/LogoutPage';
import ThemeChanger from './components/NavBar/ThemeChanger.js'; 
import NavBarUpperSite from './components/NavBar/NavBarUpperSite.js'; 
import NavMobile from "./components/NavBar/MobileNav.js";
import BottomSiteSectionContainer from './components/BottomOfSite/BottomSiteSection';
import PlayPauseMusicButton from './components/globalButtons/PlayPauseMusicButton.jsx';
import ScrollUpButton from './components/globalButtons/ScrollUpButton';
import Signup from './pages/Signup.jsx';
import Login from './firebase/Login';
import HandleNav from './HandleNav';
import { useAuthContext } from './firebase/firebaseHooks/useAuthContext';
import AccountSettingsMenu from './components/NavBar/AccountSettingsMenu';
import ShoppingCart from './firebase/ShoppingCart';

function App() {
  const { user, authIsReady } = useAuthContext()
  const [showbox, setShowBox] = useState(false);
  const [mobileNav, setMobileNav] = useState(false); 
  const [accountSettings, setAccountSettings] = useState(false); 

  const ChangeStateFunction = () => {
    setShowBox(showbox => !showbox);
    setMobileNav(false); 
    setAccountSettings(false);
  }

  const MobileNavFunction = () => { 
    setMobileNav(mobileNav => !mobileNav);
    setShowBox(false); 
    setAccountSettings(false);
  }

  const AccountSettings = () => {
    setAccountSettings(accountSettings => !accountSettings);
    setMobileNav(false); 
    setShowBox(false);
  }


  return (

    <>
      {authIsReady && (
      <BrowserRouter>
          <NavBarUpperSite AccountSettings={AccountSettings} mobileNav={mobileNav} MobileNavFunction={MobileNavFunction} ChangeStateFunction={ChangeStateFunction} showbox={showbox} />
          <ThemeChanger showbox={showbox} />
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
          <PlayPauseMusicButton />
          <ScrollUpButton />
          <BottomSiteSectionContainer />
      </BrowserRouter>
      
      )}
      </>
  );
}

export default App;
