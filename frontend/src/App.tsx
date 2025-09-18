import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Hospital from './pages/Hospital'
import VideoCall from './pages/VideoCall'
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/video-call" element={<VideoCall />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
