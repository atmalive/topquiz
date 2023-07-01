import React, { createContext, useState, useContext } from 'react'

const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const [answers, setAnswers] = useState({})

    const saveAnswer = (question, answer) => {
        setAnswers((prev) => {
            const newAnswers = { ...prev, [question]: answer };
            console.log(newAnswers);
            return newAnswers;
        });
    };

    return <QuizContext.Provider value={{ answers, saveAnswer }}>{children}</QuizContext.Provider>
}

export const useQuiz = () => useContext(QuizContext)
