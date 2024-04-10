import { useContext } from "react";
import Generics from "../header/Generics";
import Merch from "./Merch";
import Music from "./Music";
import { GlobalContext } from "../../App";

function Store() {
  const {cartItems, updateCartItems} = useContext(GlobalContext);
  const {totalItems, updateTotalItems} = useContext(GlobalContext);

  const addItemToCart = (item) =>{
    updateCartItems(() => {
      return [...cartItems, item];
    })
  }

  const totalItemsInCart = () =>{
    updateTotalItems(totalItems+1);
  }

  return (
    <>
      <Generics />
      <Music addItemToCart={addItemToCart} totalItems={totalItemsInCart}/>
      <Merch addItemToCart={addItemToCart}/>
    </>
  );
}

export default Store;
