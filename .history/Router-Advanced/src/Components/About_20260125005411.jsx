import React from 'react'

const About = () => {
  return (
    <div>
        <button className='px-4 py-2 bg-blue-600 text-white rounded active: hover:bg-blue-700'>Return to home page</button>
    <section className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About This App</h1>
        <p className="text-gray-700 mb-4">
            This is a simple React notes application demonstrating routing, state management, and responsive UI.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Built with React functional components and hooks</li>
            <li>Client-side routing with react-router</li>
            <li>Styled with Tailwind CSS (optional)</li>
        </ul>
        <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Your Name — feel free to customize this page.
        </p>
    </section>
    </div>
  )
}

export default About
