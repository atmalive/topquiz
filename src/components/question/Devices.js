import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../utils/QuizeContext'
import Button from '../Button/Button'
import logo from '../../image/logo.png'
import BackButton from '../BackButton/BackButton'

const Devices = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()

    const devices = [
        'Mobile',
        'Desktop',
        'Wearables / IoT',
        'Other devices'
    ]

    const [selectedDevices, setSelectedDevices] = useState([])

    const handleCheckboxChange = (device) => {
        setSelectedDevices(prevDevices =>
            prevDevices.includes(device)
                ? prevDevices.filter(d => d !== device)
                : [...prevDevices, device]
        )
    }

    const handleNext = () => {
        saveAnswer('devices', selectedDevices)
        navigate('/industries') // replace '/industries' with the actual path
    }

    return (
        <div className='text-white p-6 relative'>
            <img src={logo} alt='Logo' className='logo__position w-72 object-contain' />
            <h1 className='text-3xl mb-4'>What devices does this project need to be building for?</h1>
            {devices.map((device) => (
                <div key={device} className='mb-2'>
                    <input
                        type='checkbox'
                        id={device}
                        name='device'
                        value={device}
                        checked={selectedDevices.includes(device)}
                        onChange={() => handleCheckboxChange(device)}
                        className='mr-2'
                    />
                    <label htmlFor={device} className='text-xl font-light opacity-80'>
                        {device}
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

export default Devices
