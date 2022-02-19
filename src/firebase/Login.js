import { useState } from 'react';
import { useLogin } from './firebaseHooks/useLogin.js';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, login, success } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password); 
  }
  
  return (
    <section className='loginSignUpFormSection'>
    <div className='loginSignUpFormContainer login'>
        <form className="loginSignUpForm" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {login && <h3>{success}</h3>}
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className='buttonListFormLogin'>
            <button>Log In</button>
            <Link to="/signup"><button>Create a New Account</button></Link>
          </div>
          {error && <p>{error}</p>}
      </form>
    </div>

    </section>
    
  )
}