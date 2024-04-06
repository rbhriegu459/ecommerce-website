import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">Ecomm</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="store">Store</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className={classes.secondHeader}>
        <h1>The Generics</h1>
      </div>
    </>
  );
}

export default Header;
