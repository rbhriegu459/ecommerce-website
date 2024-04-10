import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Store from "./components/store/Store";
import { createContext, useState } from "react";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";

export const GlobalContext = createContext();

function App() {
  const [showAlbum, updateShowAlbum] = useState(false);
  const [showCart, updateShowCart] = useState(false);
  const [cartItems, updateCartItems] = useState([]);
  const [totalItems, updateTotalItems] = useState(0);

  return (
    <GlobalContext.Provider value={{showAlbum, updateShowAlbum, showCart, updateShowCart, cartItems, updateCartItems, totalItems, updateTotalItems}}>
      <Header/>
      <Cart />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </GlobalContext.Provider>
  );
}

export default App;
