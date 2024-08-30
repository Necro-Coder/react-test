import React from 'react'
import { useState } from 'react'
import { ROUTES } from '../../routes/api/api';
import './App.css'

function App() {
  const [data, setData] = useState(0)
  React.useEffect(() => {
    fetch(ROUTES.API_EXAMPLE)
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          {!data ? 'Loading...' : data}
        </p>
      </div>
    </>
  )
}

export default App
