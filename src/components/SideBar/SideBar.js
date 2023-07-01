import React from 'react'
import { useLocation } from 'react-router-dom'
import betaWorks from '../../image/logo/betaworks.png'
import boss from '../../image/logo/bos.png'
import citizen from '../../image/logo/citizen.png'
import diageo from '../../image/logo/diageo.png'
import gsi from '../../image/logo/gsi.png'
import salesforce from '../../image/logo/salesforce.png'
import uber from '../../image/logo/uber.png'
import { useQuiz } from '../../utils/QuizeContext' // import the useQuiz hook

const images = [betaWorks, salesforce, citizen, diageo, boss, gsi, uber]

const SideBar = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'
    const { answers } = useQuiz() // access the saved answers

    return (
        <div className='min-h-screen bg-[#f1f5f8] items-center'>
            {isHome && (
                <div className='min-h-screen relative w-80 max-w-sm flex flex-col justify-center items-center gap-6 '>
                    <h2 className='text-gray-700 opacity-60 text-xl'>TRUSTED BY</h2>

                    <div className='grid grid-cols-2 justify-center items-center gap-10 px-8'>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                className='w-30 h-24 m-2 object-contain'
                            />
                        ))}
                    </div>
                </div>
            )}
            {!isHome && (
                <div className='min-h-screen w-80 flex flex-col justify-center items-start gap-6 text-black'>
                    {Object.keys(answers).map((question) => (
                        answers[question] && (
                            <div key={question} className='relative pl-9'>
                                <h2 className='text-neutral-900 font-bold'>{question}</h2>
                                <div className='flex flex-wrap w-full'> <p>{answers[question].toString() }</p></div>

                                <div className='triangle-right absolute left-0 top-2'></div>
                            </div>
                        )
                    ))}
                </div>
            )}

        </div>
    )
}

export default SideBar
