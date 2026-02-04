import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card'

const App = () => {
  const [userData, setUserData] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false)

  const getData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=15`
      )
      setUserData(response.data)
      setHasLoadedOnce(true)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (hasLoadedOnce) {
      getData()
    }
  }, [page])

  return (
    <div className="bg-gray-800 py-12 min-h-screen">

      {!hasLoadedOnce && (
        <div className="text-center justify-center bg-gray-800 pt-6">
          <button
            className="bg-blue-500 p-3 rounded-3xl text-white active:scale-95 hover:bg-blue-600 transition"
            onClick={getData}
          >
            Get Data
          </button>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-4 pt-8 min-h-96">

        {loading && (
          <div className="w-full min-h-80 flex items-center justify-center">
            <h3 className="text-white text-4xl">Loading.....</h3>
          </div>
        )}

        {!loading && userData.length === 0 && hasLoadedOnce && (
          <h3 className="text-white text-4xl">No Data Found</h3>
        )}

        {!loading && userData.map((user) => (
          <a
            href={user.url}
            target="_blank"
            rel="noreferrer"
            key={user.id}
          >
            <Card user={user} /> 
            
            {/* ↩↩↩
            <div className="h-40 w-60 mb-4 bg-gray-800 text-center text-white">
              <img
                className="h-full w-full rounded-2xl"
                src={user.download_url}
                alt={user.author}
              />
              <h2>{user.author}</h2>
            </div> */}
          </a>
        ))}
      </div>

      {hasLoadedOnce && (
        <div className='flex gap-6 p-4 justify-center pt-8 '>
          <button
            onClick={() => {
              if (page > 2) {
                setPage(page - 1)
              }
            }}
            className='p-4 cursor-pointer bg-blue-500 text-white active:scale-95 rounded-lg hover:bg-blue-600 transition disabled:opacity-50'
            disabled={page === 2}   // we can define disabled:opacity-50 to give a visual cue that button is disabled
            // style={{ opacity: page === 1 ? 0.5 : 1 }} // alternative way to disable button with visual cue
          >
            ← prev
          </button>
          <h3 className="text-white text-2xl pt-2 font-semibold">Page {page}</h3>
          <button
            onClick={() => {
              setPage(page + 1)
            }}
            className='p-4 cursor-pointer bg-blue-500 text-white rounded-lg active:scale-95 hover:bg-blue-600 transition'
          >
            next →
          </button>
        </div>
      )}
    </div>
  )
}

export default App
