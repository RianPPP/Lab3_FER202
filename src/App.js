import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Narbar from "./components/Navbar";
import Slider from "./components/Slider";
import Menu from "./components/Menu";
import Reserv from "./components/Reserv";
import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//         <div className="bg-white">
//           <Narbar/>
//           <Routes>

//           </Routes>
//           {/* Nav */}
//           {/* This is Slider part */}
//           <Row>

//           </Row>

//           {/* This is Menu part */}
//           <Row className='mt-5'>

//             <Col>
//               <Card >
//                 <Card.Img variant="top" src={menu1} />
//                 <Card.Body>
//                   <Card.Title>Card Title</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make up the
//                     bulk of the card's content.
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col>
//               <Card>
//                 <Card.Img variant="top" src={menu2} />
//                 <Card.Body>
//                   <Card.Title>Card Title</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make up the
//                     bulk of the card's content.
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col>
//               <Card>
//                 <Card.Img variant="top" src={menu3} />
//                 <Card.Body>
//                   <Card.Title>Card Title</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make up the
//                     bulk of the card's content.
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col>
//               <Card>
//                 <Card.Img variant="top" src={menu4} />
//                 <Card.Body>
//                   <Card.Title>Card Title</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make up the
//                     bulk of the card's content.
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//             </Col>

//           </Row>

//           {/* This is ReservationForm */}
//           <Row className='mt-5'>
//             <div className="container p-5">
//               <h2 className="text-center mt-3 mb-4">Book your table</h2>
//               <Form>
//                 <Row className="mb-3">
//                   <Col>
//                     <Form.Group controlId="formName">
//                       <Form.Label>Your Name</Form.Label>
//                       <Form.Control type="text" placeholder="Enter your name" />
//                     </Form.Group>
//                   </Col>
//                   <Col>
//                     <Form.Group controlId="formEmail">
//                       <Form.Label>Your Email</Form.Label>
//                       <Form.Control type="email" placeholder="Enter your email" />
//                     </Form.Group>
//                   </Col>
//                   <Col>
//                     <Form.Group controlId="formServer">
//                       <Form.Label>Select a Server</Form.Label>
//                       <Form.Control as="select" defaultValue="Choose...">
//                         <option>Choose...</option>
//                         <option>Server 1</option>
//                         <option>Server 2</option>
//                         <option>Server 3</option>
//                       </Form.Control>
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row className="mb-3">
//                   <Col>
//                     <Form.Group controlId="formTextArea">
//                       <Form.Label>Additional Requests</Form.Label>
//                       <Form.Control
//                         as="textarea"
//                         rows={3}
//                         placeholder="Enter any additional requests"
//                       ></Form.Control>
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Button variant="warning" type="submit">
//                   Send Message
//                 </Button>
//               </Form>
//             </div>
//           </Row>

//           <Row className='mt-5'>
//             <footer className="bg-dark text-white">
//               <Container className="py-5">
//                 <Row>
//                   <Col lg={4} md={12} className="mb-4 mb-md-0">
//                     <h5 className="text-uppercase mb-4">About Our Neapolitan Pizza</h5>
//                     <p>
//                       We serve the most delicious pizzas in town, using fresh ingredients and traditional recipes.
//                     </p>
//                     <div className="mt-4">
//                       <Button variant="light" className="me-2"><FaFacebookF /></Button>
//                       <Button variant="light" className="me-2"><FaTwitter /></Button>
//                       <Button variant="light"><FaInstagram /></Button>
//                     </div>
//                   </Col>

//                   <Col lg={4} md={6} className="mb-4 mb-md-0">
//                     <h5 className="text-uppercase mb-4">Contact Us</h5>
//                     <Form.Group className="mb-4">
//                       <Form.Control type="text" placeholder="Search" />
//                     </Form.Group>
//                     <ul className="list-unstyled">
//                       <li className="mb-3"><FaMapMarkerAlt /> 123 Pizza Street, Pizzaville, 12345</li>
//                       <li className="mb-3"><FaEnvelope /> contact@pizzawebsite.com</li>
//                       <li className="mb-3"><FaPhone /> +1 234 567 8900</li>
//                     </ul>
//                   </Col>

//                   <Col lg={4} md={6} className="mb-4 mb-md-0">
//                     <h5 className="text-uppercase mb-4">Opening Hours</h5>
//                     <Table bordered variant="dark">
//                       <tbody>
//                         <tr>
//                           <td>Mon - Thu:</td>
//                           <td>11am - 10pm</td>
//                         </tr>
//                         <tr>
//                           <td>Fri - Sat:</td>
//                           <td>11am - 11pm</td>
//                         </tr>
//                         <tr>
//                           <td>Sunday:</td>
//                           <td>12pm - 9pm</td>
//                         </tr>
//                       </tbody>
//                     </Table>
//                   </Col>
//                 </Row>
//               </Container>
//               <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//                 © 2023 Copyright: <a className="text-white" href="https://pizzawebsite.com/">PizzaWebsite.com</a>
//               </div>
//             </footer>
//           </Row>


//           <CartSection />
//         </div>
//       </Container>
//     </Router>
//   );
// }

// export default App;

function App() {
  const [cartItems, setCartItems] = useState([]); // Manage the cart


  // Function to add pizza to cart
  const addToCart = (pizza) => {
    const existingItem = cartItems.find(item => item.name === pizza.title);
    if (existingItem) {
      // If pizza already exists in the cart, increase quantity
      setCartItems(cartItems.map(item =>
        item.name === pizza.title ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // If pizza is new to cart, add it
      setCartItems([...cartItems, { name: pizza.title, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <div className="bg-dark">
        <Narbar cartItems={cartItems} setCartItems={setCartItems} />
        <Routes>
          <Route path="/" element={
            <>
              <Slider />
              <Menu addToCart={addToCart} /> {/*chuyen addToCart qua CardComponent*/}
              <Reserv />
            </>
          }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;