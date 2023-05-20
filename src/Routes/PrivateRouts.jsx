import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouts = ({children}) => {
    const {user ,loading} = useContext(AuthContext)
    const location = useLocation()


    if(loading){
        return <progress className="progress  w-1/2 mx-auto"></progress>
    }
    if(user){
        return children
    }
    else{
        return <Navigate state={{from:location}} to='/login' replace></Navigate>
    }
};

export default PrivateRouts;