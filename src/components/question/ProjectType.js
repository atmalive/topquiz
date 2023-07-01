import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../image/logo.png'
import { useQuiz } from '../../utils/QuizeContext'
import Button from '../Button/Button'
import BackButton from '../BackButton/BackButton'

const ProjectType = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()
    const [selectedProjectType, setSelectedProjectType] = useState('')

    const projectTypes = ['New project', 'Update of an existing project', 'Other']

    const handleRadioChange = (projectType) => {
        setSelectedProjectType(projectType)
    }

    const handleNext = () => {
        saveAnswer('projectType', selectedProjectType)
        navigate('/timeframe') // replace '/next-page' with the actual path
    }

    return (
        <div className='text-white p-6'>
            <img src={logo} alt='Logo' />
            <h1 className='text-3xl mb-4'>What type of project is this?</h1>
            {projectTypes.map((type) => (
                <div key={type} className='mb-2'>
                    <input
                        type='radio'
                        id={type}
                        name='projectType'
                        value={type}
                        checked={selectedProjectType === type}
                        onChange={() => handleRadioChange(type)}
                        className='mr-2'
                    />
                    <label htmlFor={type} className='text-xl font-light opacity-80'>
                        {type}
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

export default ProjectType
