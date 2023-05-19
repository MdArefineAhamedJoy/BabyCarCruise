import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateData = () => {
    const details = useLoaderData()
    useEffect(()=>{
        fetch()
    },[])
    return (
        <div>
            
        </div>
    );
};

export default UpdateData;