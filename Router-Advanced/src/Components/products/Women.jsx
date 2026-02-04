import React from 'react'

const Women = () => {
  return (
    <div>
    <header className="mb-6">
        <h2 className="text-2xl font-semibold">Women's Products</h2>
        <p className="text-sm text-gray-600">Browse our curated selection</p>
    </header>

    <div className="mb-4">
        <input
            type="search"
            placeholder="Search products..."
            className="w-full max-w-md px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
        />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
            { id: 1, name: 'Floral Dress', price: '$49', img: 'https://via.placeholder.com/300x200?text=Floral+Dress' },
            { id: 2, name: 'Linen Top', price: '$29', img: 'https://via.placeholder.com/300x200?text=Linen+Top' },
            { id: 3, name: 'Skinny Jeans', price: '$59', img: 'https://via.placeholder.com/300x200?text=Skinny+Jeans' },
            { id: 4, name: 'Summer Skirt', price: '$39', img: 'https://via.placeholder.com/300x200?text=Summer+Skirt' },
            { id: 5, name: 'Bomber Jacket', price: '$79', img: 'https://via.placeholder.com/300x200?text=Bomber+Jacket' },
            { id: 6, name: 'Casual Tee', price: '$19', img: 'https://via.placeholder.com/300x200?text=Casual+Tee' },
        ].map(product => (
            <article key={product.id} className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-44 object-cover" />
                <div className="p-3">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.price}</p>
                    <button className="mt-3 inline-block px-3 py-1 bg-indigo-600 text-white text-sm rounded">Add to cart</button>
                </div>
            </article>
        ))}
    </div>
    </div>
  )
}

export default Women
