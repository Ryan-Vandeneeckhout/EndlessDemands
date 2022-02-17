import { useState } from 'react'; 
import { auth } from '../config'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {

    const [error, setError] = useState(null); 
    const { dispatch } = useAuthContext(); 
    const [success, setSuccess] = useState(null); 

    const signup = (email, password) => {
        setError(null)
        createUserWithEmailAndPassword(auth, email, password) 
        .then((res) => {
            dispatch({ type: 'LOGIN', payload: res.user })
            setSuccess("Sign Up Successful")
        })
            .catch((err) => {
            setError(err.message)
        })
        
    }

    return { error, signup, success }

}