import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../images/error.jpg';

const ErrorPage = () => {
    return (
        <div className='w-full max-h-screen lg:flex flex-col justify-center items-center'>
            <img className='lg:w-2/4 md:w-2/3 w-2/3 mx-auto lg:mt-10 md:mt-10 mt-72' src={Image} alt="" />
            <p className='text-center text-rose-800'><Link className='border-b-2 mb-2' to={'/'}>Back to Home</Link></p>
        </div>
    );
};

export default ErrorPage;