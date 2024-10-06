import './App.css';
import { Card, Carousel, Container, Row, Navbar, NavDropdown, Nav, Form, Button, Col } from 'react-bootstrap';
import pizza1 from './images/pizza1.jpg';
import pizza2 from './images/pizza2.jpg';
import pizza3 from './images/pizza3.jpg';
import menu1 from './images/menu1.jpg';
import menu2 from './images/menu2.jpg';
import menu3 from './images/menu3.jpg';
import menu4 from './images/menu4.jpg';


function App() {
  return (
    <>
      <Container>
        <div className="bg-dark-subtle">
          
{/* This is Navbar */}
          <Row>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container fluid>
                <Navbar.Brand href="#">Pizza House</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">About Us</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                      Contact
                    </Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Row>

{/* This is Slider part */}
          <Row>
            <Carousel>
              <Carousel.Item>
                <img text="First slide" src={pizza1} />
                <Carousel.Caption>
                  <h3>Neapolitan pizza</h3>
                  <p>If you are looking for a traditional Italian pizza, the Neapolitan pizza is the best option. </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img text="Second slide" src={pizza2} />
                <Carousel.Caption>
                  <h3>Neapolitan pizza</h3>
                  <p>If you are looking for a traditional Italian pizza, the Neapolitan pizza is the best option.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img text="Third slide" src={pizza3} />
                <Carousel.Caption>
                  <h3>Pineapple pizza</h3>
                  <p>
                    If you are looking for a traditional Italian pizza, the Neapolitan pizza is the best option.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>

{/* This is Menu part */}
          <Row className='mt-5'>

            <Col>
              <Card >
                <Card.Img variant="top" src={menu1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src={menu2} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src={menu3} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src={menu4} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

          </Row>


       </div>
      </Container>
    </>
  );
}

export default App;
