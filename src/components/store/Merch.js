import { Card, Button, Row, Col, Container } from "react-bootstrap";
import classes from './Store.module.css';

function Merch() {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    }
  ];

  return (
    <>
      <Container className={classes.mainContainer}>
        <h1>MERCH</h1>
        <Row className={classes.row}>
          {productsArr.map((item, i) => (
            <Col md={6} className={classes.col}>
              <Card className={classes.card} key={i}>
                <Card.Header className={classes.album}>
                  Album {i + 1}
                </Card.Header>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body className={classes.body}>
                  <Card.Text>${item.price}</Card.Text>
                  <Button className={classes.button}>Add To Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Merch;
