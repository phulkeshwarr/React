import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {

    return (
        <div>
            <Link className='px-3 py-2 rounded hover:bg-gray-700 hover:text-white' to='/product/men'>Men</Link>
            <Link className='px-3 py-2 rounded hover:bg-gray-700 hover:text-white' to='/product/women'>Women</Link>
            <Link className='px-3 py-2 rounded hover:bg-gray-700 hover:text-white' to='/product/kids'>Kids</Link>
            <Link className='px-3 py-2 rounded hover:bg-gray-700 hover:text-white' to='/product/dynamicrouter/123'>Dynamic Router</Link>

            {/* <article className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <img
                    className="w-full object-cover h-48"
                    src="https://via.placeholder.com/400x200"
                    alt="Sample product"
                />
                <div className="px-4 py-3">
                    <h2 className="font-semibold text-xl mb-1">Sample Product</h2>
                    <p className="text-gray-600 text-sm">
                        A short description of the product. Replace with real data via props or API.
                    </p>
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                    <span className="text-lg font-bold">$19.99</span>
                    <button
                        onClick={() => alert('Added to cart')}
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                        Add to cart
                    </button>
                </div>
            </article> */}
            <Outlet />
        </div>
    )
}

export default Product
