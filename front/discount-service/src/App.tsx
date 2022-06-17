import React from 'react'
import { Header } from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { Signup } from './pages/Signup/Signup'
import { useSelector } from 'react-redux'
import { Home } from './pages/Home/Home'
import { Footer } from './components/Footer/Footer'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Discount } from './pages/Discount/Discount'

function App() {

  const user = useSelector((state: any) => state.user.user)

  return (
    <BrowserRouter>
      <div className="App">
        <Header isAuth={user.isAuth} />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home isAuth={user.isAuth} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard user={user} />} />
            <Route path='/discount/:id' element={<Discount user={user} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
