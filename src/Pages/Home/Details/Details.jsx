import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData()
    console.log(details)
    return (
        <div>
            this is details page 
        </div>
    );
};

export default Details;