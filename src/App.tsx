import './App.css'
import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Introduction from './pages/Introduction'

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Your existing cursor effect code
    const cursor = document.querySelector('.cursor')
    
    const updateCursor = (e: MouseEvent) => {
      if (cursor instanceof HTMLElement) {
        cursor.style.setProperty('--x', `${e.clientX}px`)
        cursor.style.setProperty('--y', `${e.clientY}px`)
      }
    }

    const showCursor = () => {
      if (cursor instanceof HTMLElement) {
        cursor.style.opacity = '1'
      }
    }

    const hideCursor = () => {
      if (cursor instanceof HTMLElement) {
        cursor.style.opacity = '0'
      }
    }

    window.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseenter', showCursor)
    document.addEventListener('mouseleave', hideCursor)
    
    return () => {
      window.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseenter', showCursor)
      document.removeEventListener('mouseleave', hideCursor)
    }
  }, [])

  const handleEnterClick = () => {
    navigate('/introduction');
  };

  return (
    <>
      <div className="cursor"></div>
      <Routes>
        <Route path="/" element={
          <div className="layout">
            <div className="heading container">
              <h1 className="title">The World as We Make It</h1>
              <i className="subheading">access tools</i>
            </div>
            <div className="container">
              <div className="earth"></div>
            </div>
            <div className="buttonContainer">
              <button onClick={handleEnterClick}>Enter</button>
            </div>
            <div className="container">
              <center><span className="text-white windsor-bold">inspired by</span><a target="_blank" href="https://en.wikipedia.org/wiki/Whole_Earth_Catalog" className="windsor-bold text-white"> The Whole Earth Catalog</a></center>
            </div>
          </div>
        } />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </>
  )
}