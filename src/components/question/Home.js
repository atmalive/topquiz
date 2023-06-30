// Home.js
import React from 'react';
import logo from '../../image/logo.png'
import Button from '../Button/Button'
const Home = () => {
    return (
        <div className="bg-white text-[#061c31] p-8">
            <img src={logo} alt='Logo' className='opacity-60'/>
            <h1 className="text-3xl font-semibold mb-4">Thanks for your interest in hiring a PHP Developer</h1>
            <p className="text-lg">Before we get started, we`d like to ask a few questions to better understand your business needs.</p>
            <Button title={'START'} size={1} />
        </div>
    );
};

export default Home;
