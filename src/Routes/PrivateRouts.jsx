import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouts = ({children}) => {
    const {user ,loading} = useContext(AuthContext)
    if(loading){
        return <progress className="progress  w-1/2 mx-auto"></progress>
    }
    if(user){
        return children
    }
    else{
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRouts;