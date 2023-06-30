// Home.js
import React from 'react';
import logo from '../../image/logo.png'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    const handleNext = () => {
        navigate('/services')
    }


    return (
        <div className="relative bg-white text-[#061c31] p-8 flex flex-col items-start py-52">
            <div className='absolute top-0 left-10'><img src={logo} alt='Logo' className='opacity-60 w-52'/></div>

            <h1 className="text-3xl font-semibold">Thanks for your interest in hiring a PHP Developer!</h1>
            <p className="text-lg max-w-lg mb-2">Before we get started, we`d like to ask a few questions to better understand your business needs.</p>
            <Button title={'START'} sizeW={14} sizeH={12} handleNext={handleNext} />
        </div>
    );
};

export default Home;
