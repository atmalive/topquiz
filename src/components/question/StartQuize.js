// ServiceType.js
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../utils/QuizeContext'

const ServiceType = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()

    const handleAnswer = (answer) => {
        saveAnswer('serviceType', answer)
        navigate('/project-type')
    }

    return (
        <div>
            <h1>What type of services are you interested in?</h1>
            <button onClick={() => handleAnswer('Web development')}>Web development</button>
            {/* остальные кнопки */}
        </div>
    )
}

export default ServiceType
