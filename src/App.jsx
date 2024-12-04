import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import ArtworkDetailPage from './pages/ArtworkDetailPage/ArtworkDetailPage'
import ArtworkPage from './pages/ArtworkPage/ArtworkPage'
import BidPage from './pages/BidPage/BidPage'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='artwork' element={ <ArtworkPage /> }></Route>
          <Route path='artwork/:artworkId' element={ <ArtworkDetailPage /> }></Route>
          <Route path='bid/:auctionId' element={ <BidPage /> }></Route>
          <Route path='*' element={ <NotFound /> }></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
