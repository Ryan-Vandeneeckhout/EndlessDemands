import { useState } from 'react'; 
import { useSignup } from '../firebase/firebaseHooks/useSignup';
import { useNavigate  } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, signup, success } = useSignup();
  const history = useNavigate();
  const MINUTE_MS = 4000;

  const HandleSubmit = (e) => {
    e.preventDefault();
    signup(email, password); 

  

  }
  
  return (
    
    <div className="loginSignUpFormContainer signUp">
      <h2>Signup</h2>
       {/* Signup Form*/}
      {success && <h3>{success}</h3>}
      <form onSubmit={HandleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>sign up</button>
         {/* Handle Error*/}
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
