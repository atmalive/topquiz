// Budget.js
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../utils/QuizeContext'

const Budget = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()

    const handleAnswer = (answer) => {
        saveAnswer('budget', answer)
        navigate('/capabilities')
    }

    return (
        <div>
            <h1>Do you have a fixed budget in mind for this project?</h1>
            <button onClick={() => handleAnswer('< $50,000')}>750000</button>
            {/* остальные кнопки */}
        </div>
    )
}

export default Budget
