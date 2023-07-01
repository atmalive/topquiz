import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../image/logo.png'
import { useQuiz } from '../../utils/QuizeContext'
import Button from '../Button/Button'
import BackButton from '../BackButton/BackButton'

const ServiceType = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()
    const [selectedServices, setSelectedServices] = useState([])

    const services = [
        'Web development',
        'Mobile apps',
        'AI / Machine Learning',
        'UI/UX Design',
        'Enterprise Solutions',
        'Other',
    ]

    const handleCheck = (service) => {
        setSelectedServices((prevServices) =>
            prevServices.includes(service)
                ? prevServices.filter((s) => s !== service)
                : [...prevServices, service],
        )
    }

    const handleNext = () => {
        saveAnswer('services', selectedServices)
        navigate('/project-type')
    }

    return (
        <div className='text-white p-6 relative'>
            <img src={logo} alt='Logo' className='logo__position w-72 object-contain' />
            <h1 className='text-3xl mb-4'>What type of services are you interested in?</h1>
            {services.map((service) => (
                <div key={service} className='mb-2'>
                    <input
                        type='checkbox'
                        id={service}
                        name={service}
                        checked={selectedServices.includes(service)}
                        onChange={() => handleCheck(service)}
                        className='mr-2'
                    />
                    <label htmlFor={service} className='text-xl font-light opacity-80'>
                        {service}
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

export default ServiceType
