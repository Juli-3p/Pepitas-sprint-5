import { Routes, Route } from 'react-router-dom'
import ProductsList from './pages/products/ProductsList/ProductList.jsx'
import ProductView from './pages/products/ProductView/ProductView.jsx'
import CategoriesList from './pages/categories/CategoriesList/CategoriesList.jsx'
import ProductNew from './pages/products/ProductNew/ProductNew.jsx'
import './App.css'
import Home from './pages/home/Home.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/products/:id" element={<ProductView />} />
      <Route path="/products/new" element={<ProductNew />} />
      <Route path="/categories" element={<CategoriesList />} />
    </Routes>
  )
}

export default App
