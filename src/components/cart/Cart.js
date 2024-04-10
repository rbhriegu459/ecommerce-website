import { useContext } from "react";
import { Button, Table, Container } from "react-bootstrap";
import { GlobalContext } from "../../App";
import classes from "./Cart.module.css";

// const cartElements = [
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     quantity: 2,
//   },

//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 3,
//   },

//   {
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
// ];

function Cart() {
  const { showCart, updateShowCart, cartItems } = useContext(GlobalContext);

  const setNotVisibleCart = ()=> {
    updateShowCart(false);
  }

  return (
    <>
      {showCart && (
        <div className={classes.main}>
          <Container className={classes.cartPanel}>
            <Button className={classes.close} onClick={setNotVisibleCart}>X</Button>
            <h1 className={classes.heading}>CART</h1>
            <Table>
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <img className={classes.cartImage} src={item.imageUrl} />{" "}
                      {item.title}
                    </td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <Button variant="danger">REMOVE</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <h3>Total $12.99</h3>
            <Button>PURCHASE</Button>
          </Container>
        </div>
      )}
    </>
  );
}

export default Cart;
