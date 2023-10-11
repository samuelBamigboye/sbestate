import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Sign-in" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
}

export default App
