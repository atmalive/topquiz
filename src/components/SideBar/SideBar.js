import React from 'react';
import { useLocation } from 'react-router-dom';
import betaWorks from '../../image/logo/betaworks.png';
import boss from '../../image/logo/bos.png';
import citizen from '../../image/logo/citizen.png';
import diageo from '../../image/logo/diageo.png';
import gsi from '../../image/logo/gsi.png';
import salesforce from '../../image/logo/salesforce.png';
import uber from '../../image/logo/uber.png';

const images = [betaWorks, salesforce, citizen, diageo, boss, gsi, uber];

const SideBar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className=" min-h-screen bg-[#f1f5f8] items-center px-16">
            {isHome && (  <div className="min-h-screen relative max-w-sm flex flex-col justify-center items-center gap-4">
                <h2 className="text-gray-700 opacity-60">TRUSTED BY</h2>

                    <div className="grid grid-cols-2 gap-3 justify-center items-center">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="w-24 h-24 m-2 object-contain"
                            />
                        ))}
                    </div>

            </div>  )}
        </div>
    );
};

export default SideBar;
