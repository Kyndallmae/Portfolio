import './app.jsx'
import Header from './components/header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/aboutme'
import Portfolio from './components/portfolio'
import Contact from './components/contactinfo'
import Footer from './components/footer'

function App() {



  return (
    <>
    
      <Header /> 
      <main>
      <BrowserRouter>
        <Routes>
          <Route path='/aboutme' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contactinfo' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </main> 
    </>
  )
}

export default App