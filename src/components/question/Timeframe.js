import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../utils/QuizeContext'
import Button from '../Button/Button'
import logo from '../../image/logo.png'
import BackButton from '../BackButton/BackButton'

const Timeframe = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()

    const timeframes = [
        'Begin Immediately',
        'Begin in 1-3 Months',
        'Begin in 3-6 Months',
        'Begin in 6+ Months',
    ]

    const [selectedTimeframe, setSelectedTimeframe] = useState('')

    const handleRadioChange = (timeframe) => {
        setSelectedTimeframe(timeframe)
    }

    const handleNext = () => {
        saveAnswer('timeframe', selectedTimeframe)
        navigate('/budget') // replace '/budget' with the actual path
    }

    return (
        <div className='text-white p-6 relative'>
            <img src={logo} alt='Logo' className='logo__position w-72 object-contain' />
            <h1 className='text-3xl mb-4'>What is the timeframe for this project?</h1>
            {timeframes.map((timeframe) => (
                <div key={timeframe} className='mb-2'>
                    <input
                        type='radio'
                        id={timeframe}
                        name='timeframe'
                        value={timeframe}
                        checked={selectedTimeframe === timeframe}
                        onChange={() => handleRadioChange(timeframe)}
                        className='mr-2'
                    />
                    <label htmlFor={timeframe} className='text-xl font-light opacity-80'>
                        {timeframe}
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

export default Timeframe
