import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <button onClick={handleBack} className='text-white flex items-center gap-2'>
            <span>&larr; BACK</span>
        </button>
    )
}

export default BackButton
