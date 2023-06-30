// Devices.js
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../utils/QuizeContext'

const Devices = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()

    const handleAnswer = (answer) => {
        saveAnswer('devices', answer)
        navigate('/industries')
    }

    return (
        <div>
            <h1>What devices does this project need to be building for?</h1>
            <button onClick={() => handleAnswer('Mobile')}>Mobile</button>
            {/* остальные кнопки */}
        </div>
    )
}

export default Devices
