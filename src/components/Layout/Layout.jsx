import { Footer } from '../Footer/Footer.jsx'
import { Outlet, useLocation } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import { Header } from '../Header/Header'

export const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';


    return (
        <div className={`min-h-screen ${isHome ? 'bg-white' : 'bg-[#061c31]'} text-white`}>
            <Header/>
            <main className='w-full min-h-screen flex justify-around items-center'>
                <div className='m-0 sm:ml-16 w-full flex items-center justify-center'>
                    <Outlet />
                </div>
                <SideBar />
            </main>

        </div>
    )
}
