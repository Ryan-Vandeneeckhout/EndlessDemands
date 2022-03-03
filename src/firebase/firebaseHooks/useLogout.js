import { useAuthContext } from './useAuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../config';
import { signOut } from 'firebase/auth'; 
    
export const useLogout = () => {
//LogOutPage Firebase Logic 
    const [success, setSuccess] = useState(null); 
    const [error, setError] = useState(null); 
    
    const { dispatch } = useAuthContext(); 

    const logout = () => {
        
        signOut(auth)
            .then(() => {
                dispatch({ type: 'LOGOUT' });
                console.log(" User Sign out");
                setSuccess("Log Out Successful")
            })
            .catch((err) => {
            setError("Something Went Wrong"); 
        
        })
    }

    const login = (email, password) => {
        setError(null)
        setSuccess(null)
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                dispatch({ type: 'LOGIN', payload: res.user })
                setSuccess("Login Successful")
            })
            .catch((err) => {
                setError(err.message)
            })
    }

 

    return {logout, login, success, error}
}