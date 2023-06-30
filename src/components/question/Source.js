// Source.js
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../utils/QuizeContext'

const Source = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()

    const handleAnswer = (answer) => {
        saveAnswer('source', answer)
        navigate('/thank-you')
    }

    return (
        <div>
            <h1>How did you hear about WestLink?</h1>
            <button onClick={() => handleAnswer('Referral/ Word of mouth')}>
                Referral/ Word of mouth
            </button>
            {/* остальные кнопки */}
        </div>
    )
}

export default Source
