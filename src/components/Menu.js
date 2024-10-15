import { Card, Col, Button, Row, Spinner } from 'react-bootstrap';
import menu1 from '../images/menu1.jpg';
import menu2 from '../images/menu2.jpg';
import menu3 from '../images/menu3.jpg';
import menu4 from '../images/menu4.jpg';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Menu({ addToCart }) {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://api-demo-4gqb.onrender.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                console.log(data);  // Check the structure in console
                setProducts(data.data);  // Access the 'data' array
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div className="text-center mt-5"><Spinner animation="border" /></div>;
    }

    if (error) {
        return <div className="text-center mt-5 text-danger">Error: {error}</div>;
    }

    return (
        <div className="container p-5">
          <h1 className="text-left p-3">Our Menu</h1>
    
          <div className="row">
            {products.map((pizza, index) => (
              <div key={index} className="col-md-3 mb-3">
                <Card>
                  <div style={{ position: 'relative' }}>
                    <Card.Img variant="top" src={pizza.image} alt={pizza.title} />
                    {pizza.salePrice && <span className="card-sale-tag"></span>}
                  </div>
                  <Card.Body>
                    <Card.Title>{pizza.title}</Card.Title>
                    <Card.Text>
                      {/* Show salePrice if available, otherwise show regular price */}
                      Price: {pizza.salePrice ? (
                        <>
                          <span className="text-muted text-decoration-line-through">${pizza.price}</span>
                          &nbsp;
                          <span className="text-danger">${pizza.salePrice}</span>
                        </>
                      ) : (
                        <>${pizza.price}</>
                      )}
                    </Card.Text>
                    <Button 
                      variant="dark" 
                      className="w-100 text-center"
                      onClick={() => addToCart(pizza)}  // Add to cart
                    >
                      Buy
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
    

        </div>
      );
    // return (
    //     <Row className='mt-5'>

    //         <Col>
    //             <Card >
    //                 <Card.Img variant="top" src={menu1} />
    //                 <Card.Body>
    //                     <Card.Title>Card Title</Card.Title>
    //                     <Card.Text>
    //                         Some quick example text to build on the card title and make up the
    //                         bulk of the card's content.
    //                     </Card.Text>
    //                     <Button
    //                         variant="dark"
    //                         onClick={() => addToCart(pizza)}
    //                     >
    //                         Buy

    //                     </Button>
    //                 </Card.Body>
    //             </Card>
    //         </Col>

    //         <Col>
    //             <Card>
    //                 <Card.Img variant="top" src={menu2} />
    //                 <Card.Body>
    //                     <Card.Title>Card Title</Card.Title>
    //                     <Card.Text>
    //                         Some quick example text to build on the card title and make up the
    //                         bulk of the card's content.
    //                     </Card.Text>
    //                     <Button variant="primary">Go somewhere</Button>
    //                 </Card.Body>
    //             </Card>
    //         </Col>

    //         <Col>
    //             <Card>
    //                 <Card.Img variant="top" src={menu3} />
    //                 <Card.Body>
    //                     <Card.Title>Card Title</Card.Title>
    //                     <Card.Text>
    //                         Some quick example text to build on the card title and make up the
    //                         bulk of the card's content.
    //                     </Card.Text>
    //                     <Button variant="primary">Go somewhere</Button>
    //                 </Card.Body>
    //             </Card>
    //         </Col>

    //         <Col>
    //             <Card>
    //                 <Card.Img variant="top" src={menu4} />
    //                 <Card.Body>
    //                     <Card.Title>Card Title</Card.Title>
    //                     <Card.Text>
    //                         Some quick example text to build on the card title and make up the
    //                         bulk of the card's content.
    //                     </Card.Text>
    //                     <Button variant="primary">Go somewhere</Button>
    //                 </Card.Body>
    //             </Card>
    //         </Col>

    //     </Row>
    // );
}

export default Menu;



