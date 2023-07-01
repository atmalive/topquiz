import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../utils/QuizeContext'
import Button from '../Button/Button'
import logo from '../../image/logo.png'
import BackButton from '../BackButton/BackButton'

const Industries = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()

    const industries = [
        'Business',
        'Finance',
        'Fashion',
        'Travel & Hospitality',
        'Health & wellness',
        'Retail & ecommerce',
        'Media & entertainment',
        'Other',
    ]

    const [selectedIndustries, setSelectedIndustries] = useState([])

    const handleCheckboxChange = (industry) => {
        setSelectedIndustries((prevIndustries) =>
            prevIndustries.includes(industry)
                ? prevIndustries.filter((i) => i !== industry)
                : [...prevIndustries, industry],
        )
    }

    const handleNext = () => {
        saveAnswer('industries', selectedIndustries)
        navigate('/source')
    }

    return (
        <div className='text-white p-6 relative'>
            <img src={logo} alt='Logo' className='logo__position w-72 object-contain' />
            <h1 className='text-3xl mb-4'>Pick the industries related to your project?</h1>
            {industries.map((industry) => (
                <div key={industry} className='mb-2'>
                    <input
                        type='checkbox'
                        id={industry}
                        name='industry'
                        value={industry}
                        checked={selectedIndustries.includes(industry)}
                        onChange={() => handleCheckboxChange(industry)}
                        className='mr-2'
                    />
                    <label htmlFor={industry} className='text-xl font-light opacity-80'>
                        {industry}
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

export default Industries
