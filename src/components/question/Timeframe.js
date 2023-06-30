// Timeframe.js
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../utils/QuizeContext'

const Timeframe = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()

    const handleAnswer = (answer) => {
        saveAnswer('timeframe', answer)
        navigate('/budget')
    }

    return (
        <div>
            <h1>What is the timeframe for this project?</h1>
            <button onClick={() => handleAnswer('Begin Immediately')}>Begin Immediately</button>
            {/* остальные кнопки */}
        </div>
    )
}

export default Timeframe
