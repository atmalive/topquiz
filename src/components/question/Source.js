import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../utils/QuizeContext'
import Button from '../Button/Button'
import logo from '../../image/logo.png'
import BackButton from '../BackButton/BackButton'

const Source = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()

    const sources = [
        'Referral/ Word of mouth',
        'Clutch',
        'Google Search',
        'LinkedIn',
        'Other',
    ]

    const [selectedSource, setSelectedSource] = useState('')

    const handleRadioChange = (source) => {
        setSelectedSource(source)
    }

    const handleNext = () => {
        saveAnswer('source', selectedSource)
        navigate('/thank-you') // replace '/thank-you' with the actual path
    }

    return (
        <div className='text-white p-6 relative'>
            <img src={logo} alt='Logo' className='logo__position w-72 object-contain' />
            <h1 className='text-3xl mb-4'>How did you hear about WestLink?</h1>
            {sources.map((source) => (
                <div key={source} className='mb-2'>
                    <input
                        type='radio'
                        id={source}
                        name='source'
                        value={source}
                        checked={selectedSource === source}
                        onChange={() => handleRadioChange(source)}
                        className='mr-2'
                    />
                    <label htmlFor={source} className='text-xl font-light opacity-80'>
                        {source}
                    </label>
                </div>
            ))}
            <hr className='my-4 opacity-30' />
            <div className='w-full flex justify-between'>
                <BackButton />
                <Button handleNext={handleNext} title={'Next'} sizeW={8} sizeH={18} />
            </div>
        </div>
    )
}

export default Source
