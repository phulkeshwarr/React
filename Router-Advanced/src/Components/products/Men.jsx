import React from 'react'

const Men = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>Men's Collection</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
        }}
      >
        <article
          style={{
            border: '1px solid #e5e7eb',
            padding: 12,
            borderRadius: 8,
            textAlign: 'center',
          }}
        >
          <img
            src="https://via.placeholder.com/300x200?text=Classic+Shirt"
            alt="Classic Shirt"
            style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 6 }}
          />
          <h2 style={{ fontSize: 16, margin: '0.5rem 0' }}>Classic Shirt</h2>
          <p style={{ margin: 0, color: '#6b7280' }}>$29.99</p>
          <button style={{ marginTop: 8, padding: '8px 12px' }}>View</button>
        </article>

        <article
          style={{
            border: '1px solid #e5e7eb',
            padding: 12,
            borderRadius: 8,
            textAlign: 'center',
          }}
        >
          <img
            src="https://via.placeholder.com/300x200?text=Denim+Jacket"
            alt="Denim Jacket"
            style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 6 }}
          />
          <h2 style={{ fontSize: 16, margin: '0.5rem 0' }}>Denim Jacket</h2>
          <p style={{ margin: 0, color: '#6b7280' }}>$69.99</p>
          <button style={{ marginTop: 8, padding: '8px 12px' }}>View</button>
        </article>

        <article
          style={{
            border: '1px solid #e5e7eb',
            padding: 12,
            borderRadius: 8,
            textAlign: 'center',
          }}
        >
          <img
            src="https://via.placeholder.com/300x200?text=Chino+Pants"
            alt="Chino Pants"
            style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 6 }}
          />
          <h2 style={{ fontSize: 16, margin: '0.5rem 0' }}>Chino Pants</h2>
          <p style={{ margin: 0, color: '#6b7280' }}>$39.99</p>
          <button style={{ marginTop: 8, padding: '8px 12px' }}>View</button>
        </article>
      </div>
    </div>
  )
}

export default Men
