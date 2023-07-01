import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../utils/QuizeContext'
import Button from '../Button/Button'
import logo from '../../image/logo.png'
import BackButton from '../BackButton/BackButton'

const Capabilities = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()
    const inputRef = useRef()

    const softSkills = [
        'Teamwork',
        'Communication',
        'Problem Solving',
        // Add more soft skills here...
    ]

    const hardSkills = [
        'JavaScript',
        'Node.JS',
        'React',
        // Add more hard skills here...
    ]

    const [selectedSkills, setSelectedSkills] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [filteredSkills, setFilteredSkills] = useState([])
    const [showDropdown, setShowDropdown] = useState(false)
    const [skills, setSkills] = useState(hardSkills) // default to hard skills

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
        setShowDropdown(true)
    }

    const handleDropdownClick = (skill) => {
        setSelectedSkills((prev) => [...prev, skill])
        setInputValue('')
        setShowDropdown(false)
    }

    const handleAddPopularSkill = (skill) => {
        setSelectedSkills((prev) => [...prev, skill])
    }

    const handleNext = () => {
        saveAnswer('capabilities', selectedSkills)
        navigate('/devices') // replace '/devices' with the actual path
    }

    const handleSkillTypeChange = (type) => {
        setSkills(type === 'soft' ? softSkills : hardSkills)
    }

    useEffect(() => {
        setFilteredSkills(
            skills.filter((skill) => skill.toLowerCase().includes(inputValue.toLowerCase())),
        )
    }, [inputValue, skills])

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (showDropdown && inputRef.current && !inputRef.current.contains(e.target)) {
                setShowDropdown(false)
            }
        }

        document.addEventListener('mousedown', checkIfClickedOutside)

        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside)
        }
    }, [showDropdown])

    return (
        <div className='text-white p-6 relative'>
            <img src={logo} alt='Logo' className='logo__position w-72 object-contain' />
            <h1 className='text-3xl mb-4'>What capabilities are needed for this project?</h1>
            <div className='dropdown' ref={inputRef}>
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder='Choose Skills'
                    className='border rounded p-2 w-full text-neutral-900'
                />
                {showDropdown && (
                    <div className='dropdown-content'>
                        {filteredSkills.map((skill, index) => (
                            <div
                                className='option'
                                key={index}
                                onClick={() => handleDropdownClick(skill)}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <hr className='my-4 opacity-30' />
            <div>
                <div className='flex justify-start gap-3'>
                    <h2 className='text-xl mb-2'>Popular Skills:</h2>
                    <div className='flex justify-center items-start pt-1' style={{
                        background: 'linear-gradient(to right, #ffa311, #ffd928)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent' }}>
                        <text>SOFT DEVELOPER</text>
                        <svg className='pt-1' width="18" height="18" viewBox="0 0 18 18">
                            <path d="M4.5 6l4.5 4.5L13.5 6" stroke="#2F3435" strokeWidth="2" strokeLinecap="square" />
                        </svg>
                    </div>
                </div>

                <div className='flex gap-3 max-w-sm flex-wrap mb-4'>
                    {skills.slice(0, 10).map(
                        (
                            skill,
                            index, // display top 10 skills based on the current type
                        ) => (
                            <button
                                className='text-white py-1 px-3 rounded-full border border-white opacity-80'
                                key={index}
                                onClick={() => handleAddPopularSkill(skill)}
                            >
                                + {skill}
                            </button>
                        ),
                    )}
                </div>
                <p className='mt-1'>Selected:</p>
                <div className='flex gap-3 max-w-sm flex-wrap mt-1'>
                    {selectedSkills.map((skill, index) => (
                        <button
                            className='bg-white text-neutral-900 py-1 px-3 rounded-full border border-white'
                            key={index}
                        >
                            {skill} *
                        </button>
                    ))}
                </div>
            </div>
            <hr className='my-4 opacity-30' />
            <div className='w-full flex justify-between'>
                <BackButton />
                <Button handleNext={handleNext} title={'Next'} sizeW={8} sizeH={18} />
            </div>
        </div>
    )
}

export default Capabilities
