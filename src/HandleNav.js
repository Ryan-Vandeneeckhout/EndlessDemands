import { useAuthContext } from './firebase/firebaseHooks/useAuthContext';
import UserStoreInputCallAPIAndStoreItemCointainer from './components/mainStore/UserStoreInputCallAPIAndStoreItemCointainer.js';
import { Navigate } from 'react-router-dom';

const HandleNav = () => {

    const { user, authIsReady } = useAuthContext()

    return (

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