import { useState } from 'react';
import { useLogin } from './firebaseHooks/useLogin.js';

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
        <h2>Login</h2>
        {login && <h3>{success}</h3>}
      <form className="loginSignUpForm" onSubmit={handleSubmit}>
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
        <button>log in</button>
          {error && <p>{error}</p>}
      </form>
    </div>

    </section>
    
  )
}
