// ThankYou.js
import React from 'react'
import { useQuiz } from '../../utils/QuizeContext'

const ThankYou = () => {
    const { answers } = useQuiz()

    return (
        <div>
            <h1>Thank You for Completing the Quiz!</h1>
            <h2>Your answers:</h2>
            <pre>{JSON.stringify(answers, null, 2)}</pre>
        </div>
    )
}

export default ThankYou
