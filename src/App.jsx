import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ArtworkDetailPage from './pages/ArtworkDetailPage/ArtworkDetailPage'
import ArtworkPage from './pages/ArtworkPage/ArtworkPage'
import BidPage from './pages/BidPage/BidPage'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='artwork' element={ <ArtworkPage /> }></Route>
          <Route path='artwork/:artworkId' element={ <ArtworkDetailPage /> }></Route>
          <Route path='bid/:bidId' element={ <BidPage /> }></Route>
          <Route path='*' element={ <NotFound /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
