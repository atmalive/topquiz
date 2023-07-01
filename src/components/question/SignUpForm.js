import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../utils/QuizeContext'
import Button from '../Button/Button'
import logo from '../../image/logo.png'

const SignUpForm = () => {
    const navigate = useNavigate()
    const { saveAnswer } = useQuiz()
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Company: '',
        PhoneNumber: '',
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleNext = () => {
        for (const field in formData) {
            saveAnswer(field, formData[field])
        }
        navigate('/thank-you')
    }

    return (
        <div className='text-white p-6 relative'>
            <img src={logo} alt='Logo' className='logo__position w-72 object-contain' />

            <h1 className='text-xl mb-4'>Success! Let`s connect you with talent.</h1>
            {Object.keys(formData).map((field) => (
                <div key={field} className='mb-2'>
                    <label
                        htmlFor={field}
                        className='text-sm text-gray-300 font-light opacity-80 m-2'
                    >
                        {field}
                    </label>
                    <input
                        type='text'
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-600 rounded-md bg-transparent'
                        placeholder={field.toUpperCase()}
                    />
                </div>
            ))}
            <p className='text-sm mb-4 text-gray-500'>
                By completing signup, you are agreeing to
                <a href='/terms-of-service' className='text-white underline ml-2'>
                    Terms of Service
                </a>
            </p>
            <hr className='my-4 opacity-30' />
            <div className='w-full flex justify-end'>
                <Button handleNext={handleNext} title={'SEND'} sizeW={8} sizeH={18} />
            </div>
        </div>
    )
}

export default SignUpForm
