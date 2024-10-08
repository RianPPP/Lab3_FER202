import './App.css';
import { Card, Carousel, Container, Row, Navbar, NavDropdown, Nav, Form, Button, Col, Table } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
        <div className="bg-white">

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
                <img className="d-block w-100" text="First slide" src={pizza1} />
                <Carousel.Caption>
                  <h3>Neapolitan pizza</h3>
                  <p>If you are looking for a traditional Italian pizza, the Neapolitan pizza is the best option. </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" text="Second slide" src={pizza2} />
                <Carousel.Caption>
                  <h3>Neapolitan pizza</h3>
                  <p>If you are looking for a traditional Italian pizza, the Neapolitan pizza is the best option.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" text="Third slide" src={pizza3} />
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

          {/* This is ReservationForm */}
          <Row className='mt-5'>
            <div className="container p-5">
              <h2 className="text-center mt-3 mb-4">Book your table</h2>
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="formName">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formServer">
                      <Form.Label>Select a Server</Form.Label>
                      <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Server 1</option>
                        <option>Server 2</option>
                        <option>Server 3</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="formTextArea">
                      <Form.Label>Additional Requests</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter any additional requests"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="warning" type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
          </Row>

          <Row className='mt-5'>
            <footer className="bg-dark text-white">
              <Container className="py-5">
                <Row>
                  <Col lg={4} md={12} className="mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-4">About Our Neapolitan Pizza</h5>
                    <p>
                      We serve the most delicious pizzas in town, using fresh ingredients and traditional recipes.
                    </p>
                    <div className="mt-4">
                      <Button variant="light" className="me-2"><FaFacebookF /></Button>
                      <Button variant="light" className="me-2"><FaTwitter /></Button>
                      <Button variant="light"><FaInstagram /></Button>
                    </div>
                  </Col>

                  <Col lg={4} md={6} className="mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-4">Contact Us</h5>
                    <Form.Group className="mb-4">
                      <Form.Control type="text" placeholder="Search" />
                    </Form.Group>
                    <ul className="list-unstyled">
                      <li className="mb-3"><FaMapMarkerAlt /> 123 Pizza Street, Pizzaville, 12345</li>
                      <li className="mb-3"><FaEnvelope /> contact@pizzawebsite.com</li>
                      <li className="mb-3"><FaPhone /> +1 234 567 8900</li>
                    </ul>
                  </Col>

                  <Col lg={4} md={6} className="mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-4">Opening Hours</h5>
                    <Table bordered variant="dark">
                      <tbody>
                        <tr>
                          <td>Mon - Thu:</td>
                          <td>11am - 10pm</td>
                        </tr>
                        <tr>
                          <td>Fri - Sat:</td>
                          <td>11am - 11pm</td>
                        </tr>
                        <tr>
                          <td>Sunday:</td>
                          <td>12pm - 9pm</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Container>
              <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright: <a className="text-white" href="https://pizzawebsite.com/">PizzaWebsite.com</a>
              </div>
            </footer>
          </Row>

        </div>
      </Container>
    </>
  );
}

export default App;
