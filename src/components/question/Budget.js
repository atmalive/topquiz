import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../utils/QuizeContext'
import Button from '../Button/Button'
import logo from '../../image/logo.png'
import BackButton from '../BackButton/BackButton'

const Budget = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()

    const budgets = [
        '< $50,000',
        '$50,000 - $250,000',
        '$250,000 - $500,000',
        '$500,000+',
        'I don\'t have a fixed budget',
    ]

    const [selectedBudget, setSelectedBudget] = useState('')

    const handleRadioChange = (budget) => {
        setSelectedBudget(budget)
    }

    const handleNext = () => {
        saveAnswer('budget', selectedBudget)
        navigate('/capabilities') // replace '/capabilities' with the actual path
    }

    return (
        <div className='text-white p-6 relative'>
            <img src={logo} alt='Logo' className='logo__position w-72 object-contain' />
            <h1 className='text-3xl mb-4'>Do you have a fixed budget in mind for this project?</h1>
            {budgets.map((budget) => (
                <div key={budget} className='mb-2'>
                    <input
                        type='radio'
                        id={budget}
                        name='budget'
                        value={budget}
                        checked={selectedBudget === budget}
                        onChange={() => handleRadioChange(budget)}
                        className='mr-2'
                    />
                    <label htmlFor={budget} className='text-xl font-light opacity-80'>
                        {budget}
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

export default Budget
