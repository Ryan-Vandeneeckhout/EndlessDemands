import { useAuthContext } from '../../firebase/firebaseHooks/useAuthContext';
import UserStoreInputCallAPIAndStoreItemCointainer from '../mainStore/UserStoreInputCallAPIAndStoreItemCointainer.js';
import { Navigate } from 'react-router-dom';

const HandleNav = () => {

    const { user, authIsReady } = useAuthContext()

    return (
        //Force User Sign in to go to Shopping Page 
        <>
        {authIsReady && (
            <>
            {user && <UserStoreInputCallAPIAndStoreItemCointainer />}
            {!user && <Navigate to="/login"/>}
            </>
            )}
        </>
    )
}

export default HandleNav; 