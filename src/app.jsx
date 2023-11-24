import './app.css'
import Header from './components/Header'
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
          <Route path='/' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </main> 
    </>
  )
}

export default App