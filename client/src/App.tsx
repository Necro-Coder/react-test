import React from 'react'
import { useState } from 'react'
import { ROUTES } from '../../routes/api/api';
import './App.css'

function App() {
  const [data, setData] = useState(0)
  React.useEffect(() => {
    fetch(ROUTES.API_BASE + ROUTES.API_USERS)
      .then((res) => res.json())
      .then((data) => setData(data[1].username))
  }, []);

  console.log('data', data)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          {data < 0 || data == undefined ? 'Loading...' : data}
        </p>
      </div>
    </>
  )
}

export default App
