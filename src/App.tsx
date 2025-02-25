import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage'
import Products from './components/Products';
import CartItem from './components/CartItem';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  )
}

export default App
