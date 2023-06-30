// Industries.js
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../utils/QuizeContext'

const Industries = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()

    const handleAnswer = (answer) => {
        saveAnswer('industries', answer)
        navigate('/source')
    }

    return (
        <div>
            <h1>Pick the industries related to your project?</h1>
            <button onClick={() => handleAnswer('Business')}>Business</button>
            {/* остальные кнопки */}
        </div>
    )
}

export default Industries
