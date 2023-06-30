import { Header } from '../Header/Header.jsx'
import { Footer } from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <>
            <Header />
            <main className='w-full min-h-screen'>
                <div className='flex'>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    )
}
