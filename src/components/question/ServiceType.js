import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../image/logo.png'
import { useQuiz } from '../../utils/QuizeContext'

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
        <div className='text-white p-6'>
            <img src={logo} alt='Logo' />
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
                    <label htmlFor={service} className='text-xl'>
                        {service}
                    </label>
                </div>
            ))}
            <hr className='my-4' />
            <button
                onClick={handleNext}
                className='bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-300 hover:text-white transition duration-200'
            >
                Next
            </button>
        </div>
    )
}

export default ServiceType
