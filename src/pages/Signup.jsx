import { useState } from 'react'; 
import { useSignup } from '../firebase/firebaseHooks/useSignup';
import { Link  } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, signup, success } = useSignup();

  const HandleSubmit = (e) => {
    e.preventDefault();
    signup(email, password); 
  }
  
  return (
    <section className="loginSignUpFormSection">
      {/*Login Page JSX*/}
      <div className="loginSignUpFormContainer signUp">
        <form className="loginSignUpForm" onSubmit={HandleSubmit}>
          <h2>Sign Up</h2>
          {success && <h3>{success}</h3>}
          <input
             name="email" id="email" autoComplete="on"
            aria-label="email input"
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <span>password:</span>
          <input
             name="password" id="password" autoComplete="on"
            aria-label="password input"
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="buttonListFormLogin">
            <button>Sign Up</button>
            <Link to="/login">
              <button>Already Have An Account?</button>
            </Link>
          </div>
          {error && <p>{error}</p>}
        </form>
      </div>
    </section>
  )
}
