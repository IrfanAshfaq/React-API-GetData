import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    
    setData(response.data)
   
    
  }
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-12 flex flex-col items-center">
    {/* ✅ Get Data Button */}
    <button
      onClick={getData}
      className="text-xl text-white font-semibold bg-green-800 py-3 px-6 active:scale-105 rounded-md transition duration-300"
    >
      Get Data
    </button>

    {/* ✅ Data Container */}
    <div className="bg-gray-800 mt-6 p-6 text-white w-full max-w-6xl rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((elem, indx) => (
          <div
            key={indx}
            className="bg-gray-200 text-black flex flex-col items-center p-4 rounded-lg shadow-md"
          >
            {/* ✅ Responsive Image */}
            <img
              className="h-32 w-full sm:w-48 object-cover rounded-md"
              src={elem.download_url}
              alt={elem.author}
            />
            {/* ✅ Responsive Author Name */}
            <h1 className="text-lg font-semibold text-center mt-2">{elem.author}</h1>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default App