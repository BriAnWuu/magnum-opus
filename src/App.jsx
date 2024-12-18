import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useFetcher } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import SocketBroadcast from './components/SocketBroadcast/SocketBroadcast'
import Artist from './pages/Artist/Artist'
import ArtworkDetailPage from './pages/ArtworkDetailPage/ArtworkDetailPage'
import ArtworkPage from './pages/ArtworkPage/ArtworkPage'
import BidPage from './pages/BidPage/BidPage'
import Event from './pages/Event/Event'
import Exhibition from './pages/Exhibition/Exhibition'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

function App() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const user_id = sessionStorage.getItem("user_id");
    if (user_id) {
      setUserId(+user_id);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home setUserId={setUserId} /> }></Route>
          <Route path='artwork' element={ <ArtworkPage /> }></Route>
          <Route path='artwork/:artworkId' element={ <ArtworkDetailPage /> }></Route>
          <Route path='artist' element={ <Artist /> }></Route>
          <Route path='exhibition' element={ <Exhibition /> }></Route>
          <Route path='event' element={ <Event /> }></Route>
          <Route path='bid/:artworkId' element={ <BidPage /> }></Route>
          <Route path='*' element={ <NotFound /> }></Route>
        </Routes>
        <SocketBroadcast userId={userId} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
