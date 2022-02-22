import { useAuthContext } from '../firebase/firebaseHooks/useAuthContext';
import { Navigate } from 'react-router-dom';
import ProductPage from './APIStorePages/ProductPage';

const HandleProductPage = () => {

    const { user, authIsReady } = useAuthContext()

    return (
        //Force User Sign in to go to Shopping Page 
        <>
        {authIsReady && (
            <>
            {user && <ProductPage />}
            {!user && <Navigate to="/login"/>}
            </>
            )}
        </>
    )
}

export default HandleProductPage; 