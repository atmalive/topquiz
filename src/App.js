import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import Home from './components/question/Home'
import ServiceType from './components/question/ServiceType'
import ProjectType from './components/question/ProjectType'
import Timeframe from './components/question/Timeframe'
import Budget from './components/question/Budget'
import Capabilities from './components/question/Capabilities'
import Devices from './components/question/Devices'
import Industries from './components/question/Industries'
import Source from './components/question/Source'
import { QuizProvider } from './utils/QuizeContext'
import SignUpForm from './components/question/SignUpForm'

function App() {
    return (
        <QuizProvider>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/services' element={<ServiceType />} />
                    <Route path='/project-type' element={<ProjectType />} />
                    <Route path='/timeframe' element={<Timeframe />} />
                    <Route path='/budget' element={<Budget />} />
                    <Route path='/capabilities' element={<Capabilities />} />
                    <Route path='/devices' element={<Devices />} />
                    <Route path='/industries' element={<Industries />} />
                    <Route path='/source' element={<Source />} />
                    <Route path='/thank-you' element={<SignUpForm />} />
                </Route>
            </Routes>
        </QuizProvider>
    )
}

export default App
