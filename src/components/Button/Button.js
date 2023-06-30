import React from 'react';

const Button = ({ title, sizeW, sizeH, handleNext }) => {
    const buttonStyles = {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '100px',
        justifyContent: 'center',
        padding: `${sizeW}px ${sizeH}px`,
        background: 'linear-gradient(to right, #ffa311, #ffd928)',
        borderRadius: '0.25rem',
        outline: 'none',
        color: 'black',
    };

    const svgStyles = {
        width: '18px',
        height: '18px',
        marginLeft: '0.5rem',
    };
    const handleButton = () => {
        handleNext();
    };

    return (
        <button style={buttonStyles} onClick={handleButton}>
            <span className='text-base font-semibold'>{title}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                style={svgStyles}
                viewBox="0 0 96 96"
                fill="currentColor"
            >
                <path d="M12 52h62.344L53.172 73.172a4 4 0 1 0 5.657 5.656l28-28a4 4 0 0 0 0-5.656l-28-28A3.989 3.989 0 0 0 56 16a4 4 0 0 0-2.828 6.828L74.344 44H12a4 4 0 0 0 0 8z" />
            </svg>
        </button>
    );
};

export default Button;
