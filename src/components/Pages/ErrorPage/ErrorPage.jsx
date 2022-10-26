import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../images/Na_June_37.jpg';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <h1 className='text-9xl font-bold animate-bounce ease-in-out'>
                <span className='text-yellow-500'>4</span>
                <span className='text-lime-600'>0</span> 
                <span className='text-blue-600'>4</span>
                </h1>
            <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold mb-4'>PAGE NOT FOUND</h1>
            <p><Link to={'/'} className='btn'>BACK TO HOME</Link></p>
        </div>
    );
};

export default ErrorPage;