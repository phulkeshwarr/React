import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    let navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }

    // const navigateToHome = () => {
    //     window.location.href = '/';
    // }  //  this is not the correct way to navigate in react-router-dom as it reloads the entire app -----onClick={navigateToHome} for calling this function
    return (
        <div>
            <nav className="bg-gray-800 text-white flex">
                <div className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <span className="font-bold text-lg absolute pl-10 left-0">MyApp</span>
                        <div className="hidden md:flex absolute right-0 pr-10 space-x-2">
                            <Link className="px-3 py-2 rounded hover:bg-gray-700" to="/">Home</Link>
                            <Link className="px-3 py-2 rounded hover:bg-gray-700" to="/about">About</Link>
                            <Link className="px-3 py-2 rounded hover:bg-gray-700" to="/product">Products</Link>
                            <Link className="px-3 py-2 rounded hover:bg-gray-700" to="/contacts">Contacts</Link>
                        </div>
                    </div>
                    <div>
                        <button className="md:hidden px-3 py-2 rounded bg-gray-700">Menu</button>
                    </div>
                </div>
            </nav>
            <div className='bg-gray-400 p flex justify-center mt-4 space-x-4'> 
                <button className='px-4 py-2 bg-blue-600 text-white rounded active:scale-97 cursor-pointer hover:bg-blue-700' onClick={() => navigateToHome()}>Return to home page</button>
        <button className='px-4 py-2 bg-blue-600 text-white rounded active:scale-97 cursor-pointer hover:bg-blue-700' onClick={() => navigate(-1)}>Back</button>
        <button className='px-4 py-2 bg-blue-600 text-white rounded active:scale-97 cursor-pointer hover:bg-blue-700' onClick={() => navigate(+1)}>Next</button>
            </div>
        </div>
    )
}

export default Navbar
