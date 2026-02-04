import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
            <nav className="mt-3 md:mt-0">
                <a href="/" className="text-sm mx-2 hover:underline">Home</a>
                <a href="/about" className="text-sm mx-2 hover:underline">About</a>
                <a href="/contact" className="text-sm mx-2 hover:underline">Contact</a>
            </nav>
        </div>
    </footer>
    </div>
  )
}

export default Footer
