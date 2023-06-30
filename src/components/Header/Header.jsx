import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className=' absolute top-0 w-full flex justify-center items-center'>
            <div className='relative w-full'>
                <nav
                    className='relative flex items-center justify-between sm:h-16 md:justify-center'
                    aria-label='Global'
                >
                    <div className='hidden md:flex md:space-x-10 list-none'>
                        <li>
                            <Link
                                to={'/'}
                                className='text-base font-normal text-gray-500 list-none hover:text-gray-900'
                                target=''
                            >
                                To Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/StartQuize'}
                                className='text-base font-normal text-gray-500 list-none hover:text-gray-900'
                                target=''
                            >
                                StartQuize
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/services'}
                                className='text-base font-normal text-gray-500 list-none hover:text-gray-900'
                                target=''
                            >
                                ServiceType
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/ProjectType'}
                                className='text-base font-normal text-gray-500 list-none hover:text-gray-900'
                                target=''
                            >
                                ProjectType
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/Timeframe'}
                                className='text-base font-normal text-gray-500 list-none hover:text-gray-900'
                                target=''
                            >
                                Timeframe
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/Budget'}
                                className='text-base font-normal text-gray-500 list-none hover:text-gray-900'
                                target=''
                            >
                                Budget
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/Capabilities'}
                                className='text-base font-normal text-gray-500 list-none hover:text-gray-900'
                                target=''
                            >
                                Capabilities
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/Devices'}
                                className='text-base font-normal text-gray-500 list-none hover:text-gray-900'
                                target=''
                            >
                                Devices
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/Industries'}
                                className='text-base font-normal text-gray-500 list-none hover:text-gray-900'
                                target=''
                            >
                                Industries
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/Source'}
                                className='text-base font-normal text-gray-500 list-none hover:text-gray-900'
                                target=''
                            >
                                Source
                            </Link>
                        </li>
                    </div>
                </nav>
            </div>
        </header>
    )
}
