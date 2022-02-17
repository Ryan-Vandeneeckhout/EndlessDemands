import { useLogout } from "../firebase/firebaseHooks/useLogout";
import { useEffect } from "react";
import { useNavigate  } from "react-router-dom";

const LogoutPage = () => {
    
    const { logout } = useLogout();
    const history = useNavigate();
    const MINUTE_MS = 6000;
    
    useEffect(() => {
        logout(); 
      
        const interval = setInterval(() => {
            history('/');
            console.log('Logs every minute');
          }, MINUTE_MS);


        return () => clearInterval(interval);
    }, [])
    
    

    return (
        
        <section className="LogoutPageSection">

            <div className="loginSignUpFormContainer loggedOutPage">
                <h1>Logging Out</h1>
                <h2>Redirecting User to HomePage When Done </h2>
            </div>
        </section>
    ) 
}
export default LogoutPage; 