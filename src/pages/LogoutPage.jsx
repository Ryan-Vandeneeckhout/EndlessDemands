import { useLogout } from "../firebase/firebaseHooks/useLogout";
import { useEffect } from "react";
import { useNavigate  } from "react-router-dom";

const LogoutPage = () => {
    
    const { logout } = useLogout();
    const history = useNavigate();
    const MINUTE_MS = 4000;
    
    useEffect(() => {
        logout(); 
      
        const interval = setInterval(() => {
            history('/');
          }, MINUTE_MS);


        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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