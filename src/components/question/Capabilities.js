// Capabilities.js
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../utils/QuizeContext'

const Capabilities = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()

    const handleAnswer = (answer) => {
        saveAnswer('capabilities', answer)
        navigate('/devices')
    }

    return (
        <div>
            <h1>What capabilities are needed for this project?</h1>
            {/* ваши компоненты */}
        </div>
    )
}

export default Capabilities
