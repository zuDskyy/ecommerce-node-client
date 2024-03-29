import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import './styles/app.css'
import { useEffect } from "react";

const App = () => {
  const user = useSelector(state => state.user.currentUser)
  
  return (
    <Router>
      
      <Routes>
      
        <Route exact path="/" element={!user ? <Navigate to="/login"/>:<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={user ? <Navigate to="/"/>:<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<div>"page not found"</div>}/>
      </Routes>
    </Router>
  );
};

export default App;
