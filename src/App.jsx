import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductIdPage from './pages/ProductIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import PurchasePage from './pages/PurchasePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/product' element={<ProductIdPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/purchase' element={<PurchasePage/>}/>
    </Routes>
  )
}

export default App
