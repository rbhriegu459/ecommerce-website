import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { GlobalContext } from "../../App";

function Header() {

  const {updateShowCart} = useContext(GlobalContext);
  
  const visibleCart= ()=>{
    updateShowCart(true);
  }
  
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">Ecomm</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="store">Store</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link><Button onClick={visibleCart}>Cart</Button></Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
